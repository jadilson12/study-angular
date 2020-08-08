import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { httpOptions } from '../config/httpOptions';
import { ICategoria } from './categoria.interface';
import { environment } from './../../environments/environment';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  apiUrl = `${environment.apiUrl}/categorias`;
  public loaded: boolean;
  private categorias$: BehaviorSubject<ICategoria[]> = new BehaviorSubject<ICategoria[]>([]);
  updateCategorias = new Subject();

  constructor(private readonly _http: HttpClient) {}

  getValues(): ICategoria[] {
    return this.categorias$.getValue();
  }

  setValues(categorias: ICategoria[]): void {
    this.categorias$.next(categorias);
  }

  list(): Observable<ICategoria[]> {
    this._http.get<ICategoria[]>(this.apiUrl).subscribe(this.categorias$);

    return this.categorias$.asObservable();
  }

  create(categoria: any): Observable<any> {
    return this._http.post(this.apiUrl, categoria, httpOptions);
  }

  update(categoria: any): Observable<ICategoria> {
    return this._http.put<ICategoria>(`${this.apiUrl}/${categoria.id}`, categoria, httpOptions);
  }

  delete(id: number): Observable<{}> {
    return this._http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}
