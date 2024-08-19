import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})

export class ProductsPage implements OnInit {
  products = [
    {
      id: 1,
      title: 'LAKME',
      description: 'This is the description for lakme product.',
      image: 'assets/lakme.jpg'
    },
    {
      id: 2,
      title: 'RHODE',
      description: 'This is the description for mask items.',
      image: 'assets/mask.jpg'
    },
    {
      id: 3,
      title: 'OIP',
      description: 'This is the description for OIP.',
      image: 'assets/OIP.jpg'
    },
    {
      id: 4,
      title: 'RAREBEAUTY',
      description: 'This is the description for rarebeauty.',
      image: 'assets/set.jpg'
    },
    {
      id: 5,
      title: 'WELDAVA',
      description: 'This is the description for weldava.',
      image: 'assets/weldava.jpg'
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  searchTerm: string = '';
  filteredProducts = this.products;

  filterProducts(event: any) {
    const searchValue = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue)
    );
  }
}
