import { Component,input,output } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemComponent {
product= input.required<Product>();


  shareWhatsApp(product: Product) {
    const message = encodeURIComponent(`Оцени: ${product.name} — ${product.link}`);
    const url = `https://wa.me/?text=${message}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=Оцени: ${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }

changeImage(product: Product, newImage: string) {
  product.image = newImage;
}

like(){
  this.product().likes+=1;
}

deleteEvent=output<number>();
delete(){
  this.deleteEvent.emit(this.product().id);
}
}

