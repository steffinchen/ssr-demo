import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleGuard } from './sample.guard';
import { SampleResolver } from './sample.resolver';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '', component: SampleComponent },
  { path: 'r', component: SampleComponent, resolve: { message: SampleResolver } },
  { path: 'g', component: SampleComponent, canActivate: [SampleGuard] },
  { path: 'gr', component: SampleComponent, canActivate: [SampleGuard], resolve: { message: SampleResolver } },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
