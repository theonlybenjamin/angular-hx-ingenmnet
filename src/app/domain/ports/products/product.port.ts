import { ProductDTO } from "./product.dto";

export abstract class ProductPort {
    abstract getProductsByCoincidence(searchText: string): Promise<ProductDTO[]>
}