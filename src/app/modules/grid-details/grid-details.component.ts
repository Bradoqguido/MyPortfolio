import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css']
})
export class GridDetailsComponent implements OnInit {

  hackathons: Tile[] = [
    {text: 'Nasa Space Apps Challange 2018 - Uniamerica Foz do Iguacu', cols: 0, rows: 0, color: ''},
    {text: 'Show Rural Digital 2019', cols: 0, rows: 0, color: ''},
    {text: 'Hackathon Unimed Cascavel/Sebrae 2019', cols: 0, rows: 0, color: ''},
    {text: 'A&B GameJam III - Unioeste Cascavel', cols: 0, rows: 0, color: ''},
    {text: 'Show Rural Digital 2020', cols: 0, rows: 0, color: ''},
  ];
  constructor() { }

  ngOnInit() {
  }



}
