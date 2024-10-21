import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, WorkExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
