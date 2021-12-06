import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit
{
  showSideBar: boolean = false;

  constructor(
    private sideBarService: SideBarService
  )
  {}

  ngOnInit()
  {
    this.sideBarService?.getShowSidebar().subscribe(
      (showSideBarFromService: boolean) => {
        this.showSideBar = showSideBarFromService;
      }
    );
  }

  hideSideBar(): void
  {
    this.sideBarService.setShowSidebar(false);
  }
}
