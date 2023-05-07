import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-edit-book-modal',
  templateUrl: './create-edit-book-modal.component.html',
  styleUrls: ['./create-edit-book-modal.component.css']
})
export class CreateEditBookModalComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = 'Choose File';
  status = false;
  constructor(private fb: FormBuilder) { }
  public registerForm!: FormGroup

  public isUpdateActive: boolean = false
  ngOnInit() {
    this.registerForm = this.fb.group({

    })
  }
  addToggle() {
    this.status = !this.status;
  }
  submit() {

  }
  update() {

  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }

}
