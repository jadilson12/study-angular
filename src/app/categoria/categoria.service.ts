import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { httpOptions } from '../config/httpOptions';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  categoriaUrl = 'api/categorias';

  alterouCategorias = new EventEmitter();

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(this.categoriaUrl);
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.categoriaUrl, categoria, httpOptions);
  }

  edit(categoria: FormGroup): Observable<Categoria> {
    return this.http.put<Categoria>(
      `${this.categoriaUrl}/${categoria.value.id}`,
      categoria.value,
      httpOptions,
    );
  }

  deleteCategoria(id: number): Observable<{}> {
    return this.http.delete(`${this.categoriaUrl}/${id}`, httpOptions);
  }
}
