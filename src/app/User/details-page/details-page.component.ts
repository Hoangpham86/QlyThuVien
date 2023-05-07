import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  //xử lý tăng giảm số lượng sách
  quantity: number = 1;
  increaseQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  //darkmode
  darkMode = false;
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
