import { ProdutoService } from './../produto.service';
import { ProdutoModel } from './../produto.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrintPageService } from 'src/app/shared/print-page/print-page.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-produto-print',
  templateUrl: './produto-print.component.html',
  styleUrls: ['./produto-print.component.scss'],
})
export class ProdutoPrintComponent implements OnInit {
  item: ProdutoModel;

  constructor(private readonly _produtoService: ProdutoService) {}

  ngOnInit() {
    this._produtoService.print.subscribe((e: any) => {
      this.item = e;
      setTimeout(() => {
        window.print();
      }, 10);
    });
  }
}
