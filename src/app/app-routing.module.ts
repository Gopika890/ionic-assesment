import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage) },
  { path: 'about-us', loadComponent: () => import('./pages/aboutus/aboutus.page').then(m => m.AboutusPage) },
  { path: 'products', loadComponent: () => import('./pages/products/products.page').then(m => m.ProductsPage) },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'contact-us', loadComponent: () => import('./pages/contactus/contactus.page').then(m => m.ContactusPage) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
