import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//service
import { ProductService } from '../../../services/product.service';
import { from } from 'rxjs';
//product class
import { Product } from '../../../models/product';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService,
    public toastr: ToastrService

    ) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetFrom();
  }

  /////////////////////////////
  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
    this.productService.insertProduct(productForm.value)
    else
      this.productService.updateProduct(productForm.value);
    this.resetFrom(productForm);

    this.toastr.success('Successful Operation');
  }

  ////////////////////////////
  resetFrom(productForm?: NgForm) {
    if (productForm != null)
      productForm.reset();
    this.productService.selectedProduct = new Product();
  }

}
