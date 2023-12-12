import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridDeleteIconComponent } from './components/grid-delete-icon/grid-delete-icon.component';
import { GridEditIconComponent } from './components/grid-edit-icon/grid-edit-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { UsersSearchComponent } from './components/users-search/users-search.component';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'Header', component: HeaderComponent},
 
  { path : 'Users', component : UsersComponent},
  { path : 'UsersSearch',component : UsersSearchComponent},

  { path : 'GridEditIconComponent',component :GridEditIconComponent},
  { path : ' GridDeleteIconComponent',component:  GridDeleteIconComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
