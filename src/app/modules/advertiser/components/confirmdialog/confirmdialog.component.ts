import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material'

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmDialogComponent {

  public headline: string;
  public confirmation: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) { }

}
