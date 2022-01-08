import { Component, OnInit } from '@angular/core';
import { Book } from './common/book';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private cookieValue!: String;

  constructor(private cookieService: CookieService) {}

  public ngOnInit(): void {
    this.cookieValue = this.cookieService.get('access-token');
  }

  public userIsLogedin() {
    return true;
  }
}
