import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import TableUserToFood from "./TableUserToFood";

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
  @OneToMany(
    type => TableUserToFood,
    userToFood => userToFood.food
  )
  public users!: TableUserToFood[];
}
