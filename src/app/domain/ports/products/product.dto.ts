export interface ProductDTO {
    id: number;
    name: string;
    price: number
}

export interface ProductTable extends ProductDTO {
    quantity: number;
    finalPrice: number;
}