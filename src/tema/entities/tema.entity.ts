import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}
