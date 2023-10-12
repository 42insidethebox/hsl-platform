import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Initialize as empty string
  password: string = ''; // Initialize as empty string

  constructor() {}

  onLogin() {
    // Your login logic here
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
