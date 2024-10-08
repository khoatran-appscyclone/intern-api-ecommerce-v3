import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto, UpdateEmployeeDto } from 'src/dto/employee.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prismaService: PrismaService) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prismaService.employee.create({ data: createEmployeeDto });
  }

  findAll() {
    return this.prismaService.employee.findMany();
  }

  findOne(id: number) {
    return this.prismaService.employee.findFirst({ where: { id } });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prismaService.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.employee.delete({ where: { id } });
  }
}
