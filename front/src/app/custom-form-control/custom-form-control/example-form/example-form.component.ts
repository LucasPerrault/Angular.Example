import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsNgControlDirective, injectNgControl } from './as-ng-control.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-form',
  standalone: true,
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss'],
  hostDirectives: [AsNgControlDirective],
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleFormComponent {
  public ngControl = injectNgControl();

}
