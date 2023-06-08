import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";
import {CategoryResultComponent} from "./components/category-result/category-result.component";
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', title: "QuickDeals | Home", component: HomeComponent },
  { path: 'home', title: "QuickDeals | Home", component: HomeComponent },
  { path: 'cart', title: "QuickDeals | Carrello", component: CartComponent },
  { path: 'about', title: "QuickDeals | Chi siamo", component: AboutComponent },
  { path: 'products/:id', title: "QuickDeals | Dettagli prodotto", component: ProductPageComponent },
  { path: 'search/:search', title: "QuickDeals | Ricerca", component: SearchResultComponent },
  { path: 'categories/:category', title: "QuickDeals | Prodotti per categoria", component: CategoryResultComponent },
  { path: '**', title: "QuickDeals | 404 - Pagina non trovata", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
