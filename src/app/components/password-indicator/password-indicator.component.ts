import {
  Component,
  Input,
} from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-password-indicator',
  standalone: true,
  imports: [],
  templateUrl: './password-indicator.component.html',
  styleUrls: ['./password-indicator.component.scss']
})
export class PasswordIndicatorComponent {
  @Input() formData!: FormControl
  @Input() isPasswordEasy!: boolean
  @Input() isPasswordMedium!: boolean
  @Input() isPasswordStrong!: boolean
}
