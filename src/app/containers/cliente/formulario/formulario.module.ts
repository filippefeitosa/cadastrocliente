import { NgxMaskModule } from 'ngx-mask';
import { FormularioRoutingModule } from './formulario-routing.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario.component';

@NgModule({
  imports: [
    SharedModule,
    FormularioRoutingModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [FormularioComponent]

})
export class FormularioModule { }
