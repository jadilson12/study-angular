import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { ProdutoService } from '../produto.service';
import { DialogService } from './../../shared/dialog.service';
import { CategoriaModel } from 'src/app/categoria/categoria.model';
import { AlertService } from '../../shared/alert.service';
import { ProdutoModel } from '../produto.model';
import { ConfimarDeleteComponent } from 'src/app/shared/confimar-delete/confimar-delete.component';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
})
export class ProdutoListComponent implements OnInit {
  categorias: CategoriaModel[];
  displayedColumns = ['nome', 'descricao', 'categoria', 'acoes'];
  dataSource: [];
  produto: ProdutoModel;
  exportAsConfig: ExportAsConfig = {
    type: 'csv', // the type you want to download
    elementId: 'myTableElementId', // the id of html/table element
  };

  constructor(
    private _exportAsService: ExportAsService,
    private readonly _produtoService: ProdutoService,
    private readonly _dialogService: DialogService,
    private readonly _alertService: AlertService,
    private readonly _title: Title,
  ) {}

  ngOnInit() {
    this._title.setTitle('Lista de produtos');
    this.getProdutos();
    this._produtoService.alterouProdutos.subscribe((res: any) => {});
    this._dialogService.getDelete().subscribe(ok => (ok ? this.delete(this.produto) : ''));
  }

  getProdutos() {
    this._produtoService.getProdutos().subscribe(data => {
      this.dataSource = data;
    });
  }
  openDialogDelete(produto: ProdutoModel) {
    this.produto = produto;
    this._dialogService.openDialog(ConfimarDeleteComponent, { produto, tipo: 'Produto' });
  }
  delete(produto: any) {
    this._produtoService.deleteProduto(produto.id).subscribe(
      resp => {
        this.getProdutos();
        this._alertService.sucess();
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

  printPage(item: any) {
    this._produtoService.print.emit(item);
  }

  export() {
    // download the file using old school javascript method
    this._exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this._exportAsService.get(this.exportAsConfig).subscribe(content => {
    //   console.log(content);
    // });
  }
}
