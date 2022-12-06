import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  languages = [
    { code: 'EN', name: 'Engilish' },
    { code: 'FR', name: 'French' },
    { code: 'PT', name: 'Portuguese' },
  ]

  constructor(public http: HttpClient) {
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${path}`);
  }
}
