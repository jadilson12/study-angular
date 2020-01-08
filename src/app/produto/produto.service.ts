import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: any;
  constructor() {}

  public create(formGroup: FormGroup) {
    console.log(formGroup);
  }
  public read() {
    //
  }
  public update(produto: object) {
    //
  }
  public delete(id: number) {
    //
  }
}
