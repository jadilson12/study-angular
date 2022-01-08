import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProdutoService } from './produto.service';
import { ProdutoModel } from './produto.model';

import { produtos as MOCK_PRODUTO } from './produto.mock';

describe('#Produto Service', () => {
  let httpTestingController: HttpTestingController;
  let mockProdutos: ProdutoModel[];
  let mockProduto: ProdutoModel;
  let mockId: number;
  let service: ProdutoService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoService],
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    mockProdutos = MOCK_PRODUTO as ProdutoModel[];
    mockProduto = mockProdutos[0];
    mockId = mockProduto.id;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  beforeEach(inject([ProdutoService], s => {
    service = s;
  }));

  const apiUrl = (id: number) => {
    return `${service.apiUrl}/${mockId}`;
  };

  it('Deve ser criado services', () => {
    expect(service).toBeTruthy();
  });

  describe('#get Produtos', () => {
    it('Deve return mock produtos', () => {
      service
        .getProdutos()
        .subscribe(produtos => expect(produtos.length).toEqual(mockProdutos.length), fail);
      // Receive GET request
      const req = httpTestingController.expectOne(service.apiUrl);
      expect(req.request.method).toEqual('GET');
      // Respond with the mock produtoes
      req.flush(mockProdutos);
    });
  });

  describe('#update Produtos', () => {
    it('Deve update produto', () => {
      service.edit(mockProduto).subscribe(response => expect(response).toEqual(mockProduto), fail);
      // Receive PUT request
      const req = httpTestingController.expectOne(`${service.apiUrl}/${mockId}`);
      expect(req.request.method).toEqual('PUT');
      // Respond with the updated produto
      req.flush(mockProduto);
    });
  });

  describe('#delete Produto', () => {
    it('Deve delete produto using id', () => {
      service.deleteProduto(mockId).subscribe(response => expect(response).toEqual(mockId), fail);
      // Receive DELETE request
      const req = httpTestingController.expectOne(`${service.apiUrl}/${mockId}`);
      expect(req.request.method).toEqual('DELETE');
      // Respond with the updated produto
      req.flush(mockId);
    });
  });
});
