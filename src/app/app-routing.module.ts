import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleResolver } from './sample.resolver';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '', component: SampleComponent },
  { path: 'r', component: SampleComponent, resolve: { message: SampleResolver } },
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
