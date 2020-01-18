import { Component, OnInit, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-button-table-list',
  templateUrl: './button-table-list.component.html',
  styleUrls: ['./button-table-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonTableListComponent implements OnInit {
  item: any;
  @Input() nameForm: FormGroup;
  @Output() openEditBnt: EventEmitter<any> = new EventEmitter();
  @Output() deleteBtn: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  openDialogEdit(iten: any) {
    this.openEditBnt.emit(iten);
  }

  delete(iten: any) {
    this.deleteBtn.emit(iten);
  }
}
