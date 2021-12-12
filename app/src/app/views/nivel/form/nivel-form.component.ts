import { NotificationService } from './../../../services/notification.service';
import { Nivel } from './../../../entities/nivel';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NivelService } from 'src/app/services/nivel.service';

@Component({
  selector: 'app-nivel-form',
  templateUrl: './nivel-form.component.html',
  styleUrls: ['./nivel-form.component.scss']
})
export class NivelFormComponent
{
  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private nivelService: NivelService,
    private notificationService: NotificationService
  )
  {
    this.buildForm();
    this.setFormValues();
  }

  async save(nivel: Nivel): Promise<void>
  {
    this.nivelService
      .save(nivel)
      .then((success: Nivel) => {
        this.notificationService.success('Registro salvo.', 'Sucesso');
      });
  }

  private buildForm(): void
  {
    this.form = this.formBuilder.group({
      id: [null],
      nivel: ['', [Validators.required]]
    });
  }

  private async setFormValues(): Promise<void>
  {
    const nivelId = this.activatedRoute.snapshot.paramMap.get('nivelId');

    if (nivelId === null || nivelId === 'new')
      return;

    const nivel = await this.nivelService.read(nivelId);

    this.form.patchValue({
      id: nivel.id,
      nivel: nivel.nivel
    });
  }
}
