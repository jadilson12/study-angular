import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToolbarComponent } from './toolbar.component';
import { MatSelectModule } from '@angular/material/select';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
