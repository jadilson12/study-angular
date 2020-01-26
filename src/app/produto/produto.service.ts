import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProdutoModel } from './produto.model';
import { httpOptions } from '../config/httpOptions';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  apiUrl = `${environment.apiUrl}/produtos`;

  alterouProdutos = new EventEmitter();

  constructor(private _http: HttpClient) {}

  getProdutos(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  create(produto: ProdutoModel): Observable<ProdutoModel> {
    return this._http.post<ProdutoModel>(this.apiUrl, produto, httpOptions);
  }

  edit(produto: ProdutoModel): Observable<ProdutoModel> {
    return this._http.put<ProdutoModel>(`${this.apiUrl}/${produto.id}`, produto, httpOptions);
  }

  deleteProduto(id: number): Observable<{}> {
    return this._http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}
