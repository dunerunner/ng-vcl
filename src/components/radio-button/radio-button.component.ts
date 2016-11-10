import { Observable } from 'rxjs/Observable';
// TODO: This class is just a copy of the checkbox with slight modifications
// Use inheritance once supported
// https://github.com/angular/angular/issues/11606

import {
  ChangeDetectionStrategy,
  Component,
  Input, Output,
  OnInit, HostBinding, HostListener, OnChanges,
  SimpleChanges, EventEmitter, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButtonComponent),
  multi: true
};

@Component({
  selector: 'vcl-radio-button',
  template: `<vcl-icon [icon]="icon"></vcl-icon><ng-content></ng-content>`,
  host: {
    '[attr.role]': '"radio"',
    '[class.vclCheckbox]': 'true',
    '[class.vclScale130p]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RadioButtonComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input()
  checkedIcon = 'fa:dot-circle-o';

  @Input()
  uncheckedIcon = 'fa:circle-o';

  @Input()
  disabled = false;

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  /**
  Refelects the checked state, `true` is checked and `false` is unchecked
  @public
  */
  @Input()
  checked = false;

  /**
  Action fired when the `checked` state changes due to user interaction.
  */
  _checkedChange = new EventEmitter<boolean>();
  @Output()
  get checkedChange(): Observable<boolean> {
    return this._checkedChange.asObservable();
  };

  constructor(private elementRef: ElementRef) {
    this._checkedChange.subscribe(newVal => {
      this.onChangeCallback(newVal);
    });
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['checked']) {
      let checked = changes['checked'].currentValue;
      // this._checkedChange.emit(checked);
      this.focusMaintenance(checked);
    }
  }

  @HostBinding('class.vclDisabled')
  get clsVclDisabled() {
    return !!this.disabled;
  }

  @HostBinding('attr.aria-disabled')
  get attrAriaDisabled() {
    return !!this.disabled;
  }

  @HostBinding('attr.checked')
  get attrChecked() {
    return !!this.checked;
  }

  @HostListener('keyup', ['$event'])
  onKeyup(e) {
    if (e.keyCode === 32) { // space
      return this.triggerChangeAction(e);
    }
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    return this.triggerChangeAction(e);
  }

  triggerChangeAction(e) {
    e.preventDefault();
    if (this.disabled) return;
    this.checked = !this.checked;
    this._checkedChange.emit(this.checked);
  }

  focusMaintenance(checked: boolean) {
    if (this.checked === true && this.elementRef.nativeElement) {
      this.elementRef.nativeElement.focus();
    }
  }

  get icon() {
    return this.checked ? this.checkedIcon : this.uncheckedIcon;
  }


  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: boolean): void {
    if (value !== this.checked) {
      this.checked = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
