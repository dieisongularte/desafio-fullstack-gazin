import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideBarService
{
  private showSidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getShowSidebar(): BehaviorSubject<boolean>
  {
    return this.showSidebar;
  }

  setShowSidebar(data: boolean)
  {
    this.showSidebar.next(data);
  }
}
