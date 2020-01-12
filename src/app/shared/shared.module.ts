import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertService } from './alert.service';
import { ButtonTableListComponent } from './button-table-list/button-table-list.component';
import { DialogService } from './dialog.service';
import { FooterFormComponent } from './footer-form/footer-form.component';
import { MessageErrorComponent } from './message-error/message-error.component';

@NgModule({
  declarations: [MessageErrorComponent, FooterFormComponent, ButtonTableListComponent],
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [MessageErrorComponent, FooterFormComponent, ButtonTableListComponent],
  providers: [DialogService, AlertService],
})
export class SharedModule {}
