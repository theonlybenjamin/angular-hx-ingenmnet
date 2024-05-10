import { inject } from "@angular/core";
import { Endpoints } from "../../domain/enum/endpoints.enum";
import { ProductDTO } from "../../domain/ports/products/product.dto";
import { ProductPort } from "../../domain/ports/products/product.port";
import { HttpMask } from "../mask/http.mask";

export class ProductoAdapter implements ProductPort {
    private httpMask: HttpMask = inject(HttpMask)
    getProductsByCoincidence(searchText: string): Promise<ProductDTO[]> {
        return this.httpMask.get(Endpoints.SEARCH_PRODUCTS + '/' + searchText)
}
}