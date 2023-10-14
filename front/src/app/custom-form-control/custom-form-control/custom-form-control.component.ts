import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form-control',
  standalone: true,
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CustomFormControlComponent {
  public formControl = new FormControl();
}
