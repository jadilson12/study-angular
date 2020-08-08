import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export const categorias = [
  {
    id: 1,
    nome: 'Informática',
    descricao: 'Produtos de uso Geral',
  },
  {
    id: 2,
    nome: 'Alimentos',
    descricao: 'bla bla 1',
  },
  {
    id: 3,
    nome: 'Outros',
    descricao: 'bla bla 2',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CategoriaMockService implements InMemoryDbService {
  createDb() {
    return { categorias };
  }
}
