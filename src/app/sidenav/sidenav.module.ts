import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { CategoriaModule } from '../categoria/categoria.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    AppRoutingModule,

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,

    CategoriaModule,
  ],
  providers: [SidenavService],
  bootstrap: [],
  exports: [SidenavComponent],
})
export class SideNavModule {}
