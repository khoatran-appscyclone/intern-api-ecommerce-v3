import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/product.dto';
import { PrismaService } from './prisma.service';
import { slugify } from 'src/shared/utils/slugify';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    const { variants, ...payload } = createProductDto;
    const product = await this.prismaService.product.create({
      data: {
        ...payload,
        slug: slugify(payload.name),
      },
    });

    return await this.prismaService.variant.createMany({
      data: variants.map((v) => ({
        ...v,
        productId: product.id,
        sku: `${product.slug}_${v.colorId}_${v.sizeId}`,
      })),
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findFirst({
      where: { id },
      include: { variants: true },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: { id },
      data: {
        ...updateProductDto,
        slug: slugify(updateProductDto.name),
      },
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({ where: { id } });
  }
}
