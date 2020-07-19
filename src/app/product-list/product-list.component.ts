import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import ProductData from './Khoslalabs.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private ProUrl: string ="../../Khoslalabs.json";
  ProductDataList = [];
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.ProductDataList=[
      {
        id: 1,
        name: "item1",
        price: 175,
        discount: 5,
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
        },
        {
        id:2,
        name: "item2",
        price: 190,
        discount: 7,
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
        },
        {
          id:3,
          name: "item3",
          price: 210,
          discount: 7,
          img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
        },
        {
          id:4,
          name: "item4",
          price: 240,
          discount: 9,
          img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
        },
        {
          id:5,
          name: "item5",
          price: 120,
          discount: 4,
          img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
        }
    ];
  }
  sort(){
    this.ProductDataList.sort((a,b) => a.price - b.price);
  }
  

}
