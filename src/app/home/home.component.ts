import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any[] = []

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    // this.getProductsData()
    this.ps.getTasks().then(res=>{
      console.log(res)
    })
  }

  // getProductsData(){
  //   this.ps.getProducts().then(products=>{
  //     this.products = products
  //     console.log(products)
  //   })    
  // }



}
