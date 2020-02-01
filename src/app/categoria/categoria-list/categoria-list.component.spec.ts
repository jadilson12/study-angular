import { async, TestBed, ComponentFixture } from '@angular/core/testing';

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
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { categorias as CATEGORIA_MOCK } from '../categoria.mock';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';

function setup() {
  const fixture = TestBed.createComponent(CategoriaListComponent);
  const httpTestingController = TestBed.get(HttpTestingController);
  const component = fixture.debugElement.componentInstance;
  const categoriaService = TestBed.get(CategoriaService);
  const diaLogService = TestBed.get(DialogService);
  const alertaService = TestBed.get(AlertService);
  const httpClient = TestBed.get(HttpClient);
  const title = TestBed.get(Title);

  return {
    httpClient,
    fixture,
    component,
    categoriaService,
    httpTestingController,
    diaLogService,
    alertaService,
    title,
  };
}

const categoriasServiceStub = {
  get() {
    const categorias = CATEGORIA_MOCK;
    return of(categorias);
  },
};
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
      providers: [
        CategoriaService,
        DialogService,
        AlertService,
        Title,
        // { provide: CategoriaService, useValue: categoriasServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const { fixture } = setup();
    fixture.detectChanges();

    categoriaService = TestBed.get(CategoriaService);
  });

  it('Deve ser lista categoria', () => {
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
});
