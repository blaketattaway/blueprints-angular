import { Component, Input } from '@angular/core';
import { LoginInput } from '../../interfaces/loginInput';

@Component({
  selector: 'shared-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent {
  
  @Input() inputType: LoginInput | null = null;

}
