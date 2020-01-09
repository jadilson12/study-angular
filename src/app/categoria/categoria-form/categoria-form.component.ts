import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss'],
})
export class CategoriaFormComponent implements OnInit {
  public categoriaform: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _categoriaService: CategoriaService,
    private _location: Location,
  ) {}

  public ngOnInit() {
    this.categoriaform = this._formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  public onSubmit() {
    this._categoriaService.create(this.categoriaform);
  }
  public formClear() {
    this.categoriaform.reset();
  }
  public onBack() {
    this._location.back();
  }
}
