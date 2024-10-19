import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutMeComponent,
        title: 'About Me'
    }
];
