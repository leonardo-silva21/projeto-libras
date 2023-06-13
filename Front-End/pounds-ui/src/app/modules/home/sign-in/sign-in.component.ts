import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  errorLogin = ''

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  } 

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(
      (response: { isAuthenticated: boolean, userName: string }) => {
        if (response.isAuthenticated = true) {
          this.userService.setUserName(response.userName);
          this.router.navigate(['/users/tasks']);
          console.log(response);
        } else {
          console.log(response);
          this.errorLogin = 'Credenciais inválidas';
        }
      },
      (error) => {
        console.error(error);
        this.errorLogin = 'Ocorreu um erro durante o login';
      }
    );
  }

}
