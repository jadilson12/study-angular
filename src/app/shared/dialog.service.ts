import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogRef: any;
  constructor(public dialog: MatDialog) {}

  openDialog(component: any, data: any) {
    this.dialogRef = this.dialog.open(component, { data: { categoria: data } });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
