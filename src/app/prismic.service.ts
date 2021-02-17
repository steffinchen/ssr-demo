import { Injectable } from '@angular/core';
import { DefaultClient } from 'prismic-javascript/types/client';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';

@Injectable({
  providedIn: 'root',
})
export class PrismicService {
  apiEndpoint = '';

  client: DefaultClient;

  constructor() {
    this.client = Prismic.client(this.apiEndpoint);
  }

  async getByUid(uid: string): Promise<Document> {
    // return Prismic.api(this.apiEndpoint).then(function (api) {
    //   return api.getByUID('new_landing_page', uid); // An empty query will return all the documents
    // });
    let lang = 'en';
    let resp = await this.client.getByUID('new_landing_page', uid, {});
    return resp;
  }
}
