import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent {
  public dataSource!: MatTableDataSource<User>
  public users!: User[]

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

   //Sidebar toggle show hide function
   status = false;

   addToggle()
  {
    this.status = !this.status;
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'action'
  ]
  constructor(
    private AdminService: UserDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUsers();
    console.log(this.getUsers());

  }

  getUsers() {
    this.AdminService.getUsers()
      .subscribe(res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.users);

      })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
