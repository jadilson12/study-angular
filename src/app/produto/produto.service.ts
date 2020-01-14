import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Produtos } from './produto.model';
import { httpOptions } from '../config/httpOptions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  apiUrl = `${environment.apiUrl}/produtos`;

  alterouProdutos = new EventEmitter();

  constructor(private _http: HttpClient) {}

  getProdutos(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  create(produto: Produtos): Observable<Produtos> {
    return this._http.post<Produtos>(this.apiUrl, produto, httpOptions);
  }

  edit(produto: FormGroup): Observable<Produtos> {
    return this._http.put<Produtos>(
      `${this.apiUrl}/${produto.value.id}`,
      produto.value,
      httpOptions,
    );
  }

  deleteProduto(id: number): Observable<{}> {
    return this._http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}
