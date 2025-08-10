import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: NavbarComponent,
        children: [
            { path: 'home', component:  FooterComponent },
            { path: 'about', component: AboutComponent },
            { path: 'skill', component: SkillComponent },
            { path: 'project', component: ProjectComponent },
            { path: 'contact', component: ContactComponent },
            // { path: 'pipe', component:  },
            // { path: 'post', component:  },
            // { path: 'put', component:  }, 
            // { path: 'delete', component:  },
            // { path: 'apift', component:  }
            
        ],
    },
];
