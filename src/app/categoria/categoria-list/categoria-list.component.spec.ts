import { element } from 'protractor';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

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
import { categorias as CATEGORIA_MOCK } from '../categoria.mock';
import { of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

const categoriasServiceStub = {
  get() {
    const categorias = CATEGORIA_MOCK;
    return of(categorias);
  },
};
describe('#Categoria List', () => {
  let component: CategoriaListComponent;
  let fixture: ComponentFixture<CategoriaListComponent>;
  let element: HTMLElement;
  let categorisService: CategoriaService;
  let titleCategoria: HTMLElement;
  let btnNovaCategoria: HTMLElement;

  beforeEach(waitForAsync(() => {
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
        TranslateModule.forRoot(),
        SharedModule,
      ],
      providers: [CategoriaService, DialogService, AlertService, Title],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaListComponent);
    categorisService = TestBed.get(CategoriaService);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    titleCategoria = element.querySelector('#title-category');
    btnNovaCategoria = element.querySelector('#nova-categoria');
    fixture.detectChanges();
  });

  it('Deve deve component listar categorias', () => {
    expect(component).toBeTruthy();
  });

  it('Deve ter uma lista de id validos para menu help ', () => {
    expect(titleCategoria).toBeTruthy();
    expect(btnNovaCategoria).toBeTruthy();

    expect(titleCategoria).not.toBeFalsy();
    expect(btnNovaCategoria).not.toBeFalsy();
  });

  // it('Deve ter um button adicionar categoria', () => {
  //   const { fixture } = setup();
  //   fixture.detectChanges();
  //   const el = fixture.debugElement.nativeElement;
  //   const btnAdd = el.querySelector('button');
  //   expect(btnAdd.textContent).toBe(' Nova categoria ');
  // });
});
