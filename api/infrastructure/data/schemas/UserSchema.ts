import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class UserSchema {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id?: number;
  @Column({
    type: 'varchar',
  })
  avatar?: string;
  @Column({
    type: 'varchar',
  })
  email?: string;
  @Column({
    type: 'varchar',
  })
  password?: string;
  @Column({
    type: 'varchar',
    name: 'first_name',
  })
  firstName?: string;
  @Column({
    type: 'varchar',
    name: 'last_name',
  })
  lastName?: string;
  @Column({
    type: 'varchar',
  })
  gender?: string;
  @Column({
    type: 'int',
  })
  age?: number;
  @Column({
    type: 'int',
  })
  level?: number;
  @Column({
    type: 'double',
  })
  weight?: number;
  @Column({
    type: 'double',
  })
  height?: number;
  @Column({
    type: 'varchar',
  })
  objective?: string;
  @Column({
    type: 'text',
  })
  notes?: string;
  @Column({
    type: 'text',
  })
  injuries?: string;
  @Column({
    type: 'varchar',
  })
  status?: string;
  @Column({
    type: 'varchar',
  })
  rol?: string;
  @Column({
    type: 'int',
  })
  pending?: number;
  @Column({
    type: 'varchar',
  })
  paymentType?: string;
}
