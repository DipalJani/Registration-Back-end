import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { RegistrationRepository } from './registration.repository';

@Module({
    imports: [TypeOrmModule.forFeature([RegistrationRepository])],
    controllers: [RegistrationController],
    providers: [RegistrationService],
})
export class RegistrationModule {}
