import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorService {
  constructor(private prisma: PrismaService) {}

  async create(createVendorDto: CreateVendorDto) {
    return this.prisma.vendor.create({
      data: createVendorDto,
    });
  }

  async findAll() {
    return this.prisma.vendor.findMany();
  }

  async findOne(id: number) {
    return this.prisma.vendor.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateVendorDto: UpdateVendorDto) {
    return this.prisma.vendor.update({
      where: { id },
      data: updateVendorDto,
    });
  }

  async remove(id: number) {
    return this.prisma.vendor.delete({
      where: { id },
    });
  }
}
