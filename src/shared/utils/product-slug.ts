import { slugify } from './slugify';

export class ProductSlug {
  static create(prodName: string, sku: string) {
    return `${slugify(prodName)}_${sku}`;
  }
}
