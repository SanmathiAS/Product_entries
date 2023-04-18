import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import productData from '../productList.json';

interface Product {  
  id: Number;  
  name: String;  
  price: Number;  
  address: String;  
}  

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'json-file-read-angular';

 public productsList: Product[] = productData;

  ngOnInit() {
    
  }
 
  goToDetailsPage() {
    alert()
    this.router.navigateByUrl("/details");
  }
  
}
