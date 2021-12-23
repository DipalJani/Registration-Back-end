import { Injectable, Get, Query, NotFoundException } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-reg.dto';
import { RegistrationRepository } from './registration.repository';
import { Registration } from './registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateRegistrationDto } from './dto/update-reg.dto';
import { GetRegFilterDto } from './dto/get-reg-filter.dto';
import { RegStatus } from './reg-status.enum';
@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(RegistrationRepository)
    private registrationRepository: RegistrationRepository,
  ) { }

  createRegistration(createRegDto: CreateRegistrationDto): Promise<Registration> {
    return this.registrationRepository.createRegistration(createRegDto);
  }

  getRegistration(): Promise<Registration[]> {
    return this.registrationRepository.getRegistrtion();
  }
  async getRegById(id: string): Promise<Registration> {
    const found = await this.registrationRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Registration with ID "${id}" not found`);
    }

    return found;
  }
  async updateRegistration(id: string, regdto: UpdateRegistrationDto): Promise<Registration> {
    const registration = await this.getRegById(id);

    registration.FirstName = regdto.FirstName;
    registration.LastName = regdto.LastName;
    registration.Phonenumber = regdto.Phonenumber;
    registration.Email = regdto.Email;
    registration.Status = regdto.Status;
    await this.registrationRepository.save(registration);

    return registration;
  }
  async deleteReg(id: string): Promise<void> {
    const result = await this.registrationRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Reg with ID "${id}" not found`);
    }
  }
}
