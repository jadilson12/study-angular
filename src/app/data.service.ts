import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { categorias } from './categoria/categoria.mock';
import { produtos } from './produto/produto.mock';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    return { categorias, produtos };
  }
}
