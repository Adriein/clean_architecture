import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import TableDiet from "./TableDiet";

@Entity()
export default class Meal {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  @ManyToOne((type) => TableDiet, (diet) => diet.meals)
  diet?: TableDiet;
}
