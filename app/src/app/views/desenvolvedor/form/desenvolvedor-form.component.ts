import { Nivel } from './../../../entities/nivel';
import { NotificationService } from './../../../services/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { DesenvolvedorService } from 'src/app/services/desenvolvedor.service';
import { Sexo } from 'src/app/enums/sexo.enum';
import { NivelService } from 'src/app/services/nivel.service';
import { Desenvolvedor } from 'src/app/entities/desenvolvedor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-desenvolvedor-form',
  templateUrl: './desenvolvedor-form.component.html',
  styleUrls: ['./desenvolvedor-form.component.scss']
})
export class DesenvolvedorFormComponent
{
  form!: FormGroup;
  today = new Date();
  sexoList: Array<{sign: string, description: string}> = [];
  nivelList: Array<Nivel> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private desenvolvedorService: DesenvolvedorService,
    private formBuilder: FormBuilder,
    private nivelService: NivelService,
    private notificationService: NotificationService,
    private router: Router
  )
  {
    this.buildForm();
    this.loadSexoList();
    this.loadNivelList();
    this.setFormValues();
  }

  async save(desenvolvedor: Desenvolvedor): Promise<void>
  {
    const result = this.desenvolvedorService.save(desenvolvedor);

    if (result instanceof HttpErrorResponse)
      return;

    await this.notificationService.success('Registro gravado com sucesso.');

    this.redirectToDesenvolvedorList();
  }

  redirectToDesenvolvedorList(): void
  {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  private buildForm(): void
  {
    this.form = this.formBuilder.group({
      id: [null],
      nivel_id: [null, [Validators.required]],
      nome: ['', [Validators.required]],
      datanascimento: [new Date(), [Validators.required]],
      idade: [null],
      sexo: [null, [Validators.required]],
      hobby: [null, [Validators.required]]
    });
  }

  private async setFormValues(): Promise<void>
  {
    const desenvolvedorId = this.activatedRoute.snapshot.paramMap.get('desenvolvedorId');

    if (desenvolvedorId === null || desenvolvedorId === 'new')
      return;

    const desenvolvedor = await this.desenvolvedorService.read(desenvolvedorId);

    if (desenvolvedor instanceof HttpErrorResponse) {
      this.redirectToDesenvolvedorList();
      return;
    }

    this.form.patchValue({
      id: desenvolvedor.id,
      nivel_id: desenvolvedor.nivel_id,
      nome: desenvolvedor.nome,
      datanascimento: new Date(desenvolvedor.datanascimento),
      idade: desenvolvedor.idade,
      sexo: desenvolvedor.sexo,
      hobby: desenvolvedor.hobby,
    });
  }

  private loadSexoList(): void
  {
    this.sexoList = [
      { sign: String(Sexo.Female), description: 'Feminino' },
      { sign: String(Sexo.Male), description: 'Masculino' },
      { sign: String(Sexo.Other), description: 'Outro' }
    ];
  }

  private async loadNivelList(): Promise<void>
  {
    this.nivelList = await this.nivelService.readAll();
  }
}
