import { AlertService } from '../../services/alert.service'
import { UserService } from '../../services/user.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private alert: AlertService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const token = params['token'];
      this.userService.activate(token).subscribe(
        (data) => this.router.navigate(['/login']),
        (err) => {
          this.router.navigate(['/login']);
          this.alert.error('Fejl ved aktiveringen prøv igen!');
        }
      );
    });
  }

}
