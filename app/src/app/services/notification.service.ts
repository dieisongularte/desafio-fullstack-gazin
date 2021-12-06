import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable()
export class NotificationService
{
  public error(message: string, title: string = 'Erro'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  }

  public info(message: string, title: string = 'Erro'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  }

  public success(message: string, title: string = 'Sucesso'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Okay'
    });
  }

  public warning(message: string, title: string = 'Atenção'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonText: 'Okay'
    });
  }
}
