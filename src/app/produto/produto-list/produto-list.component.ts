import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { DialogService } from './../../shared/dialog.service';
import { Categoria } from 'src/app/categoria/categoria';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
})
export class ProdutoListComponent implements OnInit {
  public _categorias: Categoria[];
  public displayedColumns = ['id', 'nome', 'descricao', 'categoria', 'acoes'];
  dataSource: [];

  constructor(
    private produtoService: ProdutoService,
    private dialogService: DialogService,
    private _alertService: AlertService,
  ) {}

  ngOnInit() {
    this.getProdutos();
    this.produtoService.alterouProdutos.subscribe((_: any) => {
      this.getProdutos();
    });
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(data => {
      this.dataSource = data;
    });
  }
  delete(id: number) {
    this.produtoService.deleteProduto(id).subscribe(
      _ => {
        this.getProdutos();
        this._alertService.sucess();
      },
      _ => {
        this._alertService.error();
      },
    );
  }

  openDialog(produto: any = null): void {
    this.dialogService.openDialog(ProdutoFormComponent, produto);
  }
  onNoClick() {
    this.dialogService.closeDialog();
  }
}
