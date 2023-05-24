import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/service/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit{

  produtos: Produto[] = []
  
  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtosRetornandos =>
        this.produtos = produtosRetornandos
    );
    console.log('Listando on init')
  }

  excluir (produtoRemove: Produto):void{
    if (produtoRemove.id){
      this.produtoService.apagar(produtoRemove.id).subscribe(
        produtoRemovido =>{
          const indx = this.produtos.findIndex(produto =>
            produto.id === produtoRemove.id);
          this.produtos.splice(indx,1)
        }
      )
    }
  }

}
