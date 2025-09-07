import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillComponent } from '../skill/skill.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { FirstComponent } from '../first/first.component';
declare const AOS: any; // Declare AOS from the global window object

@Component({
  selector: 'app-home',
  imports: [ FirstComponent, AboutComponent, SkillComponent, ProjectComponent, ContactComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngAfterViewInit() {
    AOS.init({
      // You can add options here, e.g.
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }

}
