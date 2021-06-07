import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UrlService } from 'src/app/common/url.service';
import { ApiCallService } from 'src/app/shared/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { ProjectData } from './project';
import { PopupProjectComponent } from '../popup-project/popup-project.component';
import { ExcelService } from 'src/app/common/excel.service';
// import { MatFormFieldModule } from '@angular/material/form-field'
import * as moment from 'moment';


@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrls: ['./get-project.component.css'],
})
export class GetProjectComponent implements OnInit {
  displayedColumns: string[] = [
    'sr',
    'id',
    'amount',
    'currency',
    'date'
  ];
  dataSource: MatTableDataSource<ProjectData>;
  logTag = 'GET PROJECT COMPONENTS';
  public projectList: any;
  public projectListForExcel: any[] = [];
  public totalSize: number = 0;
  // public currentPage = 0;
  public pageSize = 10;
  // pageEvent: PageEvent;
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
    this.getProjectList(1, 10);
  }

  async getProjectList(pageNum, pageSize) {
    try {
      this.projectList = null;
      this.isLoadingResults = true;

        this.projectList = await this.getData();
        // this.projectList.push(...projectResp.data);
        this.dataSource = new MatTableDataSource(this.projectList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.totalSize = this.projectList.length;
        this.isLoadingResults = false;
        //this.convertDataForExcel();
      
    } catch (error) {
      console.log(`Error | ${this.logTag} | getProjectList | ${error}`);
      this.isLoadingResults = false;
    }
  }

  async nextPageList(pageNum, pageSize) {
    try {
      this.projectList = null;
      this.isLoadingResults = true;
      const projectResp: any = await this.api.getCall(
        `${this.url.project}?page=${pageNum}&size=${pageSize}`
      );
      if (projectResp && projectResp.success === true) {
        this.projectList = projectResp.data;
        this.totalSize = projectResp.total;
        this.dataSource = new MatTableDataSource(this.projectList);
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;
        this.convertDataForExcel();
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

  openDialog(projectData) {
    const dialogRef = this.dialog.open(PopupProjectComponent, {
      data: {
        data: projectData,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  async convertDataForExcel() {
    try {
      this.projectList.map((project, index) => {
        let activityData = {
          'Activity Title': project.activity.map((activity) => {
            // console.log(activity.title)
            return activity.title;
          }),
          'Activity Status': project.activity.map((activity) => {
            return activity.activityStatus;
          }),
          'Activity Date': project.activity.map((activity) => {
            return activity.activityDate;
          }),
        };

        let data = {
          'Sr No': index + 1,
          Id: project.projectId,
          Name: project.projectName,
          Status: project.status,
          'Create On':  moment(project.createdAt).format('DD-MM-yyyy HH:mm:ss'),
        };
   
       // console.log(data)
        this.projectListForExcel.push(data);
      });
    } catch (error) {
      console.log(`Error | ${this.logTag} | convertDataForExcel | ${error}`);
    }
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.projectListForExcel, 'project_list');
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
