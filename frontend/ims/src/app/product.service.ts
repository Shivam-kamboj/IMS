import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiUrl = 'http://localhost:3000/api/products';
  constructor(private http:HttpClient) { }
  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductsById(code:string){
    return this.http.get<any>(`${this.apiUrl}/${code}`)
  }
  addProduct(product:any){
     return this.http.post<any>(this.apiUrl,product);
  }
  updateProduct(code:string,product:any){
     return this.http.put<any>(`${this.apiUrl}/${code}`,product);
  }
  deleteProduct(code:string){
     return this.http.delete<any>(`${this.apiUrl}/${code}`);
  }
}
