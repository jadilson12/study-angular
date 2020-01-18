import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Inject, DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProdutoFormComponent } from './produto-form.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../produto.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { CategoriaModel } from 'src/app/categoria/categoria.model';
import { AlertService } from 'src/app/shared/alert.service';
import { MessageErrorComponent } from 'src/app/shared/message-error/message-error.component';
import { FooterFormComponent } from 'src/app/shared/footer-form/footer-form.component';
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
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

export class MatDialogRefMock {
  close(value = '') {}
}

describe('ProdutoFormComponent', () => {
  let component: ProdutoFormComponent;
  let categoriaService: CategoriaService;
  let produtoService: ProdutoService;
  let dialogService: DialogService;
  let alertService: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoFormComponent, MessageErrorComponent, FooterFormComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
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
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: MatDialogRefMock } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ProdutoFormComponent);
    const component = fixture.componentInstance;
    dialogService = TestBed.get(DialogService);
    categoriaService = TestBed.get(CategoriaService);
    alertService = TestBed.get(AlertService);

    fixture.detectChanges();
  });

  it('Deve criar', () => {
    const fixture = TestBed.createComponent(ProdutoFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
