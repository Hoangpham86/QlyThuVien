import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    if (yOffset > 100) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  
}
