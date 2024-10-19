import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuOpen: boolean = false;

  navItems = [
    { name: 'About Me', route: '/about' },
    { name: 'Work', route: '/work' },
    { name: 'Research', route: '/research' },
    { name: 'Education', route: '/education' },
    { name: 'Skills', route: '/skills' },
    { name: 'Projects', route: '/projects' },
    { name: 'CV', route: '/cv' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the menu on mobile
  }
}
