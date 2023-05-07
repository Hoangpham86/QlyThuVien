import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-edit-user-modal',
  templateUrl: './create-edit-user-modal.component.html',
  styleUrls: ['./create-edit-user-modal.component.css']
})
export class CreateEditUserModalComponent {
  public isUpdateActive: boolean = false
  status = false;
  addToggle() {
    this.status = !this.status;
  }
  submit() {

  }

  update() {

  }
}
