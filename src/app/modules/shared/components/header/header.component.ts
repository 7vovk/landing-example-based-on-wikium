import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Role, User} from '../../../auth/_models';
import {AuthenticationService} from '../../../auth/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  scrollToBenefits() {
    document.querySelector('#benefits').scrollIntoView({behavior: 'smooth'});
  }


  ngOnInit() {
  }

  login(): void {
    this.router.navigate(['/login']);
  }
  
  admin(): void {
    this.router.navigate(['/admin']);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
