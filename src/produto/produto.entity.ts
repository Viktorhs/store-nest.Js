import {
  Entity, 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from 'typeorm'
import { ProdutoCaracteristicaEntity } from './produto-caracteristica.entity';
import { ProdutoImagemEntity } from './produto-imagem.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Entity({name: 'produtos'})
export class ProdutoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'usuario_id', length: 100, nullable: false})
  usuarioId: string;

  @Column({name: 'nome', length: 100, nullable: false})
  nome: string;

  @Column({name: 'valor' , nullable: false})
  valor: number;

  @Column({name: 'qunatidade', nullable: false})
  quantidade: number;

  @Column({name: 'descricao', length: 255, nullable: false})
  descricao: string;

  @Column({name: 'categoria' , length: 100, nullable: false})
  categoria: string;

  @OneToMany(() => ProdutoCaracteristicaEntity, produtoCaracteristicaEntity =>
   produtoCaracteristicaEntity.produto, {cascade: true, eager: true})
  caracteristicas: ProdutoCaracteristicaEntity[];

  @OneToMany(() => ProdutoImagemEntity, produtoImagemEntity =>
   produtoImagemEntity.produto, {cascade: true, eager: true})
  imagens: ProdutoImagemEntity[];

  @ManyToOne(()=> UsuarioEntity, (usuario) => usuario.produtos, 
  {orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  usuario: UsuarioEntity

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
