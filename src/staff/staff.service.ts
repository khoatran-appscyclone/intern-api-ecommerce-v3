import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import * as bcrypt from 'bcrypt';
import { hashPassword } from 'src/utils/hass-password';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(createStaffDto: CreateStaffDto) {
    const hashedPassword = await hashPassword(createStaffDto.password);
    return this.prisma.staff.create({
      data: {
        ...createStaffDto,
        password: hashedPassword,
      },
    });
  }

  async findAll() {
    return this.prisma.staff.findMany({
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.staff.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    const data: any = { ...updateStaffDto };

    if (updateStaffDto.password) {
      data.password = await bcrypt.hash(updateStaffDto.password, 10);
    }

    return this.prisma.staff.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.staff.update({
      where: { id },
      data: {
        active: false,
      }
    });
  }
}
