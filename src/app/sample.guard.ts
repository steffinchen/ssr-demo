import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyService } from './dummy.service';

@Injectable({
  providedIn: 'root',
})
export class SampleGuard implements CanActivate {
  constructor(private dummy: DummyService) {}
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    let data = await this.dummy.somePromiseFunction();
    return true;
  }
}
