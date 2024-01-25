import {
  Component,
  forwardRef,
  inject,
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
import { PasswordStrengthService } from '../../../services/password-strength.service'

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
  passwordCheck = inject(PasswordStrengthService)

  inputChecker = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z\\d!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\-]+$'),
    Validators.minLength(8),
  ])

  writeValue(value: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
