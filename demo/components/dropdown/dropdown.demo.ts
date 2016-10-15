import { DropdownComponent } from './dropdown.component';

export default {
  name: 'Dropdown',
  path: 'dropdown',
  category: 'Inputs',
  tabs: {
    Demo: DropdownComponent,
    'demo.component.html': require("!raw!./dropdown.component.html"),
    'demo.component.ts': require("!raw!./dropdown.component.ts")
  }
};
