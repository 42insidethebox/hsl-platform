# Module Contents

# modules

# admin

## admin.module.ts

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';



@NgModule({
  declarations: [
    UserManagementComponent,
    ServiceManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
```

# user-management

## user-management.component.html

```
<p>user-management works!</p>
```

## user-management.component.css

```

```

## user-management.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {

}
```

# service-management

## service-management.component.css

```

```

## service-management.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.css']
})
export class ServiceManagementComponent {

}
```

## service-management.component.html

```
<p>service-management works!</p>
```

# user-management

## user-management.component.html

```
<p>user-management works!</p>
```

## user-management.component.css

```

```

## user-management.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {

}
```

# service-management

## service-management.component.css

```

```

## service-management.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.css']
})
export class ServiceManagementComponent {

}
```

## service-management.component.html

```
<p>service-management works!</p>
```

# user

## user.module.ts

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
```

# register

## register.component.html

```
<div class="register-container">
  <div class="register-header">
    <h1>Create an Account</h1>
    <p>Sign up to get started.</p>
  </div>
  <!-- Registration Form -->
  <form (submit)="onRegister()">
    <div class="form-group">
      <label for="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        [(ngModel)]="fullName"
        name="fullName"
        required
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        [(ngModel)]="email"
        name="email"
        required
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        [(ngModel)]="password"
        name="password"
        required
      />
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        [(ngModel)]="confirmPassword"
        name="confirmPassword"
        required
      />
    </div>
    <button type="submit" class="register-button">Sign Up</button>
  </form>

  <!-- Social Registration Options -->
  <div class="social-registration">
    <p>Or sign up with:</p>
    <button (click)="registerWithGoogle()" class="google-register">
      Sign up with Google
    </button>
    <button (click)="registerWithFacebook()" class="facebook-register">
      Sign up with Facebook
    </button>
    <button (click)="registerWithApple()" class="apple-register">
      Sign up with Apple
    </button>
    <button (click)="registerWithGitHub()" class="github-register">
      Sign up with GitHub
    </button>
    <button (click)="registerWithDiscord()" class="discord-register">
      Sign up with Discord
    </button>
  </div>

  <div class="login-section">
    <p>Already have an account? <a href="#">Sign In</a></p>
  </div>
</div>
```

## register.component.ts

```
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
```

## register.component.css

```
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.register-header h1,
.register-header p {
  margin: 0;
  padding: 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
}

.form-group input {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.social-registration {
  text-align: center;
  margin-top: 16px;
}

.social-registration p {
  margin-bottom: 8px;
}

.google-register,
.facebook-register,
.apple-register,
.github-register,
.discord-register {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  color: #333;
  transition: background-color 0.2s ease;
}

.google-register {
  background-color: #4285f4;
  color: white;
}

.facebook-register {
  background-color: #3b5998;
  color: white;
}

.apple-register {
  background-color: black;
  color: white;
}

.github-register {
  /* Style for GitHub register button */
}

.discord-register {
  /* Style for Discord register button */
}

.login-section {
  text-align: center;
  margin-top: 16px;
}

.login-section a {
  text-decoration: none;
  color: #007bff;
}

.login-section a:hover {
  text-decoration: underline;
}
```

# login

## login.component.ts

```
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
```

## login.component.css

```
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-header h1,
.login-header p {
  margin: 0;
  padding: 0;
}

.social-logins button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.google-login {
  background-color: #4285f4;
  color: white;
}

.facebook-login {
  background-color: #3b5998;
  color: white;
}

.apple-login {
  background-color: black;
  color: white;
}

.or-divider {
  text-align: center;
  margin: 16px 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
}

.form-group input {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.forgot-password {
  float: right;
  margin-top: 4px;
}

.register-section,
.two-factor-section {
  text-align: center;
  margin-top: 16px;
}
```

## login.component.html

```
<div class="login-container">
  <div class="login-header">
    <h1>Welcome Back!</h1>
    <p>Sign in to continue.</p>
  </div>
  <div class="social-logins">
    <button class="google-login">Sign in with Google</button>
    <button class="facebook-login">Sign in with Facebook</button>
    <button class="apple-login">Sign in with Apple</button>
    <button class="github-login">Sign in with GitHub</button>
    <button class="discord-login">Sign in with Discord</button>
  </div>
  <div class="or-divider">
    <span>OR</span>
  </div>
  <form (submit)="onLogin()">
    <div class="form-group">
      <label for="username">Username or Email</label>
      <input
        type="text"
        id="username"
        [(ngModel)]="username"
        name="username"
        required
      />
      <div class="input-icon username-icon"></div>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        [(ngModel)]="password"
        name="password"
        required
      />
      <div class="input-icon password-icon"></div>
      <a href="#" class="forgot-password">Forgot Password?</a>
    </div>
    <div class="form-group">
      <input type="checkbox" id="remember-me" name="rememberMe" />
      <label for="remember-me">Remember Me</label>
    </div>
    <button type="submit" class="login-button">Login</button>
  </form>
  <div class="register-section">
    <p>Don't have an account? <a href="#">Sign Up</a></p>
  </div>
  <div class="two-factor-section">
    <p>Enable <a href="#">Two-Factor Authentication</a> for added security.</p>
  </div>
</div>
```

# register

## register.component.html

```
<div class="register-container">
  <div class="register-header">
    <h1>Create an Account</h1>
    <p>Sign up to get started.</p>
  </div>
  <!-- Registration Form -->
  <form (submit)="onRegister()">
    <div class="form-group">
      <label for="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        [(ngModel)]="fullName"
        name="fullName"
        required
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        [(ngModel)]="email"
        name="email"
        required
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        [(ngModel)]="password"
        name="password"
        required
      />
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        [(ngModel)]="confirmPassword"
        name="confirmPassword"
        required
      />
    </div>
    <button type="submit" class="register-button">Sign Up</button>
  </form>

  <!-- Social Registration Options -->
  <div class="social-registration">
    <p>Or sign up with:</p>
    <button (click)="registerWithGoogle()" class="google-register">
      Sign up with Google
    </button>
    <button (click)="registerWithFacebook()" class="facebook-register">
      Sign up with Facebook
    </button>
    <button (click)="registerWithApple()" class="apple-register">
      Sign up with Apple
    </button>
    <button (click)="registerWithGitHub()" class="github-register">
      Sign up with GitHub
    </button>
    <button (click)="registerWithDiscord()" class="discord-register">
      Sign up with Discord
    </button>
  </div>

  <div class="login-section">
    <p>Already have an account? <a href="#">Sign In</a></p>
  </div>
</div>
```

## register.component.ts

```
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
```

## register.component.css

```
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.register-header h1,
.register-header p {
  margin: 0;
  padding: 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
}

.form-group input {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.social-registration {
  text-align: center;
  margin-top: 16px;
}

.social-registration p {
  margin-bottom: 8px;
}

.google-register,
.facebook-register,
.apple-register,
.github-register,
.discord-register {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  color: #333;
  transition: background-color 0.2s ease;
}

.google-register {
  background-color: #4285f4;
  color: white;
}

.facebook-register {
  background-color: #3b5998;
  color: white;
}

.apple-register {
  background-color: black;
  color: white;
}

.github-register {
  /* Style for GitHub register button */
}

.discord-register {
  /* Style for Discord register button */
}

.login-section {
  text-align: center;
  margin-top: 16px;
}

.login-section a {
  text-decoration: none;
  color: #007bff;
}

.login-section a:hover {
  text-decoration: underline;
}
```

# login

## login.component.ts

```
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
```

## login.component.css

```
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-header h1,
.login-header p {
  margin: 0;
  padding: 0;
}

.social-logins button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.google-login {
  background-color: #4285f4;
  color: white;
}

.facebook-login {
  background-color: #3b5998;
  color: white;
}

.apple-login {
  background-color: black;
  color: white;
}

.or-divider {
  text-align: center;
  margin: 16px 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
}

.form-group input {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.forgot-password {
  float: right;
  margin-top: 4px;
}

.register-section,
.two-factor-section {
  text-align: center;
  margin-top: 16px;
}
```

## login.component.html

```
<div class="login-container">
  <div class="login-header">
    <h1>Welcome Back!</h1>
    <p>Sign in to continue.</p>
  </div>
  <div class="social-logins">
    <button class="google-login">Sign in with Google</button>
    <button class="facebook-login">Sign in with Facebook</button>
    <button class="apple-login">Sign in with Apple</button>
    <button class="github-login">Sign in with GitHub</button>
    <button class="discord-login">Sign in with Discord</button>
  </div>
  <div class="or-divider">
    <span>OR</span>
  </div>
  <form (submit)="onLogin()">
    <div class="form-group">
      <label for="username">Username or Email</label>
      <input
        type="text"
        id="username"
        [(ngModel)]="username"
        name="username"
        required
      />
      <div class="input-icon username-icon"></div>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        [(ngModel)]="password"
        name="password"
        required
      />
      <div class="input-icon password-icon"></div>
      <a href="#" class="forgot-password">Forgot Password?</a>
    </div>
    <div class="form-group">
      <input type="checkbox" id="remember-me" name="rememberMe" />
      <label for="remember-me">Remember Me</label>
    </div>
    <button type="submit" class="login-button">Login</button>
  </form>
  <div class="register-section">
    <p>Don't have an account? <a href="#">Sign Up</a></p>
  </div>
  <div class="two-factor-section">
    <p>Enable <a href="#">Two-Factor Authentication</a> for added security.</p>
  </div>
</div>
```

# HomePageComponents

# ctas

## ctas.component.html

```
<p>ctas works!</p>
```

## ctas.component.css

```

```

## ctas.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-ctas',
  templateUrl: './ctas.component.html',
  styleUrls: ['./ctas.component.css']
})
export class CTAsComponent {

}
```

# how-it-works

## how-it-works.component.html

```
<p>how-it-works works!</p>
```

## how-it-works.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {

}
```

## how-it-works.component.css

```

```

# dashboard

## dashboard.component.css

```

```

## dashboard.component.html

```
<p>dashboard works!</p>
```

## dashboard.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
```

# featured-listings

## featured-listings.component.css

###

```
/* Container */
.featured-listings {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

/* Header */
.featured-listings h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Listing Cards */
.listing {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.listing-header,
.listing-body,
.listing-footer {
  margin-bottom: 1rem;
}

/* Icons */
.fas {
  margin-right: 0.5rem;
}

/* Pagination */
.mat-paginator {
  margin-top: 1rem;
}

/* Sorting */
.sort-container {
  display: flex;
  justify-content: flex-end;
}

/* Responsive */
@media (max-width: 768px) {
  .listing {
    flex-direction: column;
  }
}
```

## featured-listings.component.html

```
<!-- Featured Listings Section -->
<mat-card class="featured-listings">
  <!-- Section Header -->
  <mat-card-header class="featured-listings-header">
    <mat-card-title>🌟 Featured Listings</mat-card-title>
    <mat-card-subtitle>
      <mat-form-field appearance="fill">
        <mat-label>Sort By</mat-label>
        <mat-select id="sort-by">
          <mat-option value="latest">Latest</mat-option>
          <mat-option value="popular">Most Popular</mat-option>
          <mat-option value="high-to-low">Price: High to Low</mat-option>
          <mat-option value="low-to-high">Price: Low to High</mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-raised-button color="primary">
        <mat-icon>filter_list</mat-icon> Filter
      </button>
    </mat-card-subtitle>
  </mat-card-header>

  <!-- Listings Grid -->
  <mat-grid-list cols="3" rowHeight="350px">
    <mat-grid-tile *ngFor="let listing of featuredListings">
      <!-- Single Listing Card -->
      <mat-card class="listing-card">
        <!-- Card Header -->
        <mat-card-header>
          <div class="seller-info">
            <img
              mat-card-avatar
              [src]="listing.seller.avatar"
              alt="Seller Avatar"
            />
            <mat-card-title>{{ listing.seller.name }}</mat-card-title>
          </div>
          <mat-card-subtitle>
            <button mat-icon-button>
              <mat-icon>bookmark_border</mat-icon>
            </button>
            <button mat-icon-button><mat-icon>share</mat-icon></button>
          </mat-card-subtitle>
        </mat-card-header>

        <!-- Image Carousel -->
        <!-- Implement your carousel component here -->

        <!-- Listing Info -->
        <mat-card-content>
          <h2>{{ listing.title }}</h2>
          <p>{{ listing.description }}</p>
          <div class="listing-details">
            <span><mat-icon>attach_money</mat-icon> {{ listing.price }}</span>
            <span><mat-icon>location_on</mat-icon> {{ listing.location }}</span>
            <span><mat-icon>label</mat-icon> {{ listing.category }}</span>
          </div>
        </mat-card-content>

        <!-- User Interactions -->
        <mat-card-actions>
          <button mat-button>
            <mat-icon>add_shopping_cart</mat-icon> Add to Cart
          </button>
          <button mat-button><mat-icon>payment</mat-icon> Buy Now</button>
          <button mat-button><mat-icon>forum</mat-icon> Make an Offer</button>
        </mat-card-actions>

        <!-- Social Proof -->
        <mat-card-footer>
          <div class="ratings">
            <!-- Implement your ratings component here -->
          </div>
          <div class="reviews">
            <!-- Implement your reviews component here -->
          </div>
        </mat-card-footer>
      </mat-card>
      <!-- End of Single Listing Card -->
    </mat-grid-tile>
  </mat-grid-list>

  <!-- Pagination -->
  <mat-paginator
    [length]="100"
    [pageSize]="10"
    [pageSizeOptions]="[5, 10, 25, 100]"
  ></mat-paginator>
</mat-card>
<!-- End of Featured Listings Section -->
```

## featured-listings.component.ts

```
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.scss'],
})
export class FeaturedListingsComponent implements OnInit {
  // Sample data structure for listings
  featuredListings = [
    {
      id: 1,
      title: 'Sample Listing 1',
      description: 'This is a description',
      price: 100,
      location: 'New York',
      category: 'Electronics',
      seller: {
        name: 'John Doe',
        avatar: 'path/to/avatar.jpg',
      },
    },
    // Add more sample listings
  ];

  // For Pagination
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // For Sorting
  sortOptions = ['latest', 'popular', 'high-to-low', 'low-to-high'];
  selectedSort = 'latest';

  constructor() {}

  ngOnInit(): void {
    // Fetch the listings from API here
  }

  // Function to handle sorting
  onSortChange(event: any): void {
    this.selectedSort = event.value;
    // Implement your sorting logic here
  }

  // Function to handle pagination
  onPageChange(event: any): void {
    // Implement your pagination logic here
  }

  // Function to handle user interactions like 'Add to Cart', 'Buy Now', etc.
  onAction(action: string, listingId: number): void {
    // Implement your action logic here
  }
}
```

# hero-section

## hero-section.component.css

```

```

## hero-section.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {

}
```

## hero-section.component.html

```
<p>hero-section works!</p>
```

# ctas

## ctas.component.html

```
<p>ctas works!</p>
```

## ctas.component.css

```

```

## ctas.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-ctas',
  templateUrl: './ctas.component.html',
  styleUrls: ['./ctas.component.css']
})
export class CTAsComponent {

}
```

# how-it-works

## how-it-works.component.html

```
<p>how-it-works works!</p>
```

## how-it-works.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {

}
```

## how-it-works.component.css

```

```

# dashboard

## dashboard.component.css

```

```

## dashboard.component.html

```
<p>dashboard works!</p>
```

## dashboard.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
```

# featured-listings

## featured-listings.component.css

```
/* Container */
.featured-listings {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

/* Header */
.featured-listings h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Listing Cards */
.listing {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.listing-header,
.listing-body,
.listing-footer {
  margin-bottom: 1rem;
}

/* Icons */
.fas {
  margin-right: 0.5rem;
}

/* Pagination */
.mat-paginator {
  margin-top: 1rem;
}

/* Sorting */
.sort-container {
  display: flex;
  justify-content: flex-end;
}

/* Responsive */
@media (max-width: 768px) {
  .listing {
    flex-direction: column;
  }
}
```

## featured-listings.component.html

```
<!-- Featured Listings Section -->
<mat-card class="featured-listings">
  <!-- Section Header -->
  <mat-card-header class="featured-listings-header">
    <mat-card-title>🌟 Featured Listings</mat-card-title>
    <mat-card-subtitle>
      <mat-form-field appearance="fill">
        <mat-label>Sort By</mat-label>
        <mat-select id="sort-by">
          <mat-option value="latest">Latest</mat-option>
          <mat-option value="popular">Most Popular</mat-option>
          <mat-option value="high-to-low">Price: High to Low</mat-option>
          <mat-option value="low-to-high">Price: Low to High</mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-raised-button color="primary">
        <mat-icon>filter_list</mat-icon> Filter
      </button>
    </mat-card-subtitle>
  </mat-card-header>

  <!-- Listings Grid -->
  <mat-grid-list cols="3" rowHeight="350px">
    <mat-grid-tile *ngFor="let listing of featuredListings">
      <!-- Single Listing Card -->
      <mat-card class="listing-card">
        <!-- Card Header -->
        <mat-card-header>
          <div class="seller-info">
            <img
              mat-card-avatar
              [src]="listing.seller.avatar"
              alt="Seller Avatar"
            />
            <mat-card-title>{{ listing.seller.name }}</mat-card-title>
          </div>
          <mat-card-subtitle>
            <button mat-icon-button>
              <mat-icon>bookmark_border</mat-icon>
            </button>
            <button mat-icon-button><mat-icon>share</mat-icon></button>
          </mat-card-subtitle>
        </mat-card-header>

        <!-- Image Carousel -->
        <!-- Implement your carousel component here -->

        <!-- Listing Info -->
        <mat-card-content>
          <h2>{{ listing.title }}</h2>
          <p>{{ listing.description }}</p>
          <div class="listing-details">
            <span><mat-icon>attach_money</mat-icon> {{ listing.price }}</span>
            <span><mat-icon>location_on</mat-icon> {{ listing.location }}</span>
            <span><mat-icon>label</mat-icon> {{ listing.category }}</span>
          </div>
        </mat-card-content>

        <!-- User Interactions -->
        <mat-card-actions>
          <button mat-button>
            <mat-icon>add_shopping_cart</mat-icon> Add to Cart
          </button>
          <button mat-button><mat-icon>payment</mat-icon> Buy Now</button>
          <button mat-button><mat-icon>forum</mat-icon> Make an Offer</button>
        </mat-card-actions>

        <!-- Social Proof -->
        <mat-card-footer>
          <div class="ratings">
            <!-- Implement your ratings component here -->
          </div>
          <div class="reviews">
            <!-- Implement your reviews component here -->
          </div>
        </mat-card-footer>
      </mat-card>
      <!-- End of Single Listing Card -->
    </mat-grid-tile>
  </mat-grid-list>

  <!-- Pagination -->
  <mat-paginator
    [length]="100"
    [pageSize]="10"
    [pageSizeOptions]="[5, 10, 25, 100]"
  ></mat-paginator>
</mat-card>
<!-- End of Featured Listings Section -->
```

## featured-listings.component.ts

```
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.scss'],
})
export class FeaturedListingsComponent implements OnInit {
  // Sample data structure for listings
  featuredListings = [
    {
      id: 1,
      title: 'Sample Listing 1',
      description: 'This is a description',
      price: 100,
      location: 'New York',
      category: 'Electronics',
      seller: {
        name: 'John Doe',
        avatar: 'path/to/avatar.jpg',
      },
    },
    // Add more sample listings
  ];

  // For Pagination
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // For Sorting
  sortOptions = ['latest', 'popular', 'high-to-low', 'low-to-high'];
  selectedSort = 'latest';

  constructor() {}

  ngOnInit(): void {
    // Fetch the listings from API here
  }

  // Function to handle sorting
  onSortChange(event: any): void {
    this.selectedSort = event.value;
    // Implement your sorting logic here
  }

  // Function to handle pagination
  onPageChange(event: any): void {
    // Implement your pagination logic here
  }

  // Function to handle user interactions like 'Add to Cart', 'Buy Now', etc.
  onAction(action: string, listingId: number): void {
    // Implement your action logic here
  }
}
```

# hero-section

## hero-section.component.css

```

```

## hero-section.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {

}
```

## hero-section.component.html

```
<p>hero-section works!</p>
```

# service

## service.module.ts

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    ListingComponent,
    BookingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
```

# booking

## booking.component.html

```
<p>booking works!</p>
```

## booking.component.css

```

```

## booking.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

}
```

# listing

## listing.component.html

```
<p>listing works!</p>
```

## listing.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

}
```

## listing.component.css

```

```

# booking

## booking.component.html

```
<p>booking works!</p>
```

## booking.component.css

```

```

## booking.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

}
```

# listing

## listing.component.html

```
<p>listing works!</p>
```

## listing.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

}
```

## listing.component.css

```

```
