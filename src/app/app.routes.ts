import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent,
        title: 'Md. Mohib Hossain'
    },
    {
        path: 'about',
        component: AboutMeComponent,
        title: 'About Me'
    },
    {
        path: 'work',
        component: WorkExperienceComponent,
        title: 'Work Experience'
    },

    // Wildcard route to catch unknown paths and redirect to homepage
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
