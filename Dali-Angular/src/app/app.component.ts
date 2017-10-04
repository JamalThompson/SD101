import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dali Prodcuts';
  allProducts: Product[];
  selectedProduct: Product;


  constructor(private productService:ProductService){}

  saveProduct():void{
    this.productService.saveProduct(this.selectedProduct);
  }


onselect(product:Product):void{
  this.selectedProduct= product;
}


getProducts():void{
  this.productService.getProducts()
                      .then(allProducts=>this.allProducts = allProducts);

}

ngOnInit():void{
  this.getProducts();
}


}
