import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';

interface Data {
  name: string;
}

const testUrl = 'api';

describe('HttpClient testing', () => {
  let httpMock: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('Pode testar  HttpClient.get', () => {
    const testData: Data = { name: 'Test Data' };

    httpMock.get<Data>(testUrl).subscribe(data => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne(testUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  it('Pode testar api com header token', () => {
    const testData: Data = { name: 'Test Data' };

    httpMock
      .get<Data>(testUrl, {
        headers: new HttpHeaders({ Authorization: 'Meu token' }),
      })
      .subscribe(data => expect(data).toEqual(testData));
    const req = httpTestingController.expectOne(req => req.headers.has('Authorization'));
    req.flush(testData);
  });

  it('Pode tesat multiplo requests', () => {
    let testData: Data[] = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];

    httpMock.get<Data[]>(testUrl).subscribe(d => expect(d.length).toEqual(0, 'Deve não ter dados'));

    httpMock
      .get<Data[]>(testUrl)
      .subscribe(d => expect(d).toEqual([testData[0]], 'Deve ter um array de elemetos'));

    httpMock
      .get<Data[]>(testUrl)
      .subscribe(d => expect(d).toEqual(testData, 'Deve esperar uma data'));

    const requests = httpTestingController.match(testUrl);
    expect(requests.length).toEqual(3);

    requests[0].flush([]);
    requests[1].flush([testData[0]]);
    requests[2].flush(testData);
  });

  it('Pode testar um error 404', () => {
    const emsg = 'deliberate 404 error';

    httpMock.get<Data[]>(testUrl).subscribe(
      data => fail('Deveria ter um errro 404 '),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      },
    );

    const req = httpTestingController.expectOne(testUrl);
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });

  it('Pode testar um erro da rede internet', () => {
    const emsg = 'Simulando um errro da rede';

    httpMock.get<Data[]>(testUrl).subscribe(
      data => fail('Deve ter um erro com a falhar da rede'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      },
    );

    const req = httpTestingController.expectOne(testUrl);

    const errorEvent = new ErrorEvent('Que pena, Muito triste', {
      message: emsg,
      filename: 'CategoriaService.ts',
      lineno: 42,
      colno: 21,
    });

    req.error(errorEvent);
  });

  it('Deve falhar se http response não for simulado', () => {
    httpMock.get('algumacoisa/api').subscribe();

    expect(() => httpTestingController.verify()).toThrow();

    const req = httpTestingController.expectOne('algumacoisa/api');
    req.flush(null);
  });
});
