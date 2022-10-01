import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // página principal
    loadChildren: () => import('./paginas/pokemones/pokemones.module').then(m => m.PokemonesPageModule) //Cargo la página principal
  },
  {
    path: ':nombrePokemon', // : quiere decir que es un parámetro
    loadChildren: () => import ('./paginas/pokemon/pokemon.module').then(m => m.PokemonPageModule) //Cargo la página específica de un pokemon

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
