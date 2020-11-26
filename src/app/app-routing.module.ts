import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'episodios',
    loadChildren: () => import('./pages/episodios/episodios.module').then( m => m.EpisodiosPageModule)
  },
  {
    path: 'lugares',
    loadChildren: () => import('./pages/lugares/lugares.module').then( m => m.LugaresPageModule)
  },
  {
    path: 'description-personajes/:id',
    loadChildren: () => import('./pages/description-personajes/description-personajes.module').then( m => m.DescriptionPersonajesPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
