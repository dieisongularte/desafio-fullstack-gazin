import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'home',
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(({ HomeModule }) => HomeModule)
      },
      {
        path: 'nivel',
        loadChildren: () => import('./views/nivel/nivel.module').then(({ NivelModule }) => NivelModule),
        data: {
          breadcrumb: '',
          title: 'Nível'
        }
      },
      {
        path: 'desenvolvedor',
        loadChildren: () => import('./views/desenvolvedor/desenvolvedor.module').then(({ DesenvolvedorModule }) => DesenvolvedorModule),
        data: {
          breadcrumb: '',
          title: 'Desenvolvedor'
        }
      }
    ]
  },
  {
    path: 'error',
    loadChildren: () => import('./views/errors/errors.module').then(({ ErrorsModule }) => ErrorsModule),
    data: {
      menu: false
    }
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
