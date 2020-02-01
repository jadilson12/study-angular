import { MatTableModule } from '@angular/material/table';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRearchComponent } from './categoria-rearch.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CategoriaRearchComponent', () => {
  let component: CategoriaRearchComponent;
  let fixture: ComponentFixture<CategoriaRearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaRearchComponent],
      imports: [MatTableModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaRearchComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
