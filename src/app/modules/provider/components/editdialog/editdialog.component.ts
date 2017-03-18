import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditDialogComponent implements OnInit {

  @Input() site;

  constructor(public dialogRef: MdDialogRef<EditDialogComponent>) { }

  ngOnInit() {
  }

}
