import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  drawer: boolean = false;

  mudaDrawer = new EventEmitter();

  setDrawer() {
    this.drawer = !this.drawer;
    this.mudaDrawer.emit(this.drawer);
  }

  public closeDrawer() {
    this.drawer = !this.drawer;
  }
}
