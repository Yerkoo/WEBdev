import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
protected readonly products = signal <Product[]> ([
  {id: 1,
  name: 'iphone 17',
  description: 'Apple Iphone 17 256GB White',
  price: 588000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/p15/64165698.png?format=preview-large',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p9c/p34/64165703.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p8a/p52/64462902.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p47/p34/64165700.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p80/p34/64165702.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-belyi-145466818/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7j-6MGOAcCWyy4ggZDZNWQAY&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCyxHmmpMVB01HQZNRsqVkS-WyJCK_LKdr3v5bKzc12wwRk0rhU57UaAnFFEALw_wcB'
  },{id: 2,
  name: 'iphone 17',
  description: 'Apple Iphone 17 256GB Black',
  price: 588000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=preview-large',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/pa8/pa2/64165040.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p70/pa2/64165042.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-nanosim-esim-chernyi-145466647/?c=750000000'
  },{id: 3,
  name: 'iphone 17',
  description: 'Apple Iphone 17 256GB Blue',
  price: 594000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pa6/64164567.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/pec/pa8/64164571.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p16/pee/64462143.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p48/pa6/64164568.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/pd0/pa8/64164570.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-nanosim-esim-goluboi-145309655/?c=750000000'
  },{id: 4,
  name: 'iphone 17',
  description: 'Apple Iphone 17 256GB Purple',
  price: 590000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p48/p3b/64165139.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p8a/p10/64462821.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p9c/p3b/64165136.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p64/p3b/64165138.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-nanosim-esim-fioletovyi-145466665/?c=750000000'
  },{id: 5,
  name: 'iphone 17',
  description: 'Apple Iphone 17 256GB Green',
  price: 610000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p03/pa5/64165821.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p74/pa5/64165825.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/pc7/p7d/64463074.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p20/pa5/64165822.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p58/pa5/64165824.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-nanosim-esim-zelenyi-145466867/?c=750000000'
  },{id: 6,
  name: 'Iphone 17 Pro',
  description: 'Apple Iphone 17 Pro 512GB Orange',
  price: 839000,
  rating: 5.0,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000'
  },{id: 7,
  name: 'Iphone 17 Pro',
  description: 'Apple Iphone 17 Pro 512GB Black',
  price: 825000,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-temno-sinii-145438959/?c=750000000'
  },{id: 8,
  name: 'Iphone 17 Pro',
  description: 'Apple Iphone 17 Pro 512GB Silver',
  price: 849000,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/pd4/p66/64464588.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p7b/p40/64168005.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p43/p40/64168007.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-serebristyi-145467562/?c=750000000'
  },{id: 9,
  name: 'iphone 17',
  description: 'Apple Iphone 17 256GB White',
  price: 588000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p48/p3b/64165139.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p8a/p10/64462821.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p9c/p3b/64165136.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p64/p3b/64165138.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-belyi-145466818/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7j-6MGOAcCWyy4ggZDZNWQAY&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCyxHmmpMVB01HQZNRsqVkS-WyJCK_LKdr3v5bKzc12wwRk0rhU57UaAnFFEALw_wcB'
  },{id: 10,
  name: 'iphone 17',
  description: 'Apple Iphone 17 256GB White',
  price: 588000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p03/pa5/64165821.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p74/pa5/64165825.png?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/pc7/p7d/64463074.jpg?format=gallery-medium', 
           'https://resources.cdn-kaspi.kz/img/m/p/p20/pa5/64165822.png?format=gallery-medium',
           'https://resources.cdn-kaspi.kz/img/m/p/p58/pa5/64165824.png?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-belyi-145466818/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7j-6MGOAcCWyy4ggZDZNWQAY&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCyxHmmpMVB01HQZNRsqVkS-WyJCK_LKdr3v5bKzc12wwRk0rhU57UaAnFFEALw_wcB'
  }
  ])
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
}

function signal<T>(arg0: {}[]) {
  throw new Error('Function not implemented.');
}

