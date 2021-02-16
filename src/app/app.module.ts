import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ShellRenderDirective } from './shell-render.directive';
import { ShellNoRenderDirective } from './shell-no-render.directive';
import { NgWelcomeComponent } from './ng-welcome/ng-welcome.component';

@NgModule({
  declarations: [AppComponent, SampleComponent, ShellRenderDirective, ShellNoRenderDirective, NgWelcomeComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
