import { Component } from '@angular/core'
import { FormInputAreaComponent } from '../form-input-area/form-input-area.component'


@Component({
  selector: 'app-form-checker',
  standalone: true,
  imports: [FormInputAreaComponent],
  templateUrl: './form-checker.component.html',
  styleUrls: ['./form-checker.component.scss'],
  providers: [],
})
export class FormCheckerComponent {}


