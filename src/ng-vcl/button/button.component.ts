import { Component, Directive, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding, HostListener, ElementRef, ContentChild, ContentChildren, TemplateRef, ViewContainerRef, QueryList, EmbeddedViewRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishBehavior';
import { ObservableComponent } from '../core/index';
import { ButtonStateContentDirective } from './button-state-content.directive';
// import { dispatchTap } from './dispatch-tap';

enum InteractionType { Click, Tap }

@Component({
  selector: 'button[vcl-button]',
  host: {
    '[class.vclButton]': 'true',
  },
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ObservableComponent {

  private latestInteractionTime: number = 0;
  private latestInteractionType: InteractionType;

  pressed: boolean = false; // `true` if a pointer device is conducting a `down` gesture on the button
  focused: boolean = false; // `true` if the element is focused  (CSS' :focus)

  @HostBinding('class.vclHovered')
  hovered: boolean = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled || this.busy ? true : null;
  }

  @Input()
  @HostBinding('class.vclSelected')
  selected: boolean = false;

  @HostBinding('attr.aria-label')
  @Input()
  title: string;

  @Input()
  disabled: boolean = false;

  @Input()
  disableA11yClick: boolean = false;

  @Input()
  busy: boolean = false;

  @Input()
  flexLabel: boolean = false;

  @Input()
  label: string;

  @Input()
  autoBlur: boolean = true;

  @Input()
  appIcon: string;

  @Input()
  prepIcon: string;

  @Input()
  appIconSrc: string;

  @Input()
  prepIconSrc: string;

  private pressEvent = new EventEmitter<any>();
  @Output()
  get press(): Observable<any> {
    return this.pressEvent.asObservable();
  }

  @Output()
  stateChange = this.observeChange('disabled', 'busy')
                    .map(() => this.state)
                    .distinctUntilChanged()
                    .publishBehavior(this.state)
                    .refCount();

  get state(): string {
    return this.busy ? 'busy' : (this.disabled ? 'disabled' : 'enabled' );
  }

  @ContentChildren(ButtonStateContentDirective)
  buttonContent: QueryList<ButtonStateContentDirective>;

  pressSub: Subscription = this.press.subscribe(() => {
    if (this.autoBlur) {
      if (this.elementRef.nativeElement && this.elementRef.nativeElement.blur) {
        this.elementRef.nativeElement.blur();
      }
    }
  });

  stateSub: Subscription = this.stateChange.subscribe(state => {
    if (this.buttonContent) {
      this.buttonContent.forEach(bc => bc.updateState(state));
    }
  });

  constructor(private elementRef: ElementRef) {
    super();
  }

  @HostListener('keypress', ['$event'])
  onKeypress(ev: KeyboardEvent) {
    // Trigger a11yClick
    if (!this.disableA11yClick &&
        this.elementRef.nativeElement &&
        (
          ev.code === 'Space' ||
          ev.code === 'NumpadEnter' ||
          ev.code === 'Enter'
        )) {
      ev.preventDefault();
      this.elementRef.nativeElement.click();
      // dispatchTap(this.elementRef.nativeElement);
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e) { this.hovered = true; }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) { this.hovered = false; }

  @HostListener('mouseup', ['$event'])
  onMouseUp(e) { this.pressed = false; }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e) { this.pressed = true; }

  @HostListener('onfocus', ['$event'])
  onFocus(e) { this.focused = true; }

  @HostListener('onblur', ['$event'])
  onBlur(e) { this.focused = false; }

  // TODO: temporarily removed taps/hammerjs
  @HostListener('click', ['$event'])
  onClick(e) {
    this.pressEvent.emit(e);
    // this.handleGhostClick(InteractionType.Click, e);
  }
  // @HostListener('tap', ['$event'])
  // onTap(e) {
  //   this.handleGhostClick(InteractionType.Tap, e);
  // }

  // private handleGhostClick(type: InteractionType, e) {
  //   const ANTI_GHOST_DELAY = 2000;
  //   const now = Date.now();

  //   if (type !== this.latestInteractionType ) {
  //     if ((now - this.latestInteractionTime) > ANTI_GHOST_DELAY) {
  //       this.latestInteractionType = type;
  //       this.pressEvent.emit(e);
  //     }
  //   } else {
  //     this.latestInteractionType = type;
  //     this.pressEvent.emit(e);
  //   }
  //   this.latestInteractionTime = now;
  // }

  ngAfterViewInit() {
    this.buttonContent.forEach(bc => bc.updateState(this.state));
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.stateSub) this.stateSub.unsubscribe();
    if (this.pressSub) this.pressSub.unsubscribe();
  }
}
