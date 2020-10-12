import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UrlConfig } from '../config/urlconfig';

@Injectable()
export class CarAPIService {
  private headers = new Headers({
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {}

  getCarDetails(index: number, customHeaders?): Observable<any> {
    return this.http
      .get<any>(`${UrlConfig.getCarDetails}/${index}`, {
        headers: customHeaders || this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  getListOfByQuarter(
    year: number,
    quarter: number,
    customHeaders?
  ): Observable<any> {
    return this.http
      .get<any>(`${UrlConfig.listByQuarterApiUrl}/${year}/${quarter}`, {
        headers: customHeaders || this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
