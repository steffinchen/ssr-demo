import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyService } from './dummy.service';
import { PrismicService } from './prismic.service';

@Injectable({
  providedIn: 'root',
})
export class SampleGuard implements CanActivate {
  constructor(
    private prismic: PrismicService,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    let doc = await this.prismic.getByUid('home');
    console.log('🚀 -> sample.guard.ts -> canActivate -> doc', doc);
    if (isPlatformServer(this.platformId)) {
      const TEST_KEY = makeStateKey<string>('page-id');
      this.transferState.set(TEST_KEY, doc.id);
    }
    return true;
  }
}
