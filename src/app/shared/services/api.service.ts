import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  public apiUrl = environment.apiUrl;
  logTag = 'Api Services';
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  async postCall(baseUrl, postData) {
    try {
      const url = `${this.apiUrl}/${baseUrl}`;
      return this.httpClient
        .post(url, postData)
        .toPromise()
        .catch((error: HttpErrorResponse) => {
          this.toastr.error(`${error}`,'Error')
          console.log(`Error | ${this.logTag} | postCall | ${error}`);
        });
    } catch (error) {
      console.log(`Error | ${this.logTag} | postCall | ${error}`);
    }
  }

  async getCall(baseUrl) {
    try {
      const url = `${this.apiUrl}/${baseUrl}`;
      return this.httpClient
        .get(url)
        .toPromise()
        .catch((error: HttpErrorResponse) => {
          console.log(`Error | ${this.logTag} | getCall | ${error}`);
        });
    } catch (error) {
      console.log(`Error | ${this.logTag} | getCall | ${error}`);
    }
  }
}
