import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'personajes',
        loadChildren: () => import('../pages/personajes/personajes.module').then(m => m.PersonajesPageModule)
      },
      {
        path: 'episodios',
        loadChildren: () => import('../pages/episodios/episodios.module').then(m => m.EpisodiosPageModule)
      },
      {
        path: 'lugares',
        loadChildren: () => import('../pages/lugares/lugares.module').then(m => m.LugaresPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/personajes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/personajes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
