import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PrismicService } from 'src/app/prismic.service';

@Injectable({
  providedIn: 'root',
})
export class LazyResolver implements Resolve<{ value: string }> {
  constructor(private prismic: PrismicService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<{ value: string }> {
    let doc = await this.prismic.getByUid('home');
    console.log('🚀 -> LazyResolver -> resolve -> doc', doc);

    return { value: doc.id };
  }
}
