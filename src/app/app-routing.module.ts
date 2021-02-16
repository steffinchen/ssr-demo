import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [{ path: '', component: SampleComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
