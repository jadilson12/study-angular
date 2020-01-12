import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CategoriaService } from '../categoria.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../shared/dialog.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss'],
})
export class CategoriaFormComponent implements OnInit {
  public form: FormGroup;
  public formEdit: boolean;

  public categoriaAdicionada = new EventEmitter();

  constructor(
    private _alertService: AlertService,
    private _formBuilder: FormBuilder,
    private _categoriaService: CategoriaService,
    public dialogRef: MatDialogRef<CategoriaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any,
    private dialogService: DialogService,
  ) {}

  public ngOnInit() {
    this.start();
  }

  private start() {
    this.form = this._formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      id: '',
    });
    if (this._data.data) {
      this.form.patchValue(this._data.data);

      this.formEdit = true;
    }
  }

  public onSubmit() {
    this.formEdit ? this.update() : this.create();
    this.closeDialog();
  }

  private update() {
    this._categoriaService.edit(this.form).subscribe(
      res => {
        this._categoriaService.alterouCategorias.emit(res);
        this._alertService.sucess();
      },
      _ => {
        this._alertService.error();
      },
    );
  }

  private create() {
    let value = this.form.value;

    // start Temporario apenas para api mock
    const newId = Math.random()
      .toString(36)
      .substr(2, 1);
    // end
    if (this.form.valid) {
      value = Object.assign(value, { id: newId });
      this._categoriaService.create(value).subscribe(
        categoria => {
          this._categoriaService.alterouCategorias.emit(categoria);
          this._alertService.sucess();
        },
        _ => {
          this._alertService.error();
        },
      );
    }
  }

  public isEdit() {
    return this.formEdit ? 'Atualizar' : 'Criar';
  }

  public formClear() {
    this.form.reset();
  }

  public closeDialog() {
    this.dialogService.closeDialog();
  }
}
