import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-confimar-delete',
  templateUrl: './confimar-delete.component.html',
  styleUrls: ['./confimar-delete.component.scss'],
})
export class ConfimarDeleteComponent implements OnInit {
  item: object;
  title: string = '';
  constructor(
    public _dialogRef: MatDialogRef<ConfimarDeleteComponent>,
    private _diaLogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public _data: any,
  ) {}

  ngOnInit() {
    const { categoria, tipo } = this._data.data;
    this.item = categoria;
    this.title = tipo;
  }

  close() {
    this._dialogRef.close();
  }

  confimar() {
    this._diaLogService.canDelete(true);
    this.close();
  }
}
