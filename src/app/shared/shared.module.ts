import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MessageErrorComponent } from './message-error/message-error.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DialogService } from './dialog.service';
import { AlertService } from './alert.service';
import { FooterFormComponent } from './footer-form/footer-form.component';
import { ButtonTableListComponent } from './button-table-list/button-table-list.component';
@NgModule({
  declarations: [MessageErrorComponent, FooterFormComponent, ButtonTableListComponent],
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule,
  ],
  exports: [MessageErrorComponent, FooterFormComponent, ButtonTableListComponent],
  providers: [DialogService, AlertService],
})
export class SharedModule {}
