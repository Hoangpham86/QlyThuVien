import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-load-list-book',
  templateUrl: './load-list-book.component.html',
  styleUrls: ['./load-list-book.component.css']
})
export class LoadListBookComponent {
  selectedFile!: File;

  //Sidebar toggle show hide function
  status = false;

  addToggle()
 {
   this.status = !this.status;
 }

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.uploadFile();
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post('http://example.com/upload', formData)
      .subscribe(res => {
        console.log(res);
        // Update image in your table
      });
  }
}
