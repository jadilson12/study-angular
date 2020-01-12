import { Component } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  constructor(private sidenavService: SidenavService) {}

  setDawer() {
    this.sidenavService.setDrawer();
  }
}
