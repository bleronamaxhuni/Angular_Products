import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  productForm: Products ={
    id:0,
    name:'',
    category:'',
    price:0
  }

  constructor(private productService:ProductsService, private router:Router){}

  ngOnInit(): void {}

  create(){
    this.productService.create(this.productForm).subscribe({
      next:(data)=>{
        alert('Product has been created.');
        this.router.navigate(["/products"])
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
