import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperiences = [
    {
      company: 'IQVIA',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Iqvia-logo-color.svg',
      duration: 'May 2022 - Present',
      address: 'Dhaka, Bangladesh',
      roles: [
        {
          title: 'Software Development Engineer 2',
          duration: 'Jan 2024 - Present',
          descriptions: [
            'Designed and developed ETL scripts for client databases.',
            'Designed and developed automation process for ETL pipelines in DataIKU.',
            'Developed POC (Proof of Concept) databases and KPI dashboards for client demonstration.'
          ]
        },
        {
          title: 'Software Developer',
          duration: 'May 2022 - Jan 2024',
          descriptions: [
            'Maintained dev/qa databases for development and POC purposes.',
            'Maintained user permissions and policies for development databases.',
            'Maintained documentation for database structure and user provisioning.'
          ]
        }
      ]
    }
  ];
}
