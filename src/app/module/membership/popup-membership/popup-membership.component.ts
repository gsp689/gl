import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-popup-membership',
  templateUrl: './popup-membership.component.html',
  styleUrls: ['./popup-membership.component.css']
})
export class PopupMembershipComponent implements OnInit {

  public membershipData;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.membershipData =  this.data.data;
  }

}
