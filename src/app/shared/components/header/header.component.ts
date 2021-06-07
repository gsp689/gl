import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonFunction } from 'src/app/common/common-function.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private commonFunction: CommonFunction) {}
  user: any;

  async ngOnInit() {
    let user = await this.getUserData();
    this.user = JSON.parse(user)
  }

  async logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['./login']);
  }

  async getUserData() {
    return await this.commonFunction.decode(localStorage.getItem('userData'));
  }
}
