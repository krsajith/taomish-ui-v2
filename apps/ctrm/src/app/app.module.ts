import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TuiGridComponent } from './tui-grid/tui-grid.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TuiGridComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
