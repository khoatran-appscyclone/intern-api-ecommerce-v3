import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  create(createCollectionDto: CreateCollectionDto) {
    return this.prisma.collection.create({ data: createCollectionDto });
  }

  findAll() {
    return this.prisma.collection.findMany();
  }

  async findOne(id: number) {
    const collection = await this.prisma.collection.findFirst({
      where: { id },
    });
    const products = await this.prisma.product.findMany({
      where: { id: { in: collection.productIds as number[] } },
    });
    return { ...collection, products };
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return this.prisma.collection.update({
      where: { id },
      data: updateCollectionDto,
    });
  }

  remove(id: number) {
    return this.prisma.collection.delete({ where: { id } });
  }
}
