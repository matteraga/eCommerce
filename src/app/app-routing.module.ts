import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import {ProductPaginationComponent} from "./components/product-pagination/product-pagination.component";
import { HomeComponent } from './components/home/home.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";
import {CategoryResultComponent} from "./components/category-result/category-result.component";
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search/:search', component: SearchResultComponent },
  { path: 'categories/:category', component: CategoryResultComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
