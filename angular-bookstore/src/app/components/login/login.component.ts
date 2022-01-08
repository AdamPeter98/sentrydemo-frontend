import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserLoginService } from 'src/app/service/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User('', '', '', '');
  message: any;

  constructor(private service: UserLoginService) {}

  ngOnInit(): void {}

  public loginNow() {
    let res = this.service.doLogin(this.user);
    res.subscribe((data) => {
      console.log(data);
      if (data == 'Login Successful') {
        window.location.href = 'http://localhost:4200/books';
      }
    });
  }
}
