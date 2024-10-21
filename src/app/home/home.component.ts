import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, WorkExperienceComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
