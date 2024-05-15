import { Component, Inject, ViewChild } from '@angular/core';
import { RegisterOrderFormComponent } from '../../../application/componentes/register-order-form/register-order-form.component';
import { DocumentTypesPort } from '../../../domain/ports/types-document/document-types.port';
import { DOCUMENT_TYPES_TOKEN } from '../../../app.config';
import { DocumentTypesDTO } from '../../../domain/ports/types-document/doucment-types.response';
import { ProductTable } from '../../../domain/ports/products/product.dto';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SearchProductDialogComponent } from '../search-product-dialog/search-product-dialog.component';
import { TableSelectedService } from '../../../application/services/table-selected.service';
import { MatCardModule } from '@angular/material/card';
import { IOrder, IOrderDetail } from '../../../domain/ports/order/register-order.request';
import { OrderPort } from '../../../domain/ports/order/order.port';
@Component({
  selector: 'app-register-order',
  standalone: true,
  imports: [
    RegisterOrderFormComponent,
    MatTableModule,
    MatDialogModule,
    MatCardModule
  ],
  templateUrl: './register-order.component.html',
  styleUrl: './register-order.component.scss'
})
export class RegisterOrderComponent {
  @ViewChild(RegisterOrderFormComponent) registerOrderForm!: RegisterOrderFormComponent;
  public typesOfDocuments: DocumentTypesDTO[] = [];
  public displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'finalPrice'];
  public dataSource: ProductTable[] = [];
  public subtotal: number = 0;
  public igv: number = 0;
  public total: number = 0;
  constructor(
    @Inject(DOCUMENT_TYPES_TOKEN) private documentTypesPort: DocumentTypesPort,
    private orderPort: OrderPort,
    private dialogMaterial: MatDialog,
    private tableSelected: TableSelectedService
  ) {
    this.getTypesOfDocuemnt();
    this.tableSelected.productSelected.subscribe(products => {
      this.dataSource = products;
      this.calculatePaymentResume();
    });
  }

  getTypesOfDocuemnt(): void {
    this.documentTypesPort.getTypesOfDocuments().then(response => this.typesOfDocuments = response);
  }

  openSearchProductsDialog(): void {
    this.dialogMaterial.open(SearchProductDialogComponent)
  }

  changeQuantityOfProduct(newQuantity: number, productId: number): void {
    this.tableSelected.changeQuantityOfProduct(newQuantity, productId);
  }

  calculatePaymentResume(): void {
    this.subtotal = 0;
    this.dataSource.map(product => this.subtotal += product.finalPrice);
    this.igv = Number((this.subtotal * 0.18).toFixed(2));
    this.total = +(this.subtotal + this.igv).toFixed(2);
  }

  registerOrder(): void {
    const orderPayload: IOrder = {
      ...this.registerOrderForm.registerOrderForm.value,
      subTotal: this.subtotal,
      igv: this.igv,
      total: this.total,
      orderDetail: this.changeProductSelectedToProductPayload()
    }
    orderPayload.registerDate = new Date(orderPayload.registerDate).toISOString();
    this.orderPort.registerOrder(orderPayload).then(() => {
      this.registerOrderForm.registerOrderForm.reset();
      this.tableSelected.productSelected.next([]);
      this.dataSource = [];
      this.subtotal = 0;
      this.igv = 0;
      this.total = 0;
    });
  }

  changeProductSelectedToProductPayload(): IOrderDetail[] {
    const orderDetails: IOrderDetail[] = this.dataSource.map(product => {
      return {
        productId: product.id,
        quantity: product.quantity,
        unitPrice: product.price
      } as IOrderDetail
    });
    return orderDetails;
  }
}
