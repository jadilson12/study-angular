import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPrintComponent } from './produto-print.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ProdutoPrintComponent', () => {
  let component: ProdutoPrintComponent;
  let fixture: ComponentFixture<ProdutoPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoPrintComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
