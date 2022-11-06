import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor(private http: HttpClient) { }

  

  getBookList(): Observable<any> {
    return this.http
      .post<any>(`` + `https://s3.amazonaws.com/api-fun/books.json`, '')
      .pipe(
      );
  }


}
