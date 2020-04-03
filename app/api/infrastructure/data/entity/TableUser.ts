import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import TableUserToFood from "./TableUserToFood";

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  avatar?: string;
  @Column()
  email?: string;
  @Column()
  password?: string;
  @Column()
  first_name?: string;
  @Column()
  last_name?: string;
  @Column()
  sex?: string;
  @Column()
  age?: number;
  @Column()
  level?: number;
  @Column("double")
  weight?: number;
  @Column("double")
  height?: number;
  @Column()
  nutrition_objective?: string;
  @Column("text")
  notes?: string;
  @Column("text")
  injuries?: string;
  @Column()
  user_status?: boolean;
  @Column()
  rol?: string;

  @OneToMany(
    type => TableUserToFood,
    userToFood => userToFood.user
  )
  public foods!: TableUserToFood[];
}
