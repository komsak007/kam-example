import * as express from 'express';
import { setupAppServerConnection } from './connections/app.connection';
import { setupConnection } from './connections/setup.connection';
import { appRoute } from './routes/app.route';
import { graphQLRoute } from './routes/graphql.route';

const app = express();
app.use(express.json());

void setupConnection().then(() => {
  // ExpressJS Middle applied
  setupAppServerConnection(app);
  //Register common route
  appRoute(app);

  //Register GraphQL route and httpServer
  graphQLRoute(app);
});
