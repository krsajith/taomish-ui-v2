import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { ApiService } from "../core/api/api.service";
import { Page } from "../core/domain/page";

@Injectable({ providedIn: 'root' })
export class CustomValidatorService {

  static isUniqueFieldName(apiService:ApiService,url:any,page?:Page): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return apiService
        .get(url+control.value)
        .pipe(
          map((result: any) =>
              result ?{}:{ usernameAlreadyExists: true }
          )
        );
    };
  }
}
