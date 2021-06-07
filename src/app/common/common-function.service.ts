import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonFunction {
  public logTag = 'Common Function';

  async encode(encodeData) {
    try {
      return btoa(encodeData);
    } catch (error) {
      console.log(`Error | ${this.logTag} | encodeData | ${error}`);
    }
  }

  async decode(decodeData) {
    try {
      return atob(decodeData);
    } catch (error) {
      console.log(`Error | ${this.logTag} | decodeData | ${error}`);
    }
  }
}
