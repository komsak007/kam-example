import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

import { OperationDefinitionNode } from 'graphql';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, from, InMemoryCache, split } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';

// import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http'; Die
// import { WebSocketLink } from 'apollo-link-ws'; Die
// import { getMainDefinition } from 'apollo-utilities'; Die
// import { ApolloLink, split } from 'apollo-link'; Die
// import { setContext } from 'apollo-link-context'; Die

const { gqlUrl: uri, wsUri: wsUri } = environment;
export interface InterceptHeaders {
  Authorization: string;
  access_token?: string;
  cookie?: any;
  page_index?: number;
}

export const webSocketErrorSubject = new Subject<Error[]>();

export interface ApolloInstance {
  link: ApolloLink;
  cache: InMemoryCache;
  fetchOptions: { credentials: string };
  defaultOptions: {
    watchQuery: {
      errorPolicy: string;
    };
  };
  resolvers: { [key: string]: string };
}

export function createApollo(httpLink: HttpLink): ApolloInstance {
  const basic = setContext((operation, context) => {
    return {
      headers: {
        Accept: 'charset=utf-8',
      },
    };
  });
  const headerFn = () => {
    const header = {} as InterceptHeaders;

    return header;
  };
  const auth = setContext((operation, context) => {
    const header = headerFn();
    return {
      headers: {
        ...header,
      },
    };
  });
  const http = httpLink.create({ uri, withCredentials: true });
  const protocol = environment.production ? 'wss://' : 'ws://';

  const ws = new WebSocketLink({
    uri: protocol + wsUri,
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: headerFn,
    },
  });
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query) as OperationDefinitionNode;
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    ws,
    http
  );
  return {
    link: from([basic, auth, link]),
    cache: new InMemoryCache({ addTypename: false }),
    fetchOptions: {
      credentials: 'include',
    },
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
    },
    // https://stackoverflow.com/questions/55970271/found-client-directives-in-query-but-no-client-resolvers-were-specified-warni#answer-55970913
    resolvers: {},
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
