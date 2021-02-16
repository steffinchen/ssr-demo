import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SampleResolver implements Resolve<{ value: string }> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ value: string }> {
    return of({ value: 'hello world' });
  }
}
