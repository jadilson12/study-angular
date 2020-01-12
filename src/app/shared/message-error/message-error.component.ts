import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss'],
})
export class MessageErrorComponent {
  @Input() field: Observable<FormGroup>;
  @Input() name: string = '';
  constructor() {}
}
