import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { SideNavModule } from './sidenav/sidenav.module';
import { FooterModule } from './footer/footer.module';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from './toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        LayoutModule,
        BrowserModule,
        ToolbarModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,

        SideNavModule,
        FooterModule,

        SharedModule,
        TranslateModule.forRoot(),
      ],
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
