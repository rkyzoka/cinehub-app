import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sideBarOpened: boolean = true;
  showBtn: boolean = false;

  toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
    this.showBtn = !this.showBtn;
  }
}
