import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { PRODUTOS } from 'src/app/mock-produtos';
import { Produtos } from '../produto-class.component';
import { Categorias } from 'src/app/categoria/categoria-class.component';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
})
export class ProdutoListComponent implements OnInit {
  public data: Produtos[];
  public _categorias: Categorias[];
  public displayedColumns = ['id', 'nome', 'descricao', 'categoria'];
  public dataSource = new MatTableDataSource<Produtos>(PRODUTOS);

  constructor(private _produtoService: ProdutoService) {}

  public ngOnInit() {
    this.getProdutos();
  }

  public getProdutos() {
    this._produtoService.getProdutos().subscribe(itens => (this.data = itens));
  }
}
