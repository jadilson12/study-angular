import { Subject, Observable, Subscription } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintPageService {
  item = new EventEmitter<object>();
}
