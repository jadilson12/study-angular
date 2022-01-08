import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  {
    path: 'categorias',
    loadChildren: () => import('./categoria/categoria.module').then((m) => m.CategoriaModule),
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produto/produto.module').then((m) => m.ProdutoModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
