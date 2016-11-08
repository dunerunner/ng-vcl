import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';

/**
*/

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @ViewChild('dropdown') dropdown;

  clickInside: boolean = false;
  popoverTarget: string = 'popoverTarget' + Math.random().toString().slice(2);

  @Output()
  select = new EventEmitter<any[]>();

  @Input()
  expanded: boolean = false;

  @Input()
  items: any[];

  @Input()
  minSelectableItems: number = 1;

  @Input()
  maxSelectableItems: number = 1;

  @Input()
  expandedIcon: string = 'fa:chevron-up';

  @Input()
  collapsedIcon: string = 'fa:chevron-down';

  @Input()
  inputValue: string = 'label';

  @Input()
  emptyLabel: string = 'Select value';

  displayValue: string;

  constructor() { }

  ngOnInit() {
    this.displayValue = this.emptyLabel;
  }

  expand() {
    this.expanded = !this.expanded;
  }

  selectItem(item: any) {
    this.dropdown.selectItem(item);
  }

  onSelect(items: any[]) {
    this.clickInside = true;
    this.select.emit(items);
    if (items && items[0] && this.maxSelectableItems === 1) {
      this.displayValue = items[0][this.inputValue];
    } else if (!items || items.length === 0) {
      this.displayValue = this.emptyLabel;
    } else {
      let result = '';
      for (let i = 0; i < items.length; i++) {
        result += items[i][this.inputValue];
        if (i !== items.length - 1) {
          result += ', ';
        }
      }
      this.displayValue = result;
    }
  }

  onOutsideClick(event) {
    this.expanded = false;
  }
}
