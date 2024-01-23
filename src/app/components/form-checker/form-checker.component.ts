import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { regExpValidation } from 'src/app/utils/strength-validation'
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs'


@Component({
  selector: 'app-form-checker',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-checker.component.html',
  styleUrls: ['./form-checker.component.scss'],
  providers: [FormControl],
})
export class FormCheckerComponent implements AfterViewInit {
  regExp = regExpValidation

  inputChecker = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z\\d!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\-]+$'),
    Validators.minLength(8),
  ])

  @ViewChild('passInput', { static: true }) passInput!: ElementRef

  ngAfterViewInit(): void {
    fromEvent<InputEvent>(this.passInput.nativeElement, 'input')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(400),
        distinctUntilChanged(),
      )
  }
}


