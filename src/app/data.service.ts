import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { categorias } from './categoria/mock-categoria';
import { produtos } from './produto/mock-produto';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    return { categorias, produtos };
  }
}
