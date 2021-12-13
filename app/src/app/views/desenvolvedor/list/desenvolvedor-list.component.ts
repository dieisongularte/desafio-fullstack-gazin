import { ActivatedRoute, Router } from '@angular/router';
import { DesenvolvedorService } from './../../../services/desenvolvedor.service';
import { Desenvolvedor } from 'src/app/entities/desenvolvedor';
import { Component } from '@angular/core';
import { TableColumn } from 'src/app/components/list/table-column';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-desenvolvedor-list',
  templateUrl: './desenvolvedor-list.component.html',
  styleUrls: ['./desenvolvedor-list.component.scss']
})
export class DesenvolvedorListComponent
{
  desenvolvedores: Array<Desenvolvedor> = [];
  columns: Array<TableColumn> = [];
  multiSortMeta: Array<any> = [];

  constructor(
    private desenvolvedorService: DesenvolvedorService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router
  )
  {
    this.loadTableColumns();
    this.loadDesenvolvedores();
  }

  async deleteDesenvolvedor(desenvolvedorId: number): Promise<void>
  {
    const doesUserAgreed = await this.requestUserAgreement();

    if (!doesUserAgreed)
      return;

    const result = await this.desenvolvedorService.delete(String(desenvolvedorId));

    if (result instanceof HttpErrorResponse)
      return;

    await this.notificationService.success('Excluído com sucesso.');

    this.loadDesenvolvedores();
  }

  redirectToDesenvolvedorForm(desenvolvedorId: number | string): void
  {
    this.router.navigate([desenvolvedorId], { relativeTo: this.activatedRoute });
  }

  private loadTableColumns(): void
  {
    this.columns = [
      { header: 'Nome', nestedProperty: 'nome' },
      { header: 'Nível', nestedProperty: 'nivel_id' },
      { header: 'Data Nascimento', nestedProperty: 'datanascimento' },
      { header: 'Idade', nestedProperty: 'idade' },
      { header: 'Sexo', nestedProperty: 'sexo' },
      { header: 'Hobby', nestedProperty: 'hobby' }
    ];
  }

  private async loadDesenvolvedores(): Promise<void>
  {
    this.desenvolvedores = await this.desenvolvedorService.readAll();
  }

  private async requestUserAgreement(): Promise<boolean>
  {
    const { isConfirmed } = await this.notificationService.question(
      'Deseja realmente, excluir este desenvolvedor?',
      'Excluir Desenvolvedor',
      'Sim',
      'Não'
    );

    return isConfirmed;
  }
}
