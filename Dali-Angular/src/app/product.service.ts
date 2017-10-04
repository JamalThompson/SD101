import { Injectable } from '@angular/core';

import {Http, RequestOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Product} from './product';

@Injectable()
export class ProductService {

  private productsURL = 'http://localhost:80/Dali_Products.php';
  private upate = '?job=update';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers});



  constructor(private http: Http) { }


  saveProduct(product:Product):void{
    this.http.post(this.productsURL+this.upate,JSON.stringify(product),this.options)
    .toPromise()
    .then(()=>product)
    .catch(this.handleError);
  }

getProducts():Promise<Product[]>{

  return this.http.get(this.productsURL)
                .toPromise()
                .then(response=>response.json().data as Product[])
                .catch(this.handleError);
}

private handleError(error:any):void{
  console.error('An error occured with the database',error);
}

}
