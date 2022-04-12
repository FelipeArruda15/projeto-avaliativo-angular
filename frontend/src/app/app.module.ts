import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pg404Component } from './pg404/pg404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PgCadastrarComponent } from './pg-cadastrar/pg-cadastrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { PgEstatisticasComponent } from './pg-estatisticas/pg-estatisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    Pg404Component,
    NavbarComponent,
    PgCadastrarComponent,
    AlertComponent,
    AlertErrorComponent,
    PgEstatisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
