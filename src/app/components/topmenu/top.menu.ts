import { Component, ViewEncapsulation } from '@angular/core';

@Component({    
  selector: 'top-menu',
  templateUrl: './top.menu.html',
  styleUrls: ['./top.menu.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopMenu {
  image = '/assets/images/logoSmall.jpeg';
}
