import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DummyService } from './dummy.service';

@Injectable({
  providedIn: 'root',
})
export class SampleResolver implements Resolve<{ value: string }> {
  constructor(private dummy: DummyService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<{ value: string }> {
    let message = await this.dummy.somePromiseFunction();
    return { value: message };
  }
}
