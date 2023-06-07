import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { CartComponent } from './components/cart/cart.component';
import {ProductPaginationComponent} from "./components/product-pagination/product-pagination.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search/:search/:page', component: ProductPaginationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
