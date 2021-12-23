import { IsNotEmpty } from 'class-validator';
import { RegStatus } from '../reg-status.enum';

export class CreateRegistrationDto {
  @IsNotEmpty()
  FirstName: string;

  @IsNotEmpty()
  LastName: string;

  @IsNotEmpty()
  Phonenumber: string;

  @IsNotEmpty()
  Email: string;

  @IsNotEmpty()
  Status: RegStatus.ACTIVE;
}