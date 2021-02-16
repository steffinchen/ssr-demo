import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  constructor() {}

  async someAsyncFunction() {}

  somePromiseFunction() {}

  someObservableFunction() {}
}
