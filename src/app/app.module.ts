import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { SharedModule } from './shared/shared.module';
import { SideNavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';

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

    FooterModule,
    SharedModule,
    SideNavModule,
  ],
  exports: [ToolbarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
