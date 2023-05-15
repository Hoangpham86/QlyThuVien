import { Component, OnInit  } from '@angular/core';
import { MatDialogRef } from  '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent  implements OnInit {


  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<BookDialogComponent>) {}

  ngOnInit(): void {
  }
   
  save(): void {
    //save book
    this.dialogRef.close();
  }
   cancel(): void {
    this.dialogRef.close();
   }
   openDialog(): void{
     const dialogRef = this.dialog.open(BookDialogComponent, {
       width:'400px'

     }); 
     dialogRef.afterClosed().subscribe( () => {console.log('The dialog was closed'); });
   }
}
