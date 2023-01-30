import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  productForm: Products ={
    id:0,
    name:'',
    category:'',
    price:0
  }
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  getById(id: number) {
    this.productService.getById(id).subscribe((data) => {
      this.productForm = data;
    });
  }
 
  update() {
    this.productService.update(this.productForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/products"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
