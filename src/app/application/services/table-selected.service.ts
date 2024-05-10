import { Injectable } from '@angular/core';
import { ProductDTO, ProductTable } from '../../domain/ports/products/product.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableSelectedService {
  public productSelected: BehaviorSubject<ProductTable[]> = new BehaviorSubject<ProductTable[]>([]);
  constructor() { }

  public addProductsToSelectedProducts(newProductSelected: ProductDTO[]): void {
    const transformedProductsTable: ProductTable[] = this.transformProductDTOtoProductTable(newProductSelected);
    const oldAndNewProducts = this.productSelected.getValue().concat(transformedProductsTable);
    this.productSelected.next(this.deleteDuplicateProducts(oldAndNewProducts));
  }

  public transformProductDTOtoProductTable(productDTO: ProductDTO[]): ProductTable[] {
    const productTable: ProductTable[] = [];
    productDTO.forEach(product => {
      const newProduct: ProductTable = {
        ...product,
        quantity: 1,
        finalPrice: 0
      };
      newProduct.finalPrice = newProduct.price * newProduct.quantity;
      productTable.push(newProduct);
    });
  
    return productTable;
  }


  private deleteDuplicateProducts(products: ProductTable[]): ProductTable[] {
    return products.filter(
      (productSelected, index, selfProductsSelectedArray) => index === selfProductsSelectedArray.findIndex(product => product.id === productSelected.id));
  }

}
