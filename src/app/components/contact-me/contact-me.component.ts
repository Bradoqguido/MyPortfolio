import { Component, OnInit } from '@angular/core';

export interface socialMediaInterface {
  name: string;
  url: string;
  imgURL: string;
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // accepted heights: 16, 24, 32, 48, 64, 96 ...
  imgHeight = 32;

  // <img [src]="https://cdn.iconscout.com/icon/free/png-48/linkedin-208-916919.png">
  // <a mat-mini-fab routerLink=".">My Linkedin Profile</a>

  socialmedia: socialMediaInterface[] = [
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/jeferson-e-g/', imgURL: 'https://cdn.iconscout.com/icon/free/png-' + this.imgHeight + '/linkedin-160-461814.png' },
    { name: 'Email', url: 'JefersonEduardoGuido@gmail.com', imgURL: 'https://cdn.iconscout.com/icon/free/png-' + this.imgHeight + '/gmail-30-722694.png' },
    { name: 'GitHub', url: 'https://github.com/Bradoqguido', imgURL: 'https://cdn.iconscout.com/icon/free/png-' + this.imgHeight + '/git-7-438787.png'}
  ];

}
