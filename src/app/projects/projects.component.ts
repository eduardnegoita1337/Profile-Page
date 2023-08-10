import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export default class ProjectsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Eduard Negoita | Projects')
  }
}
