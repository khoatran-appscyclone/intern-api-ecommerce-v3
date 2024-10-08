import { Injectable } from '@nestjs/common';
import { CreateReviewDto, UpdateReviewDto } from 'src/dto/review.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prismaService: PrismaService) {}
  create(createReviewDto: CreateReviewDto) {
    return this.prismaService.review.create({ data: createReviewDto });
  }

  findAll() {
    return this.prismaService.review.findMany();
  }

  findOne(id: number) {
    return this.prismaService.review.findFirst({ where: { id } });
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
