import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany
} from "typeorm";

import User from "./DTOUser";

@Entity()
export default class Food {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  @ManyToMany(
    type => User,
    user => user.foods
  )
  users?: User[];
}
