import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  default = true;
  drawer: boolean = this.default;

  mudaDrawer = new EventEmitter();

  setDrawer() {
    this.drawer = !this.drawer;
    this.mudaDrawer.emit(this.drawer);
  }

  public closeDrawer() {
    this.drawer = !this.drawer;
  }
}
