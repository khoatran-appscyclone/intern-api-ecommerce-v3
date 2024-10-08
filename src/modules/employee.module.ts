import { Module } from '@nestjs/common';
import { EmployeeController } from '../controllers/employee.controller';
import { EmployeeService } from 'src/services/employee.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, PrismaService],
})
export class EmployeeModule {}
