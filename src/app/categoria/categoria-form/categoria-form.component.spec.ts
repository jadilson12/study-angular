import { CategoriaFormComponent } from './categoria-form.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { categorias as CATEGORIA_MOCK } from '../mock-categoria';
import { CategoriaService } from '../categoria.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { AlertService } from 'src/app/shared/alert.service';
import { By } from '@angular/platform-browser';

// function setup() {
//   const fixture = TestBed.createComponent(CategoriaFormComponent);
//   const component = fixture.componentInstance;
//   const httpTestingController = TestBed.get(HttpTestingController);
//   const categoriaService = TestBed.get(CategoriaService);
//   const diaLogService = TestBed.get(DialogService);
//   const alertaService = TestBed.get(AlertService);

//   return {
//     fixture,
//     component,
//     categoriaService,
//     httpTestingController,
//     diaLogService,
//     alertaService,
//   };
// }

describe('#Categoria form', () => {
  let component: CategoriaFormComponent;
  let fixture: ComponentFixture<CategoriaFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaFormComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule, HttpClientTestingModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: CATEGORIA_MOCK } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CategoriaFormComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('Formulario deve está invalido', async(() => {
    component.form.controls.nome.setValue('');
    component.form.controls.descricao.setValue('');
    expect(component.form.valid).toBeFalsy();
  }));

  it('Formulario deve está valido', async(() => {
    component.form.controls.nome.setValue('Nome teste');
    component.form.controls.descricao.setValue('Descricao');
    expect(component.form.valid).toBeTruthy();
  }));

  it('Campo [nome] deve ser required no minimo no 3 letras', () => {
    const nome = component.form.controls.nome;
    expect(nome.valid).toBeFalsy();

    nome.setValue('');
    expect(nome.hasError('required')).toBeTruthy();
    nome.setValue('12');
    expect(nome.hasError('minlength')).toBeTruthy();
  });

  it('Campo [descricao] deve ser required no maximo no 10 letras', () => {
    const descricao = component.form.controls.descricao;
    expect(descricao.valid).toBeFalsy();

    descricao.setValue('');
    expect(descricao.hasError('required')).toBeTruthy();
    descricao.setValue('01234567891011');
    expect(descricao.hasError('maxlength')).toBeTruthy();
  });

  it('Deve usar categorias services', () => {
    const categoriaService = fixture.debugElement.injector.get(CategoriaService);
    fixture.detectChanges();
    expect(categoriaService.categorias).toEqual([]);
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
