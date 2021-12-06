import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideBarService
{
  constructor(
    private sidebar: BehaviorSubject<string> = new BehaviorSubject<string>('')
  )
  {}

  getSidebarEvent(): BehaviorSubject<string>
  {
    return this.sidebar;
  }

  setSidebarEvent(data: string)
  {
    this.sidebar.next(data);
  }
}
