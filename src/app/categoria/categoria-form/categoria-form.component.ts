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
    private readonly _alertService: AlertService,
    private readonly _formBuilder: FormBuilder,
    private readonly _categoriaService: CategoriaService,
    @Inject(MAT_DIALOG_DATA) public _data: any,
    public readonly _dialogRef: MatDialogRef<CategoriaFormComponent>,
    private readonly _dialogService: DialogService,
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
        this.form.reset();
        this._alertService.sucess();
      },
      error => {
        this._alertService.error(error.body.error);
      },
    );
  }

  closeDialog() {
    this._dialogService.closeDialog();
  }
}
