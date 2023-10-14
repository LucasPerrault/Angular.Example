import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control/custom-form-control.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'custom-form-control',
  },
  {
    path: 'custom-form-control',
    component: CustomFormControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomFormControlComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
