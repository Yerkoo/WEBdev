import { Injectable,signal } from '@angular/core';
import { Products } from '../product';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
private readonly massiv= signal<Product[]>(Products)

}
