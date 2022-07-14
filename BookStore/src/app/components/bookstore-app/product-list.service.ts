import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private url = 'https://sheet.best/api/sheets/1ec0cfcd-dee8-4f64-816a-fcfa66e316ef';

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  getBook(){
    return this.httpClient.get(this.url);
  }

}
