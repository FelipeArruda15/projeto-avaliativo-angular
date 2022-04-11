import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pg404Component } from './pg404/pg404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PgListarComponent } from './pg-listar/pg-listar.component';
import { PgCadastrarComponent } from './pg-cadastrar/pg-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    Pg404Component,
    NavbarComponent,
    PgListarComponent,
    PgCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
