import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pg404Component } from './pg404/pg404.component';

const routes: Routes = [

  {path: '**', component: Pg404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
