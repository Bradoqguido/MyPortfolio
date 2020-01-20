import { Component, OnInit } from '@angular/core';

export interface singleRow {
  text: string;
}

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  otherEvents: singleRow[] = [
    { text: 'Show Rural Digital 2020' },
    { text: 'A&B GameJam III - Unioeste Cascavel 2019' },
    { text: 'Hackathon Unimed Cascavel/Sebrae 2019' },
    { text: 'Nasa Space Apps Challange 2018 - Uniamerica Foz do Iguacu' },
    { text: 'OBR - Brazilian Robotics Olympiad 2017' },
  ];

  eventsAwards: singleRow[] = [
    { text: '2019 Digital Rural Show Winner' },
    { text: '2017 Best OBR Program - Brazilian Robotics Olympics' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
