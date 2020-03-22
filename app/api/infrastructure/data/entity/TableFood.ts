import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";

import TableUser from "./TableUser";
import TableUserToFood from "./TableUserToFood";

@Entity()
export default class Food {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  // @ManyToMany(
  //   type => TableUser,
  //   user => user.foods
  // )
  // users?: TableUser[];
  @OneToMany(type => TableUserToFood, userToFood => userToFood.food)
  public users!: TableUserToFood[];
}
