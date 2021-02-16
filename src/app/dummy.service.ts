import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  constructor() {}

  async someAsyncFunction() {}

  somePromiseFunction(timeout = 2000): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, timeout);
    });
  }

  someObservableFunction() {}
}
