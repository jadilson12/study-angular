import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  drawer: boolean;
  constructor(private sidenavService: SidenavService, private router: Router) {}

  ngOnInit() {
    this.sidenavService.mudaDrawer.subscribe((e: any) => (this.drawer = e));
  }

  onSelected(item: any) {
    this.router.navigate([item.route]);
    this.sidenavService.closeDrawer();
  }
}
