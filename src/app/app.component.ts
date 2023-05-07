import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-management';
  isAdmin = false;

  checkPath(url: string) {
    switch(true) {
      case url === '/admin' || url.startsWith('/admin'):
        this.isAdmin = true;
        break;
    }
  }
}
