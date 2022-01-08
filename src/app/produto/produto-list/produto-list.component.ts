import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxPermissionsService } from 'ngx-permissions';
import { ICategoria } from 'src/app/categoria/categoria.interface';
import { DialogService } from 'src/app/shared/dialog.service';
import { AlertService } from '../../shared/alert.service';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { ProdutoModel } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { JsontocsvService } from './../../shared/jsontocsv.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
})
export class ProdutoListComponent implements OnInit {
  categorias: ICategoria[];
  displayedColumns = ['nome', 'descricao', 'categoria', 'acoes'];
  dataSource: [];
  produto: ProdutoModel;

  constructor(
    private readonly _produtoService: ProdutoService,
    private readonly _dialogService: DialogService,
    private readonly _alertService: AlertService,
    private readonly _title: Title,
    private readonly _jsonToCSV: JsontocsvService,
    private readonly _permissionsService: NgxPermissionsService,
  ) {}

  ngOnInit() {
    const perm = ['ADMIN', 'GUEST'];
    this._permissionsService.loadPermissions(perm);
    this._title.setTitle('Lista de produtos');
    this.getProdutos();
    this._produtoService.alterouProdutos.subscribe((item) => this.getProdutos());
    // this._dialogService.getDelete().subscribe((ok) => (ok ? this.delete(this.produto) : ''));
  }

  getProdutos() {
    this._produtoService.getProdutos().subscribe((data) => {
      this._permissionsService.loadPermissions(data);
      this.dataSource = data;
    });
  }
  openDialogDelete(produto: ProdutoModel) {
    this.produto = produto;
    // this._dialogService.openDialog(ConfimarDeleteComponent, { produto, tipo: 'Produto' });
  }
  delete(produto: any) {
    this._produtoService.deleteProduto(produto.id).subscribe(
      (resp) => {
        this.getProdutos();
        this._alertService.sucess();
      },
      (_) => {
        this._alertService.error();
      },
    );
  }

  openDialog(produto: any = null): void {
    this._dialogService.openDialog(ProdutoFormComponent, produto);
  }
  onNoClick() {
    // this._dialogService.closeDialog();
  }

  printPage(item: any) {
    this._produtoService.print.emit(item);
  }

  download() {
    const header = ['id', 'nome', 'descricao', 'categoria'];
    const fileName = 'lista-categorias-loja';
    this._jsonToCSV.downloadFile(this.dataSource, header, fileName);
  }
}
