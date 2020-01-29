import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPrintComponent } from './produto-print.component';

describe('ProdutoPrintComponent', () => {
  let component: ProdutoPrintComponent;
  let fixture: ComponentFixture<ProdutoPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoPrintComponent ]
    })
    .compileComponents();
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
