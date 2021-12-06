import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Home',
      title: 'Home'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        loadChildren: () => import('./views/home/home.module').then(({ HomeModule }) => HomeModule)
      },
      {
        path: 'nivel',
        data: {
          breadcrumb: 'Nível',
          title: 'Nível'
        },
        loadChildren: () => import('./views/nivel/nivel.module').then(({ NivelModule }) => NivelModule)
      },
      {
        path: 'desenvolvedor',
        data: {
          breadcrumb: 'Desenvolvedor',
          title: 'Desenvolvedor'
        },
        loadChildren: () => import('./views/desenvolvedor/desenvolvedor.module').then(({ DesenvolvedorModule }) => DesenvolvedorModule)
      }
    ]
  },
  {
    path: 'error',
    data: {
      menu: false,
      breadcrumb: null
    },
    loadChildren: () => import('./views/errors/errors.module').then(({ ErrorsModule }) => ErrorsModule),
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
