import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  profile_photo_src = 'assets/mohib_hossain_profile_picture.jpg'
  
  socialLinks = [
    { link: 'https://github.com/mohib181', icon: faGithub},
    { link: 'https://www.linkedin.com/in/mohib181', icon: faLinkedin},
    { link: 'https://scholar.google.com/citations?user=jChTL-AAAAAJ', icon: faGoogleScholar}
  ]
}
