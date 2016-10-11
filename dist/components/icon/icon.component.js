"use strict";
var core_1 = require('@angular/core');
var icon_service_1 = require('./icon.service');
var IconComponent = (function () {
    function IconComponent(_iconService) {
        this._iconService = _iconService;
    }
    Object.defineProperty(IconComponent.prototype, "fontIconClass", {
        get: function () {
            if (this.icon) {
                return this._iconService.lookup(this.icon);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "mergedIconClass", {
        get: function () {
            return (this.fontIconClass || '') + " " + (this.iconClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "isAriaHidden", {
        // Do not hide from aria when a label is provided
        get: function () {
            return !this.label;
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-icon',
                    templateUrl: 'icon.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = [
        { type: icon_service_1.IconService, },
    ];
    IconComponent.propDecorators = {
        'src': [{ type: core_1.Input },],
        'svguse': [{ type: core_1.Input },],
        'iconClass': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
    };
    return IconComponent;
}());
exports.IconComponent = IconComponent;