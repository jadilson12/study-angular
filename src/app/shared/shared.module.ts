import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogService } from './dialog.service';
import { AlertService } from './alert.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MessageErrorComponent } from './message-error/message-error.component';

@NgModule({
  declarations: [MessageErrorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [MessageErrorComponent],
  providers: [DialogService, AlertService],
})
export class SharedModule {}
