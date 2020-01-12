import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProdutoService } from '../produto.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/shared/dialog.service';
import { CategoriaService } from './../../categoria/categoria.service';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categoria/categoria';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
})
export class ProdutoFormComponent implements OnInit {
  public form: FormGroup;
  public isFormEdit: boolean;
  public selected: number;
  public categorias: Observable<Categoria[]>;

  public produtoAdicionada = new EventEmitter();

  constructor(
    private _categoriaService: CategoriaService,
    private _formBuilder: FormBuilder,
    private _produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public _data: any,
    public dialogRef: MatDialogRef<ProdutoFormComponent>,
    private dialogService: DialogService,
    private _alertService: AlertService,
  ) {}

  public ngOnInit() {
    this.categorias = this._categoriaService.getCategorias();
    this.start();
  }

  private start() {
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      categoria: [''],
    });
    if (this._data.data) {
      this.form.patchValue(this._data.data);

      this.isFormEdit = true;
    }
  }

  public onSubmit() {
    this.isFormEdit ? this.update() : this.create();
    this.closeDialog();
  }

  private update() {
    this._produtoService.edit(this.form).subscribe(
      res => {
        this._produtoService.alterouProdutos.emit(res);
        this._alertService.sucess();
      },
      _ => {
        this._alertService.error('sasas');
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

    value = Object.assign(value, { id: newId });
    this._produtoService.create(value).subscribe(
      res => {
        this._produtoService.alterouProdutos.emit(res);
        this._alertService.sucess();
      },
      _ => {
        this._alertService.error();
      },
    );
  }

  public isEdit() {
    return this.isFormEdit ? 'Atualizar' : 'Criar';
  }

  public formClear() {
    this.form.reset();
  }

  public closeDialog() {
    this.dialogService.closeDialog();
  }
}
