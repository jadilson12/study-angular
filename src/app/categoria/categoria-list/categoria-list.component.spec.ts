import { async, TestBed } from '@angular/core/testing';

import { CategoriaListComponent } from './categoria-list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriaService } from '../categoria.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DialogService } from 'src/app/shared/dialog.service';
import { AlertService } from 'src/app/shared/alert.service';
import { Title } from '@angular/platform-browser';
import { categorias as CATEGORIA_MOCK } from '../mock-categoria';

function setup() {
  const fixture = TestBed.createComponent(CategoriaListComponent);
  const component = fixture.debugElement.componentInstance;
  const categoriaService = TestBed.get(CategoriaService);
  const diaLogService = TestBed.get(DialogService);
  const alertaService = TestBed.get(AlertService);
  const title = TestBed.get(Title);
  const httpTestingController = TestBed.get(HttpTestingController);

  return {
    fixture,
    component,
    categoriaService,
    httpTestingController,
    diaLogService,
    alertaService,
    title,
  };
}

describe('#Categoria List', () => {
  let categoriaService: CategoriaService;
  let diaLogService: DialogService;
  let alertaService: AlertService;
  let title: Title;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaListComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientTestingModule,

        MatGridListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,

        SharedModule,
      ],
      providers: [CategoriaService, DialogService, AlertService, Title],
    }).compileComponents();
  }));

  beforeEach(() => {
    const { fixture, component } = setup();
    component.getCategorias();
    fixture.detectChanges();
  });

  xit('Deve chamar api de categoria', () => {
    const { categoriaService, httpTestingController } = setup();
    categoriaService.getCategorias().subscribe(data => {
      expect(data.mapData).toEqual(CATEGORIA_MOCK);
    });

    const req = httpTestingController.expectOne(categoriaService.apiUrl);

    expect(req.request.method).toBe('GET');

    req.flush({
      mapData: CATEGORIA_MOCK,
    });
  });

  it('Deve ser criado', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('Deve ter um button adicionar categoria', () => {
    const { fixture } = setup();
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    const btnAdd = el.querySelector('button');
    expect(btnAdd.textContent).toBe(' Nova categoria ');
  });

  it('Deve ter paginetes', () => {
    //
  });
});
