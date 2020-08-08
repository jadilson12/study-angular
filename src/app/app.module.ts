import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ToolbarModule } from './toolbar/toolbar.module';
import { SideNavModule } from './sidenav/sidenav.module';
import { FooterModule } from './footer/footer.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPermissionsModule } from 'ngx-permissions';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    LayoutModule,
    BrowserModule,
    ToolbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxPermissionsModule.forRoot(),

    SideNavModule,
    FooterModule,
    SharedModule,
  ],
  exports: [SharedModule, ToolbarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
