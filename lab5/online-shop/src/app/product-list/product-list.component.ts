import { Component, input,output } from '@angular/core';
import { ProductItemComponent } from '../product-items/product-items.component';
import { ProductService } from '../services/product.service.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products=input.required<Product[]>();
removeEvent=output<number>();
remove(id:number){
  this.removeEvent.emit(id);
}
}
