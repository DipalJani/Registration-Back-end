import { EntityRepository, Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-reg.dto';
import { RegStatus } from './reg-status.enum';
import { Registration } from './registration.entity';
import { GetRegFilterDto } from './dto/get-reg-filter.dto';

@EntityRepository(Registration)
export class RegistrationRepository extends Repository<Registration> {
  async createRegistration(createRegDto: CreateRegistrationDto): Promise<Registration> {
    const { FirstName, LastName, Phonenumber, Email, Status } = createRegDto;

    const registration = this.create({
      FirstName,
      LastName,
      Phonenumber,
      Email,
      Status,
    });

    await this.save(registration);
    return registration;
  }

  async getRegistrtion(): Promise<Registration[]> {
    //const { Status } = filterDto; 
   
    //console.log(filterDto,'l')
    //console.log(Status)
     const query = this.createQueryBuilder('registration');
     
    
     query.andWhere("registration.Status = :Status",{ Status: RegStatus.ACTIVE });
    
     console.log(query,'d')

    const registration = await query.getMany();
    return registration;
  }
}