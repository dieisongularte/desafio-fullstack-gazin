import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelFormComponent } from './form/nivel-form.component';
import { NivelListComponent } from './list/nivel-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null,
        },
        component: NivelListComponent,
      },
      {
        path: ':nivelId',
        data: {
          breadcrumb: 'Cadastro'
        },
        component: NivelFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelRoutingModule { }
