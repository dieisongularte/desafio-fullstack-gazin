import { NotificationService } from './../../../services/notification.service';
import { Nivel } from './../../../entities/nivel';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NivelService } from 'src/app/services/nivel.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    private notificationService: NotificationService,
    private router: Router
  )
  {
    this.buildForm();
    this.setFormValues();
  }

  async save(nivel: Nivel): Promise<void>
  {
    const result = await this.nivelService.save(nivel);

    if (result instanceof HttpErrorResponse)
      return;

    await this.notificationService.success('Registro gravado com sucesso.');

    this.redirectToNivelList();
  }

  redirectToNivelList(): void
  {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
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

    if (nivel instanceof HttpErrorResponse) {
      this.redirectToNivelList();
      return;
    }

    this.form.patchValue({
      id: nivel.id,
      nivel: nivel.nivel
    });
  }
}
