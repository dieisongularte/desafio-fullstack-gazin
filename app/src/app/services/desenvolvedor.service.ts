import { environment } from 'src/environments/environment';
import { Desenvolvedor } from './../entities/desenvolvedor';
import { RequestService } from './request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DesenvolvedorService
{
  constructor(
    private requestService: RequestService
  )
  {}

  read(id: string): Promise<Desenvolvedor>
  {
    return new Promise((resolve) => {
      const endpoint = environment.DESENVOLVEDOR_ENDPOINT;

      this.requestService
        .get<Desenvolvedor>(`${ endpoint }/${ id }`)
        .subscribe((success: Desenvolvedor) => { resolve(success); });
    });
  }

  readAll(): Promise<Desenvolvedor[]>
  {
    return new Promise((resolve) => {
      const endpoint = environment.DESENVOLVEDOR_ENDPOINT;

      this.requestService
        .get<Desenvolvedor[]>(endpoint)
        .subscribe((success: Desenvolvedor[]) => { resolve(success); });
    });
  }

  async save(nivel: Desenvolvedor): Promise<Desenvolvedor>
  {
    return new Promise(async (resolve) => {
      const wasSaved = (nivel.id === null) ? await this.create(nivel) : await this.update(nivel);

      resolve(wasSaved);
    });
  }

  private create(nivel: Desenvolvedor): Promise<Desenvolvedor>
  {
    return new Promise((resolve) => {
      const endpoint = environment.DESENVOLVEDOR_ENDPOINT;

      this.requestService
        .post<Desenvolvedor>(`${ endpoint }`, nivel)
        .subscribe((success: Desenvolvedor) => { resolve(success); });
    });
  }

  private update(nivel: Desenvolvedor): Promise<Desenvolvedor>
  {
    return new Promise((resolve) => {
      const endpoint = environment.DESENVOLVEDOR_ENDPOINT;

      this.requestService
        .put<Desenvolvedor>(`${ endpoint }`, nivel)
        .subscribe((success: Desenvolvedor) => { resolve(success); });
    });
  }
}
