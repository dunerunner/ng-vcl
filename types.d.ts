import { Schema } from 'jsonschema';
import { DatePickerConfig } from '../ng-vcl/date-picker/date-picker.component';
import { Type } from '@angular/core';
export interface JssFormSchemaOptions {
    label?: string;
    sublabel?: string;
    value: any;
}
export interface JssFormSchema extends Schema {
    properties?: {
        [name: string]: JssFormSchema;
    };
    label?: string;
    singularLabel?: string;
    formType?: string;
    placeholder?: string;
    options?: JssFormSchemaOptions[];
    scale?: string[] | number;
    buttons?: JssFormSchema[];
    action?: any;
    autoDisable?: boolean;
    prepIcon?: string;
    appIcon?: string;
    class?: string;
    disabled?: boolean;
    hideLabel?: boolean;
    hint?: string;
    count?: number;
    datePickerConfig?: DatePickerConfig;
    customComponent?: Type<any>;
    customParameters?: any;
}
