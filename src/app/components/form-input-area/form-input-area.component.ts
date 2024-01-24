import { Component } from '@angular/core'
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { PasswordIndicatorComponent } from '../password-indicator/password-indicator.component'

@Component({
  selector: 'app-form-input-area',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PasswordIndicatorComponent],
  templateUrl: './form-input-area.component.html',
  styleUrls: ['./form-input-area.component.scss']
})
export class FormInputAreaComponent {
  inputChecker = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z\\d!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\-]+$'),
    Validators.minLength(8),
  ])
}
