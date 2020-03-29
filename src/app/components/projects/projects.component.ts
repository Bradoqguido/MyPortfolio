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

  // accepted heights: 16, 24, 32, 48, 64, 96 ...
  imgHeight = 48;

  projects: projectsInterface[] = [
    {
      name: 'Hackathon Online Management App',
      imgURL: 'https://cdn.iconscout.com/icon/free/png-' + this.imgHeight + '/angular-3-226070.png',
      detailsParagraphs: [
        'Hackathon Online management application for in-person and online events.',
        'Developed in angular with material design and firebase firestore.',
      ],
      url: 'https://hackathon-online.web.app'
    },
    {
      name: 'Pizzaria Management App',
      imgURL: 'assets/images/pizza-48x48.png',
      detailsParagraphs: [
        'Management application for Pizzarias with stock, grade, products, person access controls.',
        'Developed in angular with material design and firebase firestore.',
        'Comming soon: DashBoards, DRE, Payments (With Mercado Pago API) and NFe integration (For Brazil)'
      ],
      url: 'https://ctrl-pizza.web.app'
    },
  ];

  ngOnInit() {
  }

}
