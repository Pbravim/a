import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantemProdutoComponent } from './produto/mantem-produto/mantem-produto.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';

const routes: Routes = [
  {
    path: 'cadastroproduto',
    component: MantemProdutoComponent
  },
  {
    path: '/editarusuario:id',
    component: MantemProdutoComponent
  },
  {
    path: 'listagemprodutos',
    component: ListagemProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
