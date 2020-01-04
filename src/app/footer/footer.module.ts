import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatIconModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
