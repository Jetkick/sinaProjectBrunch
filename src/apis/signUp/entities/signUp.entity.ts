import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 50 })
  @Field(() => String)
  name: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  profileImage: string;

  @Column('simple-array', { nullable: true })
  @Field(() => [String], { nullable: true })
  userTag: string[];

  @Column({ type: 'varchar', length: 300, nullable: true })
  @Field(() => String, { nullable: true })
  info: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  email: string;

  @Column({ type: 'varchar', length: 200 })
  password: string;

  @Column({ default: 0 })
  @Field(() => Int)
  point: number;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;

  @DeleteDateColumn()
  @Field(() => Date)
  deletedAt: Date;
}
