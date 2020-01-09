import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Produtos } from './produto-class.component';
import { PRODUTOS } from '../mock-produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor() {}

  public getProdutos(): Observable<Produtos[]> {
    return of(PRODUTOS);
  }
  public create(formGroup: FormGroup) {
    console.log(formGroup.value);
  }
  public update(produto: object) {
    //
  }
  public delete(id: number) {
    //
  }
}
