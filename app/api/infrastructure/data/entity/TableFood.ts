import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { TableMeal } from ".";

@Entity()
export default class Food {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  @Column()
  kcal?: number;
  @Column()
  type?: string;
  @ManyToMany((type) => TableMeal)
  @JoinTable()
  meals?: TableMeal[];
}
