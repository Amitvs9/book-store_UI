import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookhomeComponent } from './components/bookhome/bookhome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path:'',
    component:BookhomeComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
