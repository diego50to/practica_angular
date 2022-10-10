import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pfa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.loginForm.valid) {
      // this.submitEM.emit(this.loginForm.value);
      this.router.navigate(['/clients/list-client']);
    }
  }

  public error: string = 'Usuario o contraseña invalido';
}
