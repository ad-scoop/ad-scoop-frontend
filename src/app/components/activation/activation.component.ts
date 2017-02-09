import { UserService } from '../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe((params: Params) => {
        let token = params['token'];
        this.userService.activate(token);
      });
  }

}
