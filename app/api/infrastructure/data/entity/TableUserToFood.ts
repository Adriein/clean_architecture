import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import TableUser from "./TableUser";
import TableFood from "./TableFood";

@Entity()
export default class TableUserToFood {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public userId!: number;

    @Column()
    public foodId!: number;

    @Column()
    public like!: boolean;

    @ManyToOne(type => TableUser, user => user.foods)
    public user!: TableUser;

    @ManyToOne(type => TableFood, food => food.users)
    public food!: TableFood;
}