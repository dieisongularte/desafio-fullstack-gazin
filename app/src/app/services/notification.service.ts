import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable()
export class NotificationService
{
  question(message: string, title: string, confirmBtnText: string, denyBtnText: string): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      showDenyButton: true,
      icon: 'question',
      confirmButtonText: confirmBtnText,
      denyButtonText: denyBtnText
    });
  }

  error(message: string, title: string = 'Erro'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  }

  info(message: string, title: string = 'Erro'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  }

  success(message: string, title: string = 'Sucesso'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Okay'
    });
  }

  warning(message: string, title: string = 'Atenção'): Promise<SweetAlertResult<any>>
  {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonText: 'Okay'
    });
  }
}
