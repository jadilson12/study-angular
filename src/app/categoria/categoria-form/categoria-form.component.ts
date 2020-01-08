import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { CategoriaService } from '../categoria.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  form: FormGroup;

  setores = [
    { id: 1, value: 'RH' },
    { id: 2, value: 'Administação' },
    { id: 3, value: 'Atendimento' }
  ];
  constructor(
    private _formBuild: FormBuilder,
    private _http: HttpClient
  ) { }
  // constructor(private categoriaService: CategoriaService) { }
  ngOnInit() {
    this.form = this._formBuild.group({
      $key: [null],
      nome: [''],
      descricao: [null],
    })
  }

  onSubmit() {

    this._http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
      .subscribe(res => {
        console.log(res);
        this.form.reset()
      })
  }
}
