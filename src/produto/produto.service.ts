import { Repository } from 'typeorm';
import { ProdutoRepository } from './produto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from './produto.entity';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';
import { AtualizaProdutoDTO } from './dto/atualizaProduto.dto';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>
    ){}

    async criarProduto(produtoEntity: ProdutoEntity){
        await this.produtoRepository.save(produtoEntity);
    }

    async listarProdutos(){
        const produtosSalvos = await this.produtoRepository.find();
        return produtosSalvos;
    }
        
    async atualizarProduto(id: string, ProdutoEntity: AtualizaProdutoDTO){
        return await this.produtoRepository.update(id, ProdutoEntity)
    }

    async deletarProduto(id: string){
        return await this.produtoRepository.delete(id)
    }
}