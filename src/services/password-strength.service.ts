import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms'


@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  readonly PasswordDifficultyIdentification = {
    easy: /^([a-zA-Z]+|[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+|[0-9]+)$/ ,
    medium: /^(?:(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])|(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]))[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/ ,
    strong: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/
  }

  isEasyValidationPassed(control: FormControl): boolean {
    const value = control?.value || ''
    return this.PasswordDifficultyIdentification.easy.test(value)
  }

  isMediumValidationPassed(control: FormControl): boolean {
    const value = control?.value || ''
    return this.PasswordDifficultyIdentification.medium.test(value)
  }

  isStrongValidationPassed(control: FormControl): boolean {
    const value = control?.value || ''
    return this.PasswordDifficultyIdentification.strong.test(value)
  }
}
