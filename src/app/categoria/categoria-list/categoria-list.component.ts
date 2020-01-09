import { Component, OnInit } from '@angular/core';

import { Categorias } from './../categoria-class.component';
import { CategoriaService } from '../categoria.service';
import { MatTableDataSource } from '@angular/material/table';
import { CATEGORIA } from 'src/app/mock-categorias';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
})
export class CategoriaListComponent implements OnInit {
  public data: Categorias[];
  public displayedColumns = ['id', 'nome', 'descricao', 'acoes'];
  public dataSource = new MatTableDataSource<Categorias>(CATEGORIA);

  constructor(private categoriaService: CategoriaService) {}

  public ngOnInit() {
    this.getCategoria();
  }

  public getCategoria() {
    this.categoriaService
      .getCategorias()
      .subscribe(itens => (this.data = itens));
  }
  public edit(id: number): void {
    this.categoriaService.edit(id);
  }

  public delete(id: number): void {
    this.categoriaService.delete(id);
  }
}
