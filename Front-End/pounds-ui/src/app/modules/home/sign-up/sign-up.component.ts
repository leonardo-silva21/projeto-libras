import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, catchError, throwError } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/models/user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  message!: string;
  newUserSubscription = new Subscription();

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit(): void {
    this.setupForm();
  }

  ngOnDestroy(): void {
    this.newUserSubscription.unsubscribe();
  }

  setupForm(){
    this.userForm = this.fb.group({
      nomeCompleto: ['', [Validators.required]],
      email: ['',[ Validators.required, Validators.email]],
      senha: ['',[ Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, Validators.maxLength(12)]]
    })
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.service.addUser(user).subscribe(
        (createdUser: User) => {
          this.userForm.reset();
          this.message = 'Usuário criado com sucesso!';
          setTimeout(() => {
            this.message = '';
          }, 5000);
        },
        (error: any) => {
          console.error(error);
          this.message = 'Ocorreu um erro ao criar o usuário.';
        }
      );
    }
  }

}
