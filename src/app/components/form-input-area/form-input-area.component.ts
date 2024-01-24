import {
  Component,
  forwardRef,
} from '@angular/core'
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { PasswordIndicatorComponent } from '../password-indicator/password-indicator.component'

@Component({
  selector: 'app-form-input-area',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PasswordIndicatorComponent],
  templateUrl: './form-input-area.component.html',
  styleUrls: ['./form-input-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputAreaComponent),
      multi: true
    }
  ]
})
export class FormInputAreaComponent implements ControlValueAccessor {
  inputChecker = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z\\d!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\-]+$'),
    Validators.minLength(8),
  ])

  writeValue(value: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  // CUSTOM validators
  isEasyValidationPassed(): boolean {
    const value = this.inputChecker?.value || ''
    return /^([a-zA-Z]+|[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+|[0-9]+)$/.test(value)
  }

  isMediumValidationPassed(): boolean {
    const value = this.inputChecker?.value || ''
    return /^(?:(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])|(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]))[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/.test(value)
  }

  isStrongValidationPassed(): boolean {
    const value = this.inputChecker?.value || ''
    return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(value)
  }
}
