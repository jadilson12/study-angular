import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ProdutoService } from '../produto.service';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { DialogService } from './../../shared/dialog.service';
import { CategoriaModel } from 'src/app/categoria/categoria.model';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
})
export class ProdutoListComponent implements OnInit {
  categorias: CategoriaModel[];
  displayedColumns = ['nome', 'descricao', 'categoria', 'acoes'];
  dataSource: [];

  constructor(
    private _produtoService: ProdutoService,
    private _dialogService: DialogService,
    private _alertService: AlertService,
    private _title: Title,
  ) {}

  ngOnInit() {
    this._title.setTitle('Lista de produtos');
    this.getProdutos();
    this._produtoService.alterouProdutos.subscribe((_: any) => {
      this.getProdutos();
    });
  }

  getProdutos() {
    this._produtoService.getProdutos().subscribe(data => {
      this.dataSource = data;
    });
  }
  delete(produto: any) {
    this._produtoService.deleteProduto(produto.id).subscribe(
      _ => {
        this.getProdutos(), this._alertService.sucess();
      },
      _ => {
        this._alertService.error();
      },
    );
  }

  openDialog(produto: any = null): void {
    this._dialogService.openDialog(ProdutoFormComponent, produto);
  }
  onNoClick() {
    this._dialogService.closeDialog();
  }
}
