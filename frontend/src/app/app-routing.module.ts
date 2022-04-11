import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgCadastrarComponent } from './pg-cadastrar/pg-cadastrar.component';
import { PgListarComponent } from './pg-listar/pg-listar.component';
import { Pg404Component } from './pg404/pg404.component';

const routes: Routes = [
  {path: 'listar', component: PgListarComponent},
  {path: 'cadastrar', component: PgCadastrarComponent},
  {path: '**', component: Pg404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
