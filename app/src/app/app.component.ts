import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
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
    private sideBarService: SideBarService,
    private config: PrimeNGConfig,
    private translateService: TranslateService
  )
  {}

  ngOnInit(): void
  {
    this.loadLoadingComponentVisibility();
    this.configTranslation();
  }

  hideSideBar(): void
  {
    this.sideBarService.setShowSidebar(false);
  }

  private configTranslation(): void
  {
    this.translateService.setDefaultLang('en');
    this.translateService.use('pt_BR');
    this.translateService.get('primeng').subscribe(res => { this.config.setTranslation(res); });
  }

  private loadLoadingComponentVisibility(): void
  {
    this.loadingService.getShowLoading().subscribe(
      (showLoading: boolean) => {
        this.showLoadingComponent = showLoading;
      }
    );
  }
}
