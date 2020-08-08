import { async, TestBed, inject, fakeAsync } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoriaService } from './categoria.service';
import { categorias as CATEGORIA_MOCK, categorias } from './categoria.mock';
import { ICategoria } from './categoria.interface';

describe('#Categoria Services', () => {
  let httpTestingController: HttpTestingController;
  let mockCategorias: ICategoria[];
  let mockCategoria: ICategoria;
  let mockId: number;
  let service: CategoriaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriaService],
    });
    httpTestingController = TestBed.get(HttpTestingController);
  }));
  beforeEach(() => {
    mockCategorias = CATEGORIA_MOCK as ICategoria[];
    mockCategoria = mockCategorias[0];
    mockId = mockCategoria.id;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  beforeEach(inject([CategoriaService], (s) => {
    service = s;
  }));

  const apiUrl = (id: number) => {
    return `${service.apiUrl}/${mockId}`;
  };

  describe('#list', () => {
    xit('Deve return de categorias espearadas (chamar apenas uma vez)', () => {
      service
        .list()
        .subscribe(
          (categoria) => expect(categoria).toEqual(mockCategorias, 'Deve retornar categorias'),
          fail,
        );
      const req = httpTestingController.expectOne(service.apiUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockCategorias);
    });

    it('Deve retornar quando categoras vazio', () => {
      service
        .list()
        .subscribe(
          (categoria) => expect(categoria.length).toEqual(0, 'Deve ter um array vazio'),
          fail,
        );

      const req = httpTestingController.expectOne(service.apiUrl);
      req.flush([]); // Responda com as categorias
    });

    xit('Deve retornar a categoria esperada (chamada várias vezes)', () => {
      service.list().subscribe();
      service.list().subscribe();
      service
        .list()
        .subscribe(
          (categoria) => expect(categoria).toEqual(mockCategorias, 'Deve retornar categorias'),
          fail,
        );

      const requests = httpTestingController.match(service.apiUrl);
      expect(requests.length).toEqual(3, 'Chama list()');

      requests[0].flush([]);
      requests[1].flush([{ id: 1, nome: 'Carro', descricao: 'Alguma coisa' }]);
      requests[2].flush(mockCategorias);
    });
  });

  describe('#updateCategoria', () => {
    it('Deve retornar um status 202 quando for atualizado', () => {
      service.create(mockCategoria).subscribe((response) => {
        expect(response.status).toEqual(202, 'status');
      });

      const req = httpTestingController.expectOne(service.apiUrl);
      //TODO
      //expect(req.request.method).toEqual('PUT');
      req.flush({ status: 202 });
    });
  });
  describe('#createCategoria', () => {
    it('Deve retornar um status 201 quando for criado', () => {
      service.create(mockCategoria).subscribe((response) => {
        expect(response.status).toEqual(201, 'status');
      });

      const req = httpTestingController.expectOne(service.apiUrl);
      expect(req.request.method).toEqual('POST');
      req.flush({ status: 201 });
    });
  });
  describe('#delete Categoria', () => {
    it('Deve delete produto usando id', () => {
      service.delete(mockId).subscribe((response) => expect(response).toEqual(mockId), fail);
      // Receive DELETE request
      const req = httpTestingController.expectOne(apiUrl(mockId));
      expect(req.request.method).toEqual('DELETE');
      // Respond with the updated produto
      req.flush(mockId);
    });
  });
});
