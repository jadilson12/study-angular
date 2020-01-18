import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categoria.service';
import { CategoriaFormComponent } from '../categoria-form/categoria-form.component';
import { DialogService } from '../../shared/dialog.service';
import { AlertService } from '../../shared/alert.service';
import { Title } from '@angular/platform-browser';
import { CategoriaModel } from '../categoria.model';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
})
export class CategoriaListComponent implements OnInit {
  displayedColumns = ['nome', 'descricao', 'acoes'];
  dataSource: CategoriaModel[];

  constructor(
    private _categoriaService: CategoriaService,
    private _dialogService: DialogService,
    private _alertService: AlertService,
    private _title: Title,
  ) {}

  ngOnInit() {
    this._title.setTitle('Lista de Categorias');
    this.getCategorias();
    this._categoriaService.alterouCategorias.subscribe((_: CategoriaModel) => {
      this.getCategorias();
    });
  }

  getCategorias() {
    this._categoriaService.getCategorias().subscribe(data => {
      this.dataSource = data;
    });
  }
  delete(categoria: CategoriaModel) {
    this._categoriaService.deleteCategoria(categoria.id).subscribe(() => {
      this.getCategorias(), this._alertService.sucess();
    });
  }

  openDialog(categoria: CategoriaModel = null): void {
    this._dialogService.openDialog(CategoriaFormComponent, categoria);
  }

  onNoClick() {
    this._dialogService.closeDialog();
  }
}
