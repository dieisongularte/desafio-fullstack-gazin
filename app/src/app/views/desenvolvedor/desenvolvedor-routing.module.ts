import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesenvolvedorFormComponent } from './form/desenvolvedor-form.component';
import { DesenvolvedorListComponent } from './list/desenvolvedor-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Desenvolvedor'
    },
    children: [
      {
        path: '',
        component: DesenvolvedorListComponent
      },
      {
        path: ':desenvolvedorId',
        data: {
          breadcrumb: 'Cadastro'
        },
        children: [
          {
            path: '',
            component: DesenvolvedorFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesenvolvedorRoutingModule { }
