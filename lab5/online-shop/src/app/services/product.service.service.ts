import { Injectable,signal } from '@angular/core';
import { Products } from '../product';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products= signal<Product[]>(Products)

}
