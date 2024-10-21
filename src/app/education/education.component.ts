import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  instituteList = [
    {
      name: 'Bangladesh University of Engineering and Technology',
      degree: 'B.Sc in Computer Science and Engineering',
      duration: 'Feb 2017 - May 2022',
      grade: 'CGPA: 3.59/4.00',
    }
  ]
}
