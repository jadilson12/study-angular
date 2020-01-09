import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, of, from } from 'rxjs';
import { Categorias } from './categoria-class.component';
import { CATEGORIA } from '../mock-categorias';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  public categoria: Categorias[] = [];
  constructor(private _router: Router) {}

  public getCategorias(): Observable<Categorias[]> {
    return of(CATEGORIA);
  }
  public create(formGroup: FormGroup) {
    let value = formGroup.value;

    const newId = Math.random()
      .toString(36)
      .substr(2, 1);
    value = Object.assign({ id: newId }, value);

    CATEGORIA.push(value);
    this._router.navigate(['/categorias']);
  }

  public edit(categoria: any): void {
    console.log('> edit service ' + categoria);
    CATEGORIA.map((val, index) => {
      if (val.id == categoria.id) {
        CATEGORIA[index] = categoria;
      }
    });
  }
  public delete(id: number): void {
    console.log('> delete service ' + id);
    CATEGORIA.splice(id);
    this.getCategorias();
  }
}
