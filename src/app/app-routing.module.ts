import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonnagesComponent } from './pages/list-personnages/list-personnages.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {
    path: 'list', 
    component: ListPersonnagesComponent, // Remplacez 'List-personnages' par le nom réel de votre composant
  },
  {
    path:'', component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
