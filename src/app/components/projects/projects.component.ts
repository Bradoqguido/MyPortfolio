import { Component, OnInit } from '@angular/core';

export interface projectsInterface {
  name: string;
  imgURL: string;
  detailsParagraphs: string[];
  url: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // accepted heights: 16, 24, 32, 48, 64, 96 ...
  imgHeight = 48;

  projects: projectsInterface[] = [
    { name: 'Hackathon Online Management App',
      imgURL: 'https://cdn.iconscout.com/icon/free/png-' + this.imgHeight + '/angular-3-226070.png',
      detailsParagraphs: [
        'Hackathon Online management application for in-person and online events.',
        'Developed in angular with material design and firebase firestore.',
      ],
      url: 'https://hackathon-online.web.app'
    },
  ];

}
