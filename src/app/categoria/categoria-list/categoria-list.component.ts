import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categoria.service';
import { CategoriaFormComponent } from '../categoria-form/categoria-form.component';
import { DialogService } from '../../shared/dialog.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
})
export class CategoriaListComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'descricao', 'acoes'];
  dataSource: [];

  constructor(
    private categoriaService: CategoriaService,
    private dialogService: DialogService,
    private _alertService: AlertService,
  ) {}

  ngOnInit() {
    this.getCategorias();
    this.categoriaService.alterouCategorias.subscribe((_: any) => {
      this.getCategorias();
    });
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.dataSource = data;
    });
  }
  delete(categoria: any) {
    this.categoriaService.deleteCategoria(categoria.id).subscribe(() => {
      this.getCategorias(), this._alertService.sucess();
    });
  }

  openDialog(categoria: any = null): void {
    this.dialogService.openDialog(CategoriaFormComponent, categoria);
  }
  onNoClick() {
    this.dialogService.closeDialog();
  }
}
