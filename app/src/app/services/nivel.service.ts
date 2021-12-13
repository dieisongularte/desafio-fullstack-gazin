import { Nivel } from './../entities/nivel';
import { RequestService } from './request.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class NivelService
{
  constructor(
    private requestService: RequestService
  )
  {}

  delete(id: string): Promise<Nivel>
  {
    return new Promise((resolve) => {
      const endpoint = environment.NIVEL_ENDPOINT;

      this.requestService
        .delete<Nivel>(`${ endpoint }/${ id }`)
        .subscribe((success: Nivel) => { resolve(success); });
    });
  }

  read(id: string): Promise<Nivel>
  {
    return new Promise((resolve) => {
      const endpoint = environment.NIVEL_ENDPOINT;

      this.requestService
        .get<Nivel>(`${ endpoint }/${ id }`)
        .subscribe((success: Nivel) => { resolve(success); });
    });
  }

  readAll(): Promise<Nivel[]>
  {
    return new Promise((resolve) => {
      const endpoint = environment.NIVEL_ENDPOINT;

      this.requestService
        .get<Nivel[]>(endpoint)
        .subscribe((success: Nivel[]) => { resolve(success); });
    });
  }

  async save(nivel: Nivel): Promise<Nivel>
  {
    return new Promise(async (resolve) => {
      const result = (nivel.id === null) ? await this.create(nivel) : await this.update(nivel);

      resolve(result);
    });
  }

  private create(nivel: Nivel): Promise<Nivel>
  {
    return new Promise((resolve) => {
      const endpoint = environment.NIVEL_ENDPOINT;

      this.requestService
        .post<Nivel>(`${ endpoint }`, nivel)
        .subscribe((success: Nivel) => { resolve(success); });
    });
  }

  private update(nivel: Nivel): Promise<Nivel>
  {
    return new Promise((resolve) => {
      const endpoint = environment.NIVEL_ENDPOINT;

      this.requestService
        .put<Nivel>(`${ endpoint }`, nivel)
        .subscribe((success: Nivel) => { resolve(success); });
    });
  }
}
