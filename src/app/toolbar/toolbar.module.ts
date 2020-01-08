import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToolbarComponent } from './toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [BrowserModule, MatToolbarModule, MatIconModule, MatButtonModule],
  providers: [],
  bootstrap: [],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
