import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CategoriaService } from '../categoria.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../shared/dialog.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss'],
})
export class CategoriaFormComponent implements OnInit {
  public categoriaform: FormGroup;
  private formEdit: boolean;

  public categoriaAdicionada = new EventEmitter();

  constructor(
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
    this.categoriaform = this._formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      id: '',
    });
    if (this._data.data) {
      this.categoriaform.patchValue(this._data.data);

      this.formEdit = true;
    }
  }

  public onSubmit() {
    this.formEdit ? this.update() : this.create();
    this.closeDialog();
  }

  private update() {
    this._categoriaService.edit(this.categoriaform).subscribe(res => {
      this._categoriaService.alterouCategorias.emit(res);
    });
  }

  private create() {
    let value = this.categoriaform.value;

    // start Temporario apenas para api mock
    const newId = Math.random()
      .toString(36)
      .substr(2, 1);
    // end
    if (this.categoriaform.valid) {
      value = Object.assign(value, { id: newId });
      this._categoriaService.create(value).subscribe(categoria => {
        this._categoriaService.alterouCategorias.emit(categoria);
      });
    }
  }

  public isEdit() {
    return this.formEdit ? 'Atualizar' : 'Criar';
  }

  public formClear() {
    this.categoriaform.reset();
  }

  public closeDialog() {
    this.dialogService.closeDialog();
  }
}
