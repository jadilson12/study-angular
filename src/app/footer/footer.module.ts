import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MatCardModule],
  exports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterModule {}
