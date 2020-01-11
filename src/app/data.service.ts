import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    const categorias = [
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

    const produtos = [
      {
        id: 1,
        nome: 'Produto a',
        descricao: 'Des a',
        categoria: 'Informática',
      },
      {
        id: 2,
        nome: 'Produto b',
        descricao: 'Des a',
        categoria: 'Alimentos',
      },
      {
        id: 3,
        nome: 'Produto C',
        descricao: 'Des a',
        categoria: 'Informática',
      },
      {
        id: 8,
        nome: 'Produto d',
        descricao: 'Des a',
        categoria: 'Outros',
      },
    ];

    return { categorias, produtos };
  }
}
