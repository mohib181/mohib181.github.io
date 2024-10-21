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
  CVPath: string = "files/CV___Mohib.pdf"

  navItems = [
    { name: 'About Me', type: 'internal', route: '#about'},
    { name: 'Work', type: 'internal', route: '#work'},
    { name: 'Research', type: 'internal', route: '#research' },
    { name: 'Education', type: 'internal', route: '#education' },
    { name: 'Skills', type: 'internal', route: '#skills' },
    { name: 'Projects', type: 'router', route: '/projects' },
    { name: 'CV', type: 'external', route: this.CVPath }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the menu on mobile
  }
}
