import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Transform1Component } from './transform1/transform1.component';


const routes: Routes = [
  {path: 'transform1', component: Transform1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
