"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var wormhole_1 = require('./../../directives/wormhole');
var layer_service_1 = require('./layer.service');
var LayerBaseComponent = (function () {
    function LayerBaseComponent(layerService) {
        this.layerService = layerService;
        this.visibleLayers = [];
    }
    LayerBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layerService.visibleLayersChanged.subscribe(function (visibleLayers) {
            _this.visibleLayers = visibleLayers;
        });
    };
    LayerBaseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayerBaseComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-layer-base',
                    templateUrl: 'layer-base.component.html',
                    animations: [
                        core_1.trigger('boxState', []),
                        core_1.trigger('layerState', [])
                    ]
                },] },
    ];
    /** @nocollapse */
    LayerBaseComponent.ctorParameters = [
        { type: layer_service_1.LayerService, },
    ];
    return LayerBaseComponent;
}());
exports.LayerBaseComponent = LayerBaseComponent;
var LayerDirective = (function (_super) {
    __extends(LayerDirective, _super);
    function LayerDirective(templateRef, elementRef, layerService) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
        this.elementRef = elementRef;
        this.layerService = layerService;
        this.visibilityChange$ = new core_1.EventEmitter();
        this.modal = true;
        this.visible = false;
        this.coverzIndex = 10;
        this.zIndex = 11;
    }
    Object.defineProperty(LayerDirective.prototype, "visibilityChange", {
        get: function () {
            return this.visibilityChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerDirective.prototype, "state", {
        get: function () {
            return this.visible ? 'open' : 'closed';
        },
        enumerable: true,
        configurable: true
    });
    LayerDirective.prototype.ngOnInit = function () {
        this.layerService.register(this);
    };
    LayerDirective.prototype.ngOnDestroy = function () {
        this.layerService.unregister(this);
    };
    LayerDirective.prototype.onClick = function (event) {
        // layer covers 100% screen width & height. first element in layer represents 'outside'
        if (!this.modal && event.target.parentNode === this.elementRef.nativeElement) {
            this.close();
        }
    };
    LayerDirective.prototype.setZIndex = function (zIndex) {
        if (zIndex === void 0) { zIndex = 10; }
        this.coverzIndex = zIndex;
        this.zIndex = zIndex + 1;
    };
    LayerDirective.prototype.toggle = function () {
        this.visible = !this.visible;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.prototype.open = function () {
        this.setZIndex(this.layerService.currentZIndex + 10);
        this.visible = true;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.prototype.close = function () {
        this.setZIndex();
        this.visible = false;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vcl-layer]',
                    exportAs: 'layer',
                    host: {
                        '(document:click)': 'onClick($event)',
                    },
                },] },
    ];
    /** @nocollapse */
    LayerDirective.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ElementRef, },
        { type: layer_service_1.LayerService, },
    ];
    LayerDirective.propDecorators = {
        'visibilityChange': [{ type: core_1.Output },],
        'modal': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
    };
    return LayerDirective;
}(wormhole_1.Wormhole));
exports.LayerDirective = LayerDirective;