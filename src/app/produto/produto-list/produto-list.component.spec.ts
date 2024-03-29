import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProdutoListComponent } from './produto-list.component';
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
import { ProdutoService } from '../produto.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxPermissionsService, NgxPermissionsModule } from 'ngx-permissions';

describe('ProdutoListComponent', () => {
  let component: ProdutoListComponent;
  let fixture: ComponentFixture<ProdutoListComponent>;
  let produtoService: ProdutoService;
  let ngxPermissionsService: NgxPermissionsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoListComponent],
      imports: [
        HttpClientTestingModule,

        NgxPermissionsModule.forRoot(),
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
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
      ],
      providers: [ProdutoService, NgxPermissionsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoListComponent);
    produtoService = TestBed.get(ProdutoService);
    ngxPermissionsService = TestBed.get(NgxPermissionsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
