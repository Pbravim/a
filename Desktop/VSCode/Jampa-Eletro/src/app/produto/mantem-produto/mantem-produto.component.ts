import { Component } from '@angular/core';
import {Produto} from '../../shared/model/produto';
import {ActivatedRoute, Router} from '@angular/router';
import { ProdutoService } from 'src/app/shared/service/produto.service';


@Component({
  selector: 'app-mantem-produto',
  templateUrl: './mantem-produto.component.html',
  styleUrls: ['./mantem-produto.component.css']
})
export class MantemProdutoComponent {

  produtoManutencao: Produto;
  novoCadastro = true;
  nomeBotaoManutencao = "Cadastrar"
  IdProdutoEditar: any;

  produtos: Produto[] = [];

  ngOnInit(): void{
    this.IdProdutoEditar = this.rotaAtual.snapshot.paramMap.get('id')
    if (this.IdProdutoEditar){
      this.novoCadastro = false;
      this.nomeBotaoManutencao = "Salvar"
    }
  }

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private produtoService: ProdutoService){
    this.produtoManutencao = new Produto("",undefined,undefined,undefined);
    const idEditar = this.rotaAtual.snapshot.paramMap.get('id');
    
    if (idEditar){
      this.produtoService.pesquisarPorId(+idEditar).subscribe(
        produto => {
          this.produtoManutencao = produto;
        }
      )
    }
  }

  inserir(): void {
    if (this.novoCadastro && this.produtoManutencao){
      this.produtoService.inserir(this.produtoManutencao).subscribe(
        produto => {
          this.produtos.push(produto);
        }
      )
    }
    //this.produtoManutencao = new Usuario();
    this.roteador.navigate(['listagemprodutos'])
  }

  atualizar(): void{
    if (this.produtoManutencao){
      this.produtoService.atualizar(this.produtoManutencao).subscribe()
      this.roteador.navigate(['listagemprodutos'])
    }
  }
}

