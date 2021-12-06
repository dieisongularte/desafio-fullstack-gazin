import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService
{
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  getLoading(): BehaviorSubject<boolean>
  {
    return this.loading;
  }

  setLoading(data: boolean)
  {
    this.loading.next(data);
  }
}
