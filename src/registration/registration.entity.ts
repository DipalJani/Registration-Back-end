import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RegStatus } from './reg-status.enum';
@Entity()
export class Registration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Phonenumber: string;

  @Column()
  Email: string;

  @Column()
  Status: RegStatus;
}