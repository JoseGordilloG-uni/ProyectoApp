import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionPersonajesPageRoutingModule } from './description-personajes-routing.module';

import { DescriptionPersonajesPage } from './description-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionPersonajesPageRoutingModule
  ],
  declarations: [DescriptionPersonajesPage]
})
export class DescriptionPersonajesPageModule {}
