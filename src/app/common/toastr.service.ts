import { Injectable } from '@angular/core';

declare let toastr;
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  Success(message: string, title?: string) {
    toastr.success(message, title);
  }

  Error(message: string, title?: string) {
    toastr.error(message, title);
  }

  Info(message: string, title?: string) {
    toastr.info(message, title);
  }

  Warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

}
