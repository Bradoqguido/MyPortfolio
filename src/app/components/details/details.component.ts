import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  myImg = 'https://avatars1.githubusercontent.com/u/33663771?v=4';
  myName = 'Jeferson Eduardo Guido';

  constructor() { }

  ngOnInit() {
  }

}
