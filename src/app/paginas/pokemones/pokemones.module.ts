import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CartaComponent } from './carta/carta.component';

import { IonicModule } from '@ionic/angular';

import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [PokemonesPage, CartaComponent] //Los componentes van en las declaraciones del módulo de Angular
})
export class PokemonesPageModule {}
