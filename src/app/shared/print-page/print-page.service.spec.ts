import { TestBed } from '@angular/core/testing';

import { PrintPageService } from './print-page.service';

describe('PrintPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrintPageService = TestBed.get(PrintPageService);
    expect(service).toBeTruthy();
  });
});
