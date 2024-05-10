import { Component, Inject } from '@angular/core';
import { RegisterOrderFormComponent } from '../../../application/componentes/register-order-form/register-order-form.component';
import { DocumentTypesPort } from '../../../domain/ports/types-document/document-types.port';
import { DOCUMENT_TYPES_TOKEN } from '../../../app.config';
import { DocumentTypesDTO } from '../../../domain/ports/types-document/doucment-types.response';
import { ProductTable } from '../../../domain/ports/products/product.dto';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SearchProductDialogComponent } from '../search-product-dialog/search-product-dialog.component';
import { TableSelectedService } from '../../../application/services/table-selected.service';

@Component({
  selector: 'app-register-order',
  standalone: true,
  imports: [
    RegisterOrderFormComponent,
    MatTableModule,
    MatDialogModule
  ],
  templateUrl: './register-order.component.html',
  styleUrl: './register-order.component.scss'
})
export class RegisterOrderComponent {
  public typesOfDocuments: DocumentTypesDTO[] = [];
  public displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'finalPrice'];
  public dataSource: ProductTable[] = []
  constructor(
    @Inject(DOCUMENT_TYPES_TOKEN) private documentTypesPort: DocumentTypesPort,
    private dialogMaterial: MatDialog,
    private tableSelected: TableSelectedService
  ) {
    this.getTypesOfDocuemnt();
    this.tableSelected.productSelected.subscribe(products => this.dataSource = products)
  }

  getTypesOfDocuemnt(): void {
    this.documentTypesPort.getTypesOfDocuments().then(response => this.typesOfDocuments = response);
  }

  openSearchProductsDialog(): void {
    this.dialogMaterial.open(SearchProductDialogComponent)
  }
}
