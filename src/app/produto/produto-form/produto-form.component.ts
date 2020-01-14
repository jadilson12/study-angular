import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProdutoService } from '../produto.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/shared/dialog.service';
import { CategoriaService } from './../../categoria/categoria.service';
import { Observable } from 'rxjs';
import { CategoriaModel } from 'src/app/categoria/categoria.model';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
})
export class ProdutoFormComponent implements OnInit {
  form: FormGroup;
  isFormEdit: boolean;
  selected: number;
  categorias: Observable<CategoriaModel[]>;

  produtoAdicionada = new EventEmitter();

  constructor(
    private _categoriaService: CategoriaService,
    private _formBuilder: FormBuilder,
    private _produtoService: ProdutoService,
    public _dialogRef: MatDialogRef<ProdutoFormComponent>,
    private _dialogService: DialogService,
    private _alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public _data: any,
  ) {}

  ngOnInit() {
    this.categorias = this._categoriaService.getCategorias();
    this.edit();
  }
  onSubmit() {
    this.isFormEdit ? this.update() : this.create();
    this.closeDialog();
  }

  edit() {
    this.form = this._formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.maxLength(10)]],
      categoria: [''],
      id: [''],
    });
    if (this._data.data) {
      this.form.patchValue(this._data.data);
      this.isFormEdit = true;
    }
  }

  update() {
    this._produtoService.edit(this.form).subscribe(
      res => {
        this._produtoService.alterouProdutos.emit(res);
        this._alertService.sucess();
      },
      error => {
        this._alertService.error(error.body.error);
      },
    );
  }

  create() {
    this._produtoService.create(this.form.value).subscribe(
      res => {
        this._produtoService.alterouProdutos.emit(res);
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
