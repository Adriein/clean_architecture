import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import DietSchema from "./DietSchema";
import { TableFood } from ".";

@Entity()
export default class Meal {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: true })
  name?: string;
  @Column("double", { nullable: true })
  totalKcal?: number;
  @ManyToOne((type) => DietSchema, (diet) => diet.meals)
  diet?: DietSchema;
  @ManyToMany((type) => TableFood)
  @JoinTable()
  foods?: TableFood[];
}
