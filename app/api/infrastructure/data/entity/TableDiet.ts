import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import TableUser from "./TableUser";
import { TableMeal } from ".";

@Entity()
export default class Diet {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({nullable: true})
  validTo?: Date;
  @CreateDateColumn()
  createDate?: Date;
  @UpdateDateColumn({nullable: true})
  updateDate?: Date;
  @Column()
  numOfMeals?: number;
  @ManyToOne((type) => TableUser, (user) => user.diets)
  user?: TableUser;
  @OneToMany((type) => TableMeal, (meal) => meal.diet)
  meals?: TableMeal[];
}
