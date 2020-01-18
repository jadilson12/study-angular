import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { SidenavService } from './sidenav.service';
import { HomeComponent } from '../home/home.component';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoFormComponent } from '../produto/produto-form/produto-form.component';
import { NotFaundComponent } from '../not-faund/not-faund.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CategoriaFormComponent } from '../categoria/categoria-form/categoria-form.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

function setup() {
  const fixture = TestBed.createComponent(SidenavComponent);
  const component = fixture.componentInstance;

  return { fixture, component };
}

describe('#Sidenav component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavComponent,
        HomeComponent,
        ProdutoComponent,
        ProdutoFormComponent,
        CategoriaComponent,
        CategoriaFormComponent,
        NotFaundComponent,
      ],
      imports: [
        AppRoutingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [SidenavService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    const { fixture } = setup();
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
