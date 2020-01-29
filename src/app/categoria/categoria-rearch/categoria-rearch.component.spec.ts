import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRearchComponent } from './categoria-rearch.component';

describe('CategoriaRearchComponent', () => {
  let component: CategoriaRearchComponent;
  let fixture: ComponentFixture<CategoriaRearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaRearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaRearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
