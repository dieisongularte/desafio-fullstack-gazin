import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService
{
  private showLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  getShowLoading(): BehaviorSubject<boolean>
  {
    return this.showLoading;
  }

  setShowLoading(data: boolean)
  {
    this.showLoading.next(data);
  }
}
