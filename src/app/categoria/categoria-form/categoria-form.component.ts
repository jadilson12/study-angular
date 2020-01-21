import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
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
  form: FormGroup;
  isFormEdit: boolean;
  submitted = false;

  constructor(
    private _alertService: AlertService,
    private _formBuilder: FormBuilder,
    private _categoriaService: CategoriaService,
    @Inject(MAT_DIALOG_DATA) public _data: any,
    public _dialogRef: MatDialogRef<CategoriaFormComponent>,
    private _dialogService: DialogService,
  ) {}

  ngOnInit() {
    this.edit();
  }

  edit() {
    this.form = this._formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.maxLength(10)]],
      id: [''],
    });
    if (this._data.data) {
      this.form.patchValue(this._data.data);
      this.isFormEdit = true;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormEdit) {
      this.update();
    } else {
      this.create();
    }

    this.closeDialog();
  }

  update() {
    this._categoriaService.updateCategoria(this.form.value).subscribe(
      res => {
        this._categoriaService.alterouCategoria.emit(res);
        this._alertService.sucess();
      },
      error => {
        this._alertService.error(error.body.error);
      },
    );
  }

  create() {
    this._categoriaService.createCategoria(this.form.value).subscribe(
      categoria => {
        console.log(categoria);
        this._categoriaService.alterouCategoria.emit(categoria);
        this.formClear();
        this._alertService.sucess();
      },
      error => {
        this._alertService.error(error.body.error);
      },
    );
  }

  isEdit() {
    return this.isFormEdit ? 'Atualizar' : 'Criar';
  }

  formClear() {
    this.form.reset();
  }

  closeDialog() {
    this._dialogService.closeDialog();
  }
}
