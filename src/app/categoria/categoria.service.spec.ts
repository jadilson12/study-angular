import { async, TestBed, inject, fakeAsync } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CategoriaService } from './categoria.service';
import { categorias as CATEGORIA_MOCK, categorias } from './mock-categoria';
import { CategoriaModel } from './categoria.model';

describe('#Categoria Services', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let categoriaService: CategoriaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriaService],
    });
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });
  describe('#getCategorias', () => {
    let expectedCategorias: CategoriaModel[];

    beforeEach(() => {
      categoriaService = TestBed.get(CategoriaService);
      expectedCategorias = CATEGORIA_MOCK as CategoriaModel[];
    });

    it('Deve return de categorias espearadas (chamar apenas uma vez)', () => {
      categoriaService
        .getCategorias()
        .subscribe(
          categorias => expect(categorias).toEqual(expectedCategorias, 'Deve retornar categorias'),
          fail,
        );

      const req = httpTestingController.expectOne(categoriaService.apiUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedCategorias);
    });

    it('Deve retornar quando categoras vazio', () => {
      categoriaService
        .getCategorias()
        .subscribe(
          categoria => expect(categoria.length).toEqual(0, 'Deve ter um array vazio'),
          fail,
        );

      const req = httpTestingController.expectOne(categoriaService.apiUrl);
      req.flush([]); // Responda com as categorias
    });

    it('Deve retornar a categoria esperada (chamada várias vezes)', () => {
      categoriaService.getCategorias().subscribe();
      categoriaService.getCategorias().subscribe();
      categoriaService
        .getCategorias()
        .subscribe(
          categoria => expect(categoria).toEqual(expectedCategorias, 'Deve retornar categorias'),
          fail,
        );

      const requests = httpTestingController.match(categoriaService.apiUrl);
      expect(requests.length).toEqual(3, 'Chama getCategorias()');

      requests[0].flush([]);
      requests[1].flush([{ id: 1, nome: 'Carro', descricao: 'Alguma coisa' }]);
      requests[2].flush(expectedCategorias);
    });
  });

  describe('#updateCategoria', () => {
    beforeEach(() => {
      categoriaService = TestBed.get(CategoriaService);
    });

    it('Deve retornar um status 202 quando for atualizado', () => {
      const testData = { id: 1, nome: 'Carro', descricao: 'Alguma coisa' };
      categoriaService.createCategoria(testData).subscribe(response => {
        expect(response.status).toEqual(202, 'status');
      });

      const req = httpTestingController.expectOne(categoriaService.apiUrl);
      //TODO
      //expect(req.request.method).toEqual('PUT');
      req.flush({ status: 202 });
    });
  });
  describe('#createCategoria', () => {
    beforeEach(() => {
      categoriaService = TestBed.get(CategoriaService);
    });

    it('Deve retornar um status 201 quando for criado', () => {
      const testData = { nome: 'Carro', descricao: 'Alguma coisa' };
      categoriaService.createCategoria(testData).subscribe(response => {
        expect(response.status).toEqual(201, 'status');
      });

      const req = httpTestingController.expectOne(categoriaService.apiUrl);
      expect(req.request.method).toEqual('POST');
      req.flush({ status: 201 });
    });
  });
  describe('#deleteCategoria', () => {
    beforeEach(() => {
      categoriaService = TestBed.get(CategoriaService);
    });

    it('Deve retornar um status 204 quando for excluido', () => {
      const testData = { id: 1, nome: 'Carro', descricao: 'Alguma coisa' };
      categoriaService.deleteCategoria(testData.id).subscribe(response => {
        //TODO
        // expect(response).toEqual(204, 'status');
      });

      const req = httpTestingController.expectOne(`${categoriaService.apiUrl}/${testData.id}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush({ status: 204 });
    });
  });
});
