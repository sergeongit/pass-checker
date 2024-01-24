import {
  Component,
  inject,
  Input,
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { PasswordDifficultyService } from '../../services/password-difficulty.service'

@Component({
  selector: 'app-password-indicator',
  standalone: true,
  imports: [],
  templateUrl: './password-indicator.component.html',
  styleUrls: ['./password-indicator.component.scss']
})
export class PasswordIndicatorComponent {
  @Input() formData!: FormControl

  passwordCheck = inject(PasswordDifficultyService)
}
