"use strict";
var core_1 = require('@angular/core');
/**
*/
var SelectComponent = (function () {
    function SelectComponent() {
        this.ariaRole = 'list';
        this.clickInside = false;
        this.select = new core_1.EventEmitter();
        this.expanded = false;
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.inputValue = 'label';
        this.emptyLabel = 'Select value';
        this.displayValue = this.emptyLabel;
    }
    SelectComponent.prototype.expand = function () {
        this.clickInside = true;
        this.expanded = !this.expanded;
    };
    SelectComponent.prototype.onSelect = function (items) {
        this.clickInside = true;
        this.select.emit(items);
        if (items && items[0] && this.maxSelectableItems === 1) {
            this.displayValue = items[0][this.inputValue];
        }
        else if (!items || items.length === 0) {
            this.displayValue = this.emptyLabel;
        }
        else {
            var result = '';
            for (var i = 0; i < items.length; i++) {
                result += items[i][this.inputValue];
                if (i !== items.length - 1) {
                    result += ', ';
                }
            }
            this.displayValue = result;
        }
    };
    SelectComponent.prototype.onOutsideClick = function (event) {
        if (!this.clickInside) {
            this.expanded = false;
        }
        this.clickInside = false;
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-select',
                    templateUrl: 'select.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    host: {
                        '(document:click)': 'onOutsideClick($event)',
                    },
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = [];
    SelectComponent.propDecorators = {
        'select': [{ type: core_1.Output },],
        'expanded': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'minSelectableItems': [{ type: core_1.Input },],
        'maxSelectableItems': [{ type: core_1.Input },],
        'expandedIcon': [{ type: core_1.Input },],
        'collapsedIcon': [{ type: core_1.Input },],
        'inputValue': [{ type: core_1.Input },],
        'emptyLabel': [{ type: core_1.Input },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;