import {Routes} from '@angular/router'
import { FormCheckerComponent } from './app/components/form-checker/form-checker.component'

export const routes: Routes = [
  { path: '', redirectTo: '/checker', pathMatch: 'full' },
  { path: 'checker', component: FormCheckerComponent }
]
