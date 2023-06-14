import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarState: boolean = false;
  showBtn: boolean = false;
  showBlockDisplay: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  toggleSidebar() {
    this.sidebarState = !this.sidebarState;
    this.showBtn = !this.showBtn;
    this.showBlockDisplay = !this.showBlockDisplay;

    if (this.sidebarState) {
      this.renderer.addClass(
        this.elementRef.nativeElement.ownerDocument.body,
        'no-scroll'
      );
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement.ownerDocument.body,
        'no-scroll'
      );
    }
  }
}
