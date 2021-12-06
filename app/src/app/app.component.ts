import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { SideBarService } from './services/side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  showLoadingComponent: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private sideBarService: SideBarService
  )
  {}

  ngOnInit(): void
  {
    this.loadingService.getShowLoading().subscribe(
      (showLoading: boolean) => {
        this.showLoadingComponent = showLoading;
      }
    );
  }

  hideSideBar(): void
  {
    this.sideBarService.setShowSidebar(false);
  }
}
