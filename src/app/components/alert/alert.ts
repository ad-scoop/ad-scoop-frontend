import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'alert',
  templateUrl: './alert.html'
})

export class Alert implements OnInit {

  constructor(public snackBar: MdSnackBar, private alertService: AlertService) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      if (message) {
        this.openSnackBar(message.text, 'Luk');
      }
    });
  }

}
