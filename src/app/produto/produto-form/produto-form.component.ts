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
    private readonly _categoriaService: CategoriaService,
    private readonly _formBuilder: FormBuilder,
    private readonly _produtoService: ProdutoService,
    public readonly _dialogRef: MatDialogRef<ProdutoFormComponent>,
    public readonly _dialogService: DialogService,
    private readonly _alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public _data: any,
  ) {}

  ngOnInit() {
    this.categorias = this._categoriaService.getCategorias();
    this.edit();
  }
  onSubmit() {
    this.isFormEdit ? this.update() : this.create();
    this._dialogService.closeDialog();
  }

  edit() {
    this.form = this._formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(0)]],
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
    this._produtoService.edit(this.form.value).subscribe(
      res => {
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
        this._alertService.sucess();
      },
      error => {
        this._alertService.error(error.body.error);
      },
    );
  }
}
