import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = []
  product = {
    productCode: '',
    productName: '',
    category: '',
    price: null
  }
  


  constructor(private ps: ProductService) { }

  if(isedit){

    this.ps.addProduct(this.product).subscribe((res) => {
      console.log(res)
      this.products.push(res.product);
    })
      this.product = {
        productCode: '',
        productName: '',
        category: '',
        price: null
      }
  }
  

  getProducts() {
    this.ps.getProducts().subscribe((res) => {
      this.products = res;
    })
  }
  deleteProduct(code:string){
    const confirmation = confirm("Are you sure to delete this product?");

    if (confirmation) {
    this.ps.deleteProduct(code).subscribe(res => {
        console.log("Response from delete API:", res)
        this.getProducts();
      })
    }
    
  }

  update(p:any){
    this.isedit=true;
    this.product={...p};
  }
}
