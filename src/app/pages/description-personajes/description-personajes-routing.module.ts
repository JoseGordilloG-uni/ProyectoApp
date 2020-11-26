import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionPersonajesPage } from './description-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionPersonajesPageRoutingModule {}
