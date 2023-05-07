import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ErrorPageComponent } from './User/error-page/error-page.component';
import { BooksByThemeComponent } from './User/books-by-theme/books-by-theme.component';
import { BorrowPagesComponent } from './User/borrow-pages/borrow-pages.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { CreateEditBookModalComponent } from './Admin/create-edit-book-modal/create-edit-book-modal.component';
import { CreateEditUserModalComponent } from './Admin/create-edit-user-modal/create-edit-user-modal.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DetailsPageComponent } from './User/details-page/details-page.component';
import { SearchResultComponent } from './User/search-result/search-result.component';
import { LoadListBookComponent } from './Admin/load-list-book/load-list-book.component';
import { LoginPageComponent } from './User/login-page/login-page.component';
import { RegisterPageComponent } from './User/register-page/register-page.component';
import { DashboardPageComponent } from './Admin/dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './User/profile-page/profile-page.component';
import { UserListPageComponent } from './Admin/user-list-page/user-list-page.component';

const routes: Routes = [

  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', component: DetailsPageComponent },
  { path: 'search', component: SearchResultComponent },
  // { path: 'list-book-admin', component: LoadListBookComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  // { path: 'listuser', component: UserListPageComponent },
  { path: 'admin', component: DashboardPageComponent },
  { path: 'admin/users', component: UserListPageComponent },
  { path: 'admin/books', component: LoadListBookComponent },
  { path: 'user/bytheme', component: BooksByThemeComponent },
  { path: 'admin/borrow', component: BorrowPagesComponent },
  { path: 'forgotpage', component: ForgotPasswordComponent },
  { path: 'bookadd', component: CreateEditBookModalComponent },
  { path: 'useradd', component: CreateEditUserModalComponent },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
