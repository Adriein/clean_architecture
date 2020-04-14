import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
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
}
