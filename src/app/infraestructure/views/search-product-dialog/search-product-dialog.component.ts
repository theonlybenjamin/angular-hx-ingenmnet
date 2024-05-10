import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ProductDTO } from '../../../domain/ports/products/product.dto';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductPort } from '../../../domain/ports/products/product.port';
import { TableSelectedService } from '../../../application/services/table-selected.service';
@Component({
  selector: 'app-search-product-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './search-product-dialog.component.html',
  styleUrl: './search-product-dialog.component.scss'
})
export class SearchProductDialogComponent {
  displayedColumns: string[] = ['select', 'id', 'name', 'price'];
  dataSource = new MatTableDataSource<ProductDTO>([]);
  selection = new SelectionModel<ProductDTO>(true, []);
  productNameToSearch: string = '';
  private productPort: ProductPort = inject(ProductPort);
  private tableSelected: TableSelectedService = inject(TableSelectedService);

  searchProducts(): void {
    this.productPort.getProductsByCoincidence(this.productNameToSearch).then(products => this.dataSource.data = products)
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: ProductDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  saveSelectedProducts(): void  {
    this.tableSelected.addProductsToSelectedProducts(this.selection.selected)
  }
}
