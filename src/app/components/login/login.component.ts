// angular
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// projeto
import { LoginService } from 'src/app/core/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLoginBuild();
  }

  formLoginBuild(): void {
    this.formLogin = this.formBuilder.group({
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    const login = this.loginService.login(this.formLogin.value);
    if (login) {
      alert('Acesso com Sucesso');
      this.router.navigateByUrl('home');
    } else {
      alert('Acesso Negado');
    }
  }

  resetar(): void {
    this.formLogin.reset();
  }
}
