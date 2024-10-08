import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReviewDto, UpdateReviewDto } from 'src/dto/review.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prismaService: PrismaService) {}
  async create(createReviewDto: CreateReviewDto) {
    const { customerId, productId, rating, comment } = createReviewDto;

    const customer = await this.prismaService.customer.findUnique({
      where: { id: customerId },
    });
    if (!customer) {
      throw new NotFoundException('The customer does not exist.');
    }

    const existingReview = await this.prismaService.review.findUnique({
      where: {
        customerId_productId: {
          customerId,
          productId,
        },
      },
    });
    if (existingReview) {
      throw new BadRequestException('Customers have rated this product.');
    }

    const review = await this.prismaService.review.create({
      data: {
        rating,
        comment,
        customerId,
        productId,
      },
    });

    const averageRating = await this.getAverageRating(productId);
    if (averageRating) {
      await this.prismaService.product.update({
        where: { id: productId },
        data: {
          reviewCount: { increment: 1 },
          rating: averageRating,
        },
      });
    }

    return review;
  }

  async getAverageRating(productId: number): Promise<number> {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
      include: { review: true },
    });

    if (!product) {
      throw new NotFoundException('The product does not exist.');
    }

    const reviews = product.review;
    if (reviews.length === 0) return null;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  }

  findAll() {
    return this.prismaService.review.findMany();
  }

  findOne(productId: number) {
    return this.prismaService.review.findFirst({ where: { productId } });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prismaService.review.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  remove(id: number) {
    return this.prismaService.review.delete({ where: { id } });
  }
}
