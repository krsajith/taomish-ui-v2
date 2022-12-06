import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getHttpErrorMessage(error: HttpErrorResponse, screenName: string, newRecord: boolean = false) {
    let message = '';
    if(Object.keys(error.error).length > 0 && Object.keys(error.error).includes('status')) {
      message = error.error['status'];
    } else if(Object.keys(error.error).length > 0 && Object.keys(JSON.parse(error.error)).includes('status')) {
      message = JSON.parse(error.error)['status'];
    } else if (error.status === 400 && error.error !== undefined && error.error !== null) {
      if (error.error.toString().includes('org.hibernate.exception.ConstraintViolationException')) {
        message = 'Record already exists.';
      }
      if (error.error.toString().includes('Duplicate entry')) {
        message = error.error.toString().split('for')[0];
      } else {
        message = newRecord ? 'Failed to create new ' + screenName + '.' : 'Failed to update ' + screenName + '.';
      }
    } else {
      message = error.message;
    }
    return message;
  }

  public getJSONByURL(url: string) {
    // url = url.replace(' ', '%20');
    return this.http.get(url);
  }

  getEncodedURI(string: string) {
    return btoa(string);
  }

  getFromStorage(key:any): any {
    return localStorage.getItem(key);
  }
  setInStorage(key:any,value:any): any {
    return localStorage.setItem(key,value);
  }
  public post(url: string, object: any) {return this.http.post(url, object);
  }
}
