import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { httpOptions } from "../config/httpOptions";
import { CategoriaModel } from "./categoria.model";
import { environment } from "./../../environments/environment";
import { EventEmitter } from "protractor";

@Injectable({
  providedIn: "root"
})
export class CategoriaService {
  apiUrl = `${environment.apiUrl}/categorias`;

  updateCategorias = new Subject();

  constructor(private readonly _http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this._http.get<CategoriaModel[]>(this.apiUrl);
  }

  createCategoria(categoria: any): Observable<any> {
    return this._http.post(this.apiUrl, categoria, httpOptions);
  }

  updateCategoria(categoria: any): Observable<CategoriaModel> {
    return this._http.put<CategoriaModel>(`${this.apiUrl}/${categoria.id}`, categoria, httpOptions);
  }

  deleteCategoria(id: number): Observable<{}> {
    return this._http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}
