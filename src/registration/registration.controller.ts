import { Body, Controller, Delete, Get, Param, Patch, Post, Query, } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-reg.dto';
import { GetRegFilterDto } from './dto/get-reg-filter.dto';
import { UpdateRegistrationDto } from './dto/update-reg.dto';
import { Registration } from './registration.entity';
import { RegistrationService } from './registration.service';
import { RegStatus } from './reg-status.enum';
@Controller('registration')
export class RegistrationController {
  constructor(private registrationsService: RegistrationService) { }

  @Post()
  createRegistration(@Body() createRegDto: CreateRegistrationDto): Promise<Registration> {
    console.log(createRegDto)
    return this.registrationsService.createRegistration(createRegDto);
  }
  @Get()
  getRegistration(): Promise<Registration[]> {
    //console.log(filterDto)
    //console.log(Status,'j')
    
    return this.registrationsService.getRegistration();
  }
  @Patch('/:id')
  updateRegistration(
    @Param('id') id: string,
    @Body() regdto: UpdateRegistrationDto,
  ): Promise<Registration> {


    console.log(regdto)
    return this.registrationsService.updateRegistration(id, regdto);
  }
  @Get('/:id')
  getRegById(@Param('id') id: string): Promise<Registration> {
    return this.registrationsService.getRegById(id);
  }
  @Delete('/:id')
  deleteReg(@Param('id') id: string): Promise<void> {
    console.log(id)
    return this.registrationsService.deleteReg(id);
  }
}
