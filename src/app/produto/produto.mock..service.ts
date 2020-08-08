import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { produtos } from './produto.mock';
@Injectable({
  providedIn: 'root',
})
export class ProdutoImockService implements InMemoryDbService {
  createDb() {
    return { produtos };
  }
}
