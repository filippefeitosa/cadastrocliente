import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule) },
  { path: 'cadastrar', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)  },
  { path: 'editar/:id', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)  },
  { path: '**', loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule) }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClienteModule { }
