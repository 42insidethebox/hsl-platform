import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  fullName: string = ''; // Initialize as empty string
  email: string = ''; // Initialize as empty string
  password: string = ''; // Initialize as empty string
  confirmPassword: string = ''; // Initialize as empty string

  constructor() {}

  onRegister() {
    // Your registration logic here
    console.log(
      `Full Name: ${this.fullName}, Email: ${this.email}, Password: ${this.password}, Confirm Password: ${this.confirmPassword}`
    );

    // Implement API calls, validation, etc. for registration
  }

  // Dummy methods for social registration options
  registerWithGoogle() {
    console.log('Registering with Google (Dummy)');
  }

  registerWithFacebook() {
    console.log('Registering with Facebook (Dummy)');
  }

  registerWithApple() {
    console.log('Registering with Apple (Dummy)');
  }

  registerWithGitHub() {
    console.log('Registering with GitHub (Dummy)');
  }

  registerWithDiscord() {
    console.log('Registering with Discord (Dummy)');
  }
}
