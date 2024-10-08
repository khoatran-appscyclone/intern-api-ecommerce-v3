import { Injectable } from '@nestjs/common';
import {
  CreateCollectionDto,
  UpdateCollectionDto,
} from 'src/dto/collection.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class CollectionService {
  constructor(private prismaService: PrismaService) {}
  create(createCollectionDto: CreateCollectionDto) {
    return this.prismaService.collection.create({ data: createCollectionDto });
  }

  findAll() {
    return this.prismaService.collection.findMany();
  }

  findOne(id: number) {
    return this.prismaService.collection.findFirst({ where: { id } });
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return this.prismaService.collection.update({
      where: { id },
      data: updateCollectionDto,
    });
  }

  remove(id: number) {
    return this.prismaService.collection.delete({ where: { id } });
  }
}
