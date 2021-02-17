import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DummyService } from './dummy.service';
import { PrismicService } from './prismic.service';

@Injectable({
  providedIn: 'root',
})
export class SampleResolver implements Resolve<{ value: string }> {
  constructor(private prismic: PrismicService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<{ value: string }> {
    let doc = await this.prismic.getByUid('home');
    console.log('🚀 -> file: sample.resolver.ts -> line 15 -> resolve -> doc', doc);

    return { value: doc.id };
  }
}
