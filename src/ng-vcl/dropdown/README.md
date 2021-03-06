# vcl-dropdown

## Usage

```html
<vcl-dropdown [value]="2" (change)="onSelect($event)" mode="multi" [maxSelectableItems]="5">
  <vcl-dropdown-option value="1" label="Item 1"></vcl-dropdown-option>
  <vcl-dropdown-option value="2" label="Item 2"></vcl-dropdown-option>
  <vcl-dropdown-option value="3" label="Item 3"></vcl-dropdown-option>
  <vcl-dropdown-option value="4" label="Item 4" [disabled]="true"></vcl-dropdown-option>
  <vcl-dropdown-option value="5" label="Item 5"></vcl-dropdown-option>
</vcl-dropdown>
```

### API

#### vcl-dropdown attributes

Name                  | Type                        | Default  | Description
--------------------- | ---------------             | -------  | --------------------------------------------------------------------------------
`ngModel`             | any &#124; any[]            |          | value(s) of the selected option(s)
`value`               | any &#124; any[]            |          | value(s) of the selected option(s)
`mode`                | "single" &#124; "multiple"  | "single" | 1 option can be selected in "single" mode. 0 to `maxSelectableItems` in "multiple"
`maxSelectableItems`  | number &#124; undefined     |          | maximum number of options that can be selected at the same time. Unlimited if undefined.
`listenKeys`          | boolean                     | true     | if true, the dropdown will listen and interact to keypress-events

#### vcl-dropdown events

Name                  | Type             | Description
--------------------- | ---------------  | -
`change`              | any &#124; any[] | emits the new value when the selected options change

#### vcl-dropdown-option attributes

Name         | Type    | Default | Description
----------   | ------- | ------- | --------------------------------------
`value`      | any     |         | The items value
`label`      | string  |         | The items label
`sublabel`   | string  |         | The items sub label
`disabled`   | boolean | false   | if true, the item cannot be selected
`prepIcon`   | string  |         | Icon as defined by the icon component
`appIcon`    | string  |         | Same as `prepIcon` but appended
`prepIconSrc`| string  |         | Image as defined by the icon component
`appIconSrc` | string  |         | Same as `prepIconSrc` but appended
