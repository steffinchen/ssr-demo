import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleGuard } from '../sample.guard';
import { SampleResolver } from '../sample.resolver';
import { LazyComponent } from './lazy.component';
import { LazyGuard } from './lazy.guard';
import { LazyResolver } from './lazy.resolver';

const routes: Routes = [
  { path: '', component: LazyComponent },
  { path: 'gr', component: LazyComponent, canActivate: [LazyGuard], resolve: { message: LazyResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
