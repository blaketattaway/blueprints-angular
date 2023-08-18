import { Component } from '@angular/core';

@Component({
  selector: 'shared-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  public userName: string = 'First Last';
  public profileName: string = 'Profile';
}
