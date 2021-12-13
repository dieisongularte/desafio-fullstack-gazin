import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entity } from '../entities/entity';
import { LoadingService } from './loading.service';
import { NotificationService } from './notification.service';

@Injectable()
export class RequestService
{
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private notificationService: NotificationService
  )
  {}

  get<T>(endpoint: string): Observable<T>
  {
    const url = `${ environment.API_URL }/${ endpoint }`;
    const headers = this.headers();

    this.loadingService.setShowLoading(true);

    return this.http
      .get<T>(url, { headers })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return of(error);
        }),
        tap((success: T) => { this.loadingService.setShowLoading(false); })
      );
  }

  post<T>(endpoint: string, data: Entity): Observable<T>
  {
    const url = `${ environment.API_URL }/${ endpoint }`;
    const headers = this.headers();

    this.loadingService.setShowLoading(true);

    return this.http
      .post<T>(url, data, { headers })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return of(error);
        }),
        tap((success: T) => { this.loadingService.setShowLoading(false); })
      );
  }

  put<T>(endpoint: string, data: Entity): Observable<T>
  {
    const url = `${ environment.API_URL }/${ endpoint }/${ data.id }`;
    const headers = this.headers();

    this.loadingService.setShowLoading(true);

    return this.http
      .put<T>(url, data, { headers })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return of(error);
        }),
        tap((success: T) => { this.loadingService.setShowLoading(false); })
      );
  }

  delete<T>(endpoint: string): Observable<T>
  {
    const url = `${ environment.API_URL }/${ endpoint }`;
    const headers = this.headers();

    this.loadingService.setShowLoading(true);

    return this.http
      .delete<T>(url, { headers })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return of(error);
        }),
        tap((success: T) => { this.loadingService.setShowLoading(false); })
      );
  }

  private headers(): HttpHeaders
  {
    return new HttpHeaders()
      .set('Content-Type', 'application/json; application/x-www-form-urlencoded;')
      .set('Accept', 'application/json');
  }

  private handleError(error: any): void
  {
    this.loadingService.setShowLoading(false);

    switch (error.status) {
      case 404:
        this.notificationService.error(error.error.error);
        break;
      case 422:
        this.notificationService.error(error.error.message);
        break;
    }
  }
}
