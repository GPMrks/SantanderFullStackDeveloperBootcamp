import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books!: any;

  constructor(private productService: ProductListService) { }

  ngOnInit(): void {
    this.books = this.productService.getBook().subscribe(data => {
      this.books = data;
      console.log(this.books);
    })
  }

}
