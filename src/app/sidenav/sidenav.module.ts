import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [SidenavService],
  bootstrap: [],
  exports: [
    SidenavComponent
  ]
})
export default class SideNav {}
