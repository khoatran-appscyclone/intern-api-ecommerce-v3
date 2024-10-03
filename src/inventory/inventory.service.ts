import { Injectable } from '@nestjs/common';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  update(updateInventoryDto: UpdateInventoryDto) {
    return this.prisma.variant.update({
      where: { variantId: updateInventoryDto.variantId },
      data: { inventory: updateInventoryDto.inventory },
    });
  }
}
