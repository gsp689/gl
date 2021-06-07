import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-popup-project',
  templateUrl: './popup-project.component.html',
  styleUrls: ['./popup-project.component.css']
})
export class PopupProjectComponent implements OnInit {

  public projectData;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.projectData =  this.data.data;
  }

}
