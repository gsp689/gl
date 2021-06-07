import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UrlService } from 'src/app/common/url.service';
import { ApiCallService } from 'src/app/shared/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { ProjectData } from './membership';
import { ExcelService } from 'src/app/common/excel.service';
import * as moment from 'moment';
import { PopupMembershipComponent } from '../popup-membership/popup-membership.component';

@Component({
  selector: 'app-get-membership',
  templateUrl: './get-membership.component.html',
  styleUrls: ['./get-membership.component.css'],
})
export class GetMembershipComponent implements OnInit {
  displayedColumns: string[] = [
    'sr',
    'id',
    'amount',
    'currency',
    'date'
  ];
  dataSource: MatTableDataSource<ProjectData>;
  logTag = 'GET MEMBERSHIP COMPONENTS';
  public memberShipList: any;
  public memberShipForExcel: any[] = [];
  public totalSize: number = 0;
  public pageSize = 10;
  public pageSizes = [10, 20, 30];
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private api: ApiCallService,
    private url: UrlService,
    public dialog: MatDialog,
    private excelService: ExcelService
  ) {}

  ngOnInit(): void {
    this.getMemberShipList(1, 10);
  }

  async getMemberShipList(pageNum, pageSize) {
    try {
      this.memberShipList = null;
      this.isLoadingResults = true;
      
        this.memberShipList = await this.getData();
        this.dataSource = new MatTableDataSource(this.memberShipList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.totalSize = this.memberShipList.length;
        this.isLoadingResults = false;
        //this.convertDataForExcel();
      
    } catch (error) {
      console.log(`Error | ${this.logTag} | getProjectList | ${error}`);
      this.isLoadingResults = false;
    }
  }

  async nextPageList(pageNum, pageSize) {
    try {
      this.memberShipList = null;
      this.isLoadingResults = true;
      const projectResp: any = await this.api.getCall(
        `${this.url.memberShip}?page=${pageNum}&size=${pageSize}`
      );
      if (projectResp && projectResp.success === true) {
        this.memberShipList = projectResp.data;
        this.totalSize = projectResp.total;
        this.dataSource = new MatTableDataSource(this.memberShipList);
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;
        //this.convertDataForExcel();
      }
    } catch (error) {
      console.log(`Error | ${this.logTag} | nextPageList | ${error}`);
      this.isLoadingResults = false;
    }
  }

  onChangePage(pe: PageEvent) {
    let pageLength = pe.pageIndex + 1;
    let pageSize = pe.pageSize;
    this.nextPageList(pageLength, pageSize);
  }

  openDialog(memberShipData) {
    const dialogRef = this.dialog.open(PopupMembershipComponent, {
      data: {
        data: memberShipData,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  async convertDataForExcel() {
    try {
      this.memberShipList.map((project, index) => {
        let data = {
          'Sr No': index + 1,
          Id: project.projectId,
          Name: project.projectName,
          Status: project.status,
          'Create On': moment(project.createdAt).format('DD-MM-yyyy HH:mm:ss'),
        };

        // console.log(data)
        this.memberShipForExcel.push(data);
      });
    } catch (error) {
      console.log(`Error | ${this.logTag} | convertDataForExcel | ${error}`);
    }
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(
      this.memberShipForExcel,
      'membership_list'
    );
  }

  async getData(){
    return  [{
        "id":1,
        "date":"2021-06-01",
        "currency":"USD",
        "amount":123.23
    },
    {
        "id":2,
        "date":"2021-06-01",
        "currency":"USD",
        "amount":123.23
    },
    {
        "id":3,
        "date":"2021-06-01",
        "currency":"USD",
        "amount":123.23
    },
    {
        "id":4,
        "date":"2021-06-01",
        "currency":"USD",
        "amount":123.23
    },
    {
        "id":5,
        "date":"2021-06-01",
        "currency":"USD",
        "amount":123.23
    },
    {
        "id":6,
        "date":"2021-06-01",
        "currency":"USD",
        "amount":123.23
    }
    ]
    }
}
