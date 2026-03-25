import { Component, inject } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
productService = inject(ProductService);
allProducts: Product[]=this.productService.products();
currentProducts: Product[]=this.allProducts;
 
  categories = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  selectedCategoryId: number = 1;

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    
    this.currentProducts = this.allProducts.filter(product => product.categoryId === categoryId);
  }

  delete(id:number){
    this.currentProducts=this.currentProducts.filter(product=>product.id!=id);
  }
}