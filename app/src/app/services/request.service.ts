import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entity } from '../entities/entity';

@Injectable()
export class RequestService
{
  constructor(
    private http: HttpClient
  )
  {}

  public get(endpoint: string): Observable<any>
  {
    const url = `${ environment.API_URL }/${ endpoint }`;
    const headers = this.headers();

    return this.http.get<any>(url, { headers }).pipe(
      tap(
        (success: any) => {
          console.log(success);
        }
      ),
      tap(
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  public post(endpoint: string, data: Entity): Observable<any>
  {
    const url = `${ environment.API_URL }/${ endpoint }`;
    const headers = this.headers();

    return this.http.post<any>(url, data, { headers }).pipe(
      tap(
        (success: any) => {
          console.log(success);
        }
      ),
      tap(
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  public put(endpoint: string, data: Entity): Observable<any>
  {
    const url = `${ environment.API_URL }/${ endpoint }/${ data.id }`;
    const headers = this.headers();

    return this.http.post<any>(url, data, { headers }).pipe(
      tap(
        (success: any) => {
          console.log(success);
        }
      ),
      tap(
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  public delete(endpoint: string, data: Entity): Observable<any>
  {
    const url = `${ environment.API_URL }/${ endpoint }`;
    const headers = this.headers();

    return this.http.post<any>(url, { headers }).pipe(
      tap(
        (success: any) => {
          console.log(success);
        }
      ),
      tap(
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  private headers(): HttpHeaders
  {
    return new HttpHeaders()
      .set('Content-Type', 'application/json; application/x-www-form-urlencoded;')
      .set('Accept', 'application/json');
  }
}
