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
  { path: '', title: "Home", component: HomeComponent },
  { path: 'products/:id', title: "Dettagli prodotto", component: ProductPageComponent },
  { path: 'home', title: "Home", component: HomeComponent },
  { path: 'cart', title: "Carrello", component: CartComponent },
  { path: 'search/:search', title: "Ricerca", component: SearchResultComponent },
  { path: 'categories/:category', title: "Prodotti per categoria", component: CategoryResultComponent },
  { path: 'about', title: "Chi siamo", component: AboutComponent },
  { path: '**', title: "404 Pagina non trovata", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
