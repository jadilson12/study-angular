import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

import { SideNavModule } from './sidenav/sidenav.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { ProdutoModule } from './produto/produto.module';
import { NotFaundModule } from './not-faund/not-faund.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from './toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { Router } from '@angular/router';
import { browser } from 'protractor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        LayoutModule,
        BrowserModule,
        ToolbarModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,

        HttpClientInMemoryWebApiModule.forRoot(DataService, {
          dataEncapsulation: true,
          passThruUnknownUrl: true,
          put204: true, // return entity after PUT/update
        }),
        SideNavModule,
        FooterModule,
        HomeModule,
        ProdutoModule,
        NotFaundModule,
        SharedModule,
      ],

      providers: [DataService],
    }).compileComponents();
  }));

  it('Deve ser criado o app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deve ser criado um titulo  com nome 'Loja'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Loja');
  });
});
