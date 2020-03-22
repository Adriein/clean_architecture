import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export default class TableLog {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({
    length: 2000
  })
  stack_trace?: string;
  @Column()
  level?: string;
  @Column()
  message?: string;
  @CreateDateColumn()
  date?: Date;
}
