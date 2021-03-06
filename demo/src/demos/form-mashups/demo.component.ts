import {Component, ViewChild} from '@angular/core';
import {PopoverComponent} from '@ng-vcl/ng-vcl';
import {PopoverState} from '@ng-vcl/ng-vcl/popover/popover.component';

@Component({
  templateUrl: 'demo.component.html'
})
export class FormMashupsDemoComponent {

  value: any = 1;

  @ViewChild('dropOver')
  dropOver: PopoverComponent;

  onSelect(value: any) {
    this.value = value;
    this.dropOver.close();
  }

  offClick() {
    if (this.dropOver.visible) {
      this.dropOver.close();
    }
  }
}
