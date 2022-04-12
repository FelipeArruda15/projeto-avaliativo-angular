import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgCadastrarComponent } from './pg-cadastrar/pg-cadastrar.component';
import { PgEstatisticasComponent } from './pg-estatisticas/pg-estatisticas.component';
import { Pg404Component } from './pg404/pg404.component';

const routes: Routes = [
  {path: 'estatisticas', component: PgEstatisticasComponent},
  {path: 'cadastrar', component: PgCadastrarComponent},
  {path: '**', component: Pg404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
