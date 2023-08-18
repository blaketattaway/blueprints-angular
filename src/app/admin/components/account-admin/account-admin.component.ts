import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-account-admin',
  templateUrl: './account-admin.component.html',
  styleUrls: ['./account-admin.component.css']
})
export class AccountAdminComponent {
  public users: User[] = [
    {
      userId: 1,
      firstName: 'Diego',
      lastName: 'González',
      email:  'blaketattaway@gmail.com',
      isActive: true,
      roleId: 1
    }
  ]
}
