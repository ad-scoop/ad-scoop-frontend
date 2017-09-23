import {Component, ViewEncapsulation, OnInit, Input} from '@angular/core';
import {AuthenticationService} from './../../services/authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import {EventService} from './../../services/event.service';
import {Subscription} from 'rxjs/Subscription';


export class MenuItem {

  public fragment: string;

  constructor(
    public text: string,
    public link: string,
    public icon?: string,
    public method?: string,
    public svg?: string) {
  }

  withFragment(value: string): MenuItem {
    this.fragment = value;
    return this;
  }
}

@Component({
  selector: 'app-top-menu-button',
  templateUrl: './top.menu.button.component.html',
  styleUrls: ['./top.menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopMenuButtonComponent {

  @Input() item: MenuItem;
  @Input() owner: any;

}

@Component({
  selector: 'app-top-menu',
  templateUrl: './top.menu.component.html',
  styleUrls: ['./top.menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopMenuComponent implements OnInit {

  private anonymous = [
    new MenuItem('Idéen', '/', 'lightbulb_outline').withFragment('idea'),
    new MenuItem('Om os', '/', 'people').withFragment('about'),
    new MenuItem('Kontakt', '/', 'phone').withFragment('contact'),
    new MenuItem('Log ind', 'login', 'person')
  ];

  private provider = [
    new MenuItem('Opret bannerplads', 'provider/site', '', '', 'banner'),
    new MenuItem('Log ud', '', 'person', 'logout'),
  ];

  private advertiser = [
    new MenuItem('Planlæg og indryk', 'advertiser/campaigns', '', '', 'campaigns'),
    new MenuItem('Log ud', '', 'person', 'logout')
  ];

  selectedMenu = [];
  private subscription: Subscription;

  constructor(public userService: AuthenticationService, private router: Router, private eventService: EventService) {
    this.subscription = this.eventService.getEvent().subscribe(event => {this.ngOnInit()});
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  ngOnInit() {
    if (this.userService.isLoggedInAsAdvertiser()) {
      this.selectedMenu = this.advertiser;
    } else if (this.userService.isLoggedAsProvider()) {
      this.selectedMenu = this.provider;
    } else {
      this.selectedMenu = this.anonymous;
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
    this.ngOnInit();
  }

  toHome(): string {
    if (this.userService.isLoggedInAsAdvertiser()) {
      return 'advertiser/home';
    } else if (this.userService.isLoggedAsProvider()) {
      return 'provider/home';
    }
    return '/';
  }

  get self() {
    return this;
  }

}
