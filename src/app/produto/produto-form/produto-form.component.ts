import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { ProdutoService } from '../produto.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Categorias } from '../../categoria/categoria-class.component';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
})
export class ProdutoFormComponent implements OnInit {
  produtoForm: FormGroup;
  categorias: Categorias[];

  constructor(
    private _formBuilder: FormBuilder,
    private _produtoService: ProdutoService,
    private _categoriaService: CategoriaService,
    private _location: Location,
  ) {}

  ngOnInit() {
    this.inicializarForm();
    this.getCategorias();
  }

  getCategorias(): void {
    console.log('asas');
    this._categoriaService
      .getCategorias()
      .subscribe(itens => (this.categorias = itens));
  }

  inicializarForm() {
    this.produtoForm = this._formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  onSubmit() {
    this._produtoService.create(this.produtoForm);
  }

  formClear() {
    this.produtoForm.reset();
  }
  public onBack() {
    this._location.back();
  }
}
