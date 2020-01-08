import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nome: new FormControl(''),
    descricao: new FormControl(''),
    tipo: new FormControl('1'),
    setores: new FormControl(0),
    date: new FormControl(''),
    isPublicado: new FormControl(false)
  });

  setores = [
    { id: 1, value: 'RH' },
    { id: 2, value: 'Administação' },
    { id: 3, value: 'Atendimento' }
  ];

  inicializaFormGroup() {
    this.form.setValue({
      $key: null,
      nome: '',
      descricao: '',
      tipo: '1',
      setores: 0,
      date: '',
      isPublicado: false
    });
  }

  constructor() { }
}
