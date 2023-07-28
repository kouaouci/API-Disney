import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonnagesComponent } from './pages/list-personnages/list-personnages.component';
import { DetailPersonnageComponent } from './pages/detail-personnage/detail-personnage.component';
import { LoginComponent } from './auth/login/login.component';
import { UpdatePersonnageComponent } from './pages/update-personnage/update-personnage.component';
import { CreatePersonnageComponent } from './pages/create-personnage/create-personnage.component';
import { ModalPersonnageComponent } from './pages/modal-personnage/modal-personnage.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListPersonnagesComponent,
    DetailPersonnageComponent,
    LoginComponent,
    UpdatePersonnageComponent,
    CreatePersonnageComponent,
    ModalPersonnageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
