import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { SideBarService } from './services/side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  get showLoadingComponent(): boolean
  {
    return this.loadingService?.getLoading()?.value || false;
  }

  constructor(
    private loadingService: LoadingService,
    private sideBarService: SideBarService
  )
  {}

  hideSideBar(): void
  {
    this.sideBarService.setShowSidebar(false);
  }
}
