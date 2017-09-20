import { Routes } from '@angular/router';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';

export const formRoutes: Routes = [
  {
    path: 'forms/form-elements',
    component: FormElementsComponent
  },
  {
    path: 'forms/form-wizard',
    component: FormWizardComponent
  }
];
