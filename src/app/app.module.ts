import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DataService } from './data.service';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SideNavModule } from './sidenav/sidenav.module';
import { FooterModule } from './footer/footer.module';
import { ProdutoModule } from './produto/produto.module';
import { NotFaundModule } from './not-faund/not-faund.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
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
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      dataEncapsulation: false,
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
  exports: [SharedModule, ToolbarModule],
  declarations: [AppComponent],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
