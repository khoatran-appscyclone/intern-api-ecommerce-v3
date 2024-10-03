import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ObjectUtils } from 'src/utils/object';
import { uuid } from 'src/utils/uuid';
import { slugify } from 'src/utils/slugify';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const productPayload = ObjectUtils.omit(createProductDto, ['variants']);
    const sku = uuid();
    const slug = `${slugify(productPayload.name)}_${sku}`;

    const product = await this.prisma.product.create({
      data: {
        ...productPayload,
        sku,
        slug,
        discountPrice: productPayload.price,
      },
    });
    const variants = createProductDto.variants.map((variant) => ({
      ...variant,
      variantId: uuid(),
      productId: product.id,
    }));
    return this.prisma.variant.createMany({ data: variants });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findFirst({
      where: { id },
      include: { variant: true },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
