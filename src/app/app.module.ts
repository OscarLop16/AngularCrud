import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
//animaciones 
import{BrowserAnimationsModule}from'@angular/platform-browser/animations'
import{ToastrModule} from'ngx-toastr'

//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment';
import { from } from 'rxjs'; 

//components
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

//services
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent, 
    ProductComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase), 
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
   
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
