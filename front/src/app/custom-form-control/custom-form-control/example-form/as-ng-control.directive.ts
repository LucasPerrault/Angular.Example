import {
  ControlValueAccessor,
  FormControlDirective,
  FormControlName,
  NG_VALUE_ACCESSOR,
  NgControl, NgModel
} from '@angular/forms';
import { Directive, inject } from '@angular/core';

@Directive({
  selector: 'ccNgControl',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AsNgControlDirective,
    },
  ],
})
export class AsNgControlDirective implements ControlValueAccessor {
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}

export const injectNgControl = () => {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl) throw new Error('...');

  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }

  throw new Error('...');
}
