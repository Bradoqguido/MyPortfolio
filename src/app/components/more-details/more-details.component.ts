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

  hackathons: singleRow[] = [
    {text: 'Nasa Space Apps Challange 2018 - Uniamerica Foz do Iguacu'},
    {text: 'Show Rural Digital 2019'},
    {text: 'Hackathon Unimed Cascavel/Sebrae 2019'},
    {text: 'A&B GameJam III - Unioeste Cascavel'},
    {text: 'Show Rural Digital 2020'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
