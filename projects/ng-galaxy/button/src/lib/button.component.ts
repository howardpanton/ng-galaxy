import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-button',
  template: `
    <button [disabled]="disabled">{{text}}</button>
  `
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
}
