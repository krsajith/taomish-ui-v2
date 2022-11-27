import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  post(path: string, entity: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${path}`, entity);
  }

  postEvents(path: string, entity: any): Observable<any> {
    return this.http.post(`${path}`, entity, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });
  }

  get(path: string): Observable<any[]> {
    return this.http.get<any[]>(`${path}`);
  }

  getById(path: string, id: string): Observable<any> {
    return this.http.get<any>(`${path}/${id}`);
  }

  createUpload(path: string, entity: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${path}`, entity);
  }

  get httpClient() {
    return this.http;
  }
}
