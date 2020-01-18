import { CategoriaFormComponent } from './categoria-form.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { categorias as CATEGORIA_MOCK } from '../mock-categoria';

describe('#Categoria form', () => {
  let component = CategoriaFormComponent;
  let fixture: ComponentFixture<CategoriaFormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaFormComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule, HttpClientTestingModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: CATEGORIA_MOCK } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(CategoriaFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
