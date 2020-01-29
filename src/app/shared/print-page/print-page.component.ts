import { PrintPageService } from './print-page.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.scss'],
})
export class PrintPageComponent implements OnInit {
  @Input() item: object;

  constructor(private readonly _printPage: PrintPageService) {}

  ngOnInit() {}

  printPage() {
    this._printPage.item.emit(this.item);
  }
}
