import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() imageUrl;
  @Input() text;
  @Input() link;
  @Input() hoverClass;

  constructor() {}

}
