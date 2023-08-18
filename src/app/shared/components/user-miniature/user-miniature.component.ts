import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-user-miniature',
  templateUrl: './user-miniature.component.html',
  styleUrls: ['./user-miniature.component.css']
})
export class UserMiniatureComponent implements OnInit{
  @Input() userName: string = '';
  userNameCharacters: string = '';

  ngOnInit(): void {
    this.userNameCharacters = this.userName.split(' ').reduce(
      (a, c) => a + c[0], ''
    )
  }
}