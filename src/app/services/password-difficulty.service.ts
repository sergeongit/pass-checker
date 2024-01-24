import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PasswordDifficultyService {
  readonly Difficulty = {
    'easy': RegExp(/^([a-zA-Z]+|[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+|[0-9]+)$/),
    'medium': RegExp(/^(?:(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])|(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]))[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/),
    'strong': RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/),
  }
}
