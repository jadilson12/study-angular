import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    SidenavComponent
  ]
})
export default class SideNav { }
