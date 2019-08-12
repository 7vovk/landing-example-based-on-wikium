import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import {AuthenticationService, UserService} from '../_services';
import {Router} from '@angular/router';
import {LanguageService} from '../../shared/services/language.service';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private languageService: LanguageService
    ) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  changeLang() {
    this.languageService.changeLang();
  }
}
