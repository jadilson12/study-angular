import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

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
