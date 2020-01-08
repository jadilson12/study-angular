import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarModule } from './toolbar/toolbar.module';
import { SideNavModule } from './sidenav/sidenav.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { ProdutoModule } from './produto/produto.module';
import { NotFaundModule } from './not-faund/not-faund.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,

    ToolbarModule,
    SideNavModule,
    FooterModule,
    HomeModule,
    ProdutoModule,
    NotFaundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
