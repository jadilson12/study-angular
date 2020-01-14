import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { httpOptions } from '../config/httpOptions';
import { Categoria } from './categoria.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  apiUrl = `${environment.apiUrl}/categorias`;

  alterouCategorias = new EventEmitter();

  constructor(private _http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this._http.post<Categoria>(this.apiUrl, categoria, httpOptions);
  }

  edit(categoria: FormGroup): Observable<Categoria> {
    return this._http.put<Categoria>(
      `${this.apiUrl}/${categoria.value.id}`,
      categoria.value,
      httpOptions,
    );
  }

  deleteCategoria(id: number): Observable<{}> {
    return this._http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}
