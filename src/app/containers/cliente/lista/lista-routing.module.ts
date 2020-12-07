import { ListaComponent } from './lista.component';
import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ListaRoutingModule {}
