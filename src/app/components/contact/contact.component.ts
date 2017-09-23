import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    subject: new FormControl(),
    text: new FormControl()
  });

  constructor() {}

  send() {
  }

}
