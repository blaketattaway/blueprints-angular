import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserMiniatureComponent } from './components/user-miniature/user-miniature.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { TableComponent } from './components/table/table.component';
import { ColumnComponent } from './components/column/column.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    UserInfoComponent,
    UserMiniatureComponent,
    LoginPageComponent,
    HomePageComponent,
    LoginInputComponent,
    TableComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    UserInfoComponent,
    UserMiniatureComponent,
    LoginPageComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
