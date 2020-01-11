import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Produtos } from './produto';
import { httpOptions } from '../config/httpOptions';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtoUrl = 'api/produtos';

  alterouProdutos = new EventEmitter();

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<any> {
    return this.http.get(this.produtoUrl);
  }

  create(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.produtoUrl, produto, httpOptions);
  }

  edit(produto: FormGroup): Observable<Produtos> {
    return this.http.put<Produtos>(
      `${this.produtoUrl}/${produto.value.id}`,
      produto.value,
      httpOptions,
    );
  }

  deleteProduto(id: number): Observable<{}> {
    return this.http.delete(`${this.produtoUrl}/${id}`, httpOptions);
  }
}
