import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/guards/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private authService: AuthService) {}

  // Propriedade para controlar a exibição da mensagem de erro
  loginInvalid: boolean = false;

  // FormGroup para o formulário de login com validadores
  loginFormGroup = new FormGroup({
    email: new FormControl('usertester@tester.com', [Validators.required, Validators.email]),
    password: new FormControl('123', [Validators.required])
  });

  // Função chamada quando o botão de login é clicado
  onClick(): void {
    // Verifica se o e-mail e a senha inseridos correspondem aos valores válidos
    const { email, password } = this.loginFormGroup.value;
    this.authService.login(email!, password!);

    // Atualiza a propriedade loginInvalid com base no estado de autenticação
    this.loginInvalid = !this.authService.Authenticated();
  }
}
