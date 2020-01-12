import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarModule } from './toolbar/toolbar.module';
import { SideNavModule } from './sidenav/sidenav.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { ProdutoModule } from './produto/produto.module';
import { NotFaundModule } from './not-faund/not-faund.module';
import { DataService } from './data.service';

import { SharedModule } from './shared/shared.module';
@NgModule({
  imports: [
    LayoutModule,
    BrowserModule,
    ToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false, // return entity after PUT/update
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
