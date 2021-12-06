import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService
{
  constructor(
    private loading: BehaviorSubject<string> = new BehaviorSubject<string>('')
  )
  {}
  
  getLoading(): BehaviorSubject<string>
  {
    return this.loading;
  }

  setLoading(data: string)
  {
    this.loading.next(data);
  }
}
