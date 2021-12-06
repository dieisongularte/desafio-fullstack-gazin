import { Component } from '@angular/core';
import { SideBarService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
  constructor(
    private sideBarService: SideBarService
  )
  {}

  showSideBar(): void
  {
    this.sideBarService.setShowSidebar(true);
  }
}
