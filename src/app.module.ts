import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationModule } from './registration/registration.module';
import { RegStatus } from './registration/reg-status.enum';
@Module({
  imports: [RegistrationModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'test@999',
    database: 'pg_reg',
    autoLoadEntities: true,
    synchronize: true,
  }),
],
})
export class AppModule {}
