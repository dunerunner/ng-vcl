import { LinkComponent } from './link.component';

export default {
  name: 'Link',
  path: 'link',
  category: 'Links',
  tabs: {
    Demo: LinkComponent,
    'README.md': require("!raw-loader!../../../src/components/link/README.md"),
    'demo.component.html': require("!raw-loader!./link.component.html"),
    'demo.component.ts': require("!raw-loader!./link.component.ts")
  }
};
