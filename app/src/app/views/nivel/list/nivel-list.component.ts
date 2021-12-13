import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from './../../../entities/nivel';
import { Component } from '@angular/core';
import { NivelService } from 'src/app/services/nivel.service';
import { TableColumn } from 'src/app/components/list/table-column';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-nivel-list',
  templateUrl: './nivel-list.component.html',
  styleUrls: ['./nivel-list.component.scss']
})
export class NivelListComponent
{
  niveis: Array<Nivel> = [];
  columns: Array<TableColumn> = [];
  multiSortMeta: Array<any> = [];

  constructor(
    private nivelService: NivelService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router
  )
  {
    this.loadTableColumns();
    this.loadNiveis();
  }

  redirectToNivelForm(nivelId: number | string): void
  {
    this.router.navigate([nivelId], { relativeTo: this.activatedRoute });
  }

  async deleteNivel(nivelId: number): Promise<void>
  {
    const doesUserAgreed = await this.requestUserAgreement();

    if (!doesUserAgreed)
      return;

    const result = await this.nivelService.delete(String(nivelId));

    if (result instanceof HttpErrorResponse)
      return;

    await this.notificationService.success('Excluído com sucesso.');

    this.loadNiveis();
  }

  private loadTableColumns(): void
  {
    this.columns = [
      { header: 'Nível', nestedProperty: 'nivel' }
    ];
  }

  private async loadNiveis(): Promise<void>
  {
    this.niveis = await this.nivelService.readAll();
  }

  private async requestUserAgreement(): Promise<boolean>
  {
    const { isConfirmed } = await this.notificationService.question(
      'Deseja realmente, excluir este nível?',
      'Excluir Nível',
      'Sim',
      'Não'
    );

    return isConfirmed;
  }
}
