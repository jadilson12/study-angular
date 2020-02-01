import { TestBed } from '@angular/core/testing';

import { AjudaAppService } from './ajuda-app.service';

describe('AjudaAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjudaAppService = TestBed.get(AjudaAppService);
    expect(service).toBeTruthy();
  });
});
