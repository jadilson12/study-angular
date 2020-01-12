import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss'],
})
export class MessageErrorComponent {
  @Input() field: FormGroup;
  @Input() name: string;
  constructor() {}
}
