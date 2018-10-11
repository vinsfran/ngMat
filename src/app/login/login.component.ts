import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() {
  }

  ngOnInit() {
  }


  login(): void {
    // this.authService.attemptAuth(this.username, this.password).subscribe(
    //   data => {
    //     this.token.saveToken(data.token);
    //     this.router.navigate(['user']);
    //   }
    // );
  }

}
