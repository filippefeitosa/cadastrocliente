import { GetStatePipe } from './getState.pipe';
import { NgModule } from '@angular/core';
import { ListaRoutingModule } from './lista-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListaComponent } from './lista.component';

@NgModule({
  imports: [
    SharedModule,
    ListaRoutingModule
  ],
  declarations: [
    ListaComponent,
    GetStatePipe
  ]
})
export class ListaModule { }
