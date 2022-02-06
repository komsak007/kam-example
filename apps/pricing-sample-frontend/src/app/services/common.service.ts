import { Injectable } from '@angular/core';
import { ISampleModel } from '@pricing-sample-nx/shared-models';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_SAMPLE_QUERY } from './query/common.query';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(public apollo: Apollo) {}

  getSample(id: string): Observable<any> {
    return this.apollo
      .query<{ getSample: ISampleModel }>({
        query: GET_SAMPLE_QUERY,
        fetchPolicy: 'no-cache',
        variables: { id },
      })
      .pipe(map((x) => x.data['getSample']));
  }
}
