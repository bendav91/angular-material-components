/**
 * @fileoverview added by tsickle
 * Generated from: lib/timepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, forwardRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NgxMatDateAdapter } from './core/date-adapter';
import { createMissingDateImplError, DEFAULT_STEP, formatTwoDigitTimeValue, LIMIT_TIMES, MERIDIANS, NUMERIC_REGEX, PATTERN_INPUT_HOUR, PATTERN_INPUT_MINUTE, PATTERN_INPUT_SECOND } from './utils/date-utils';
/**
 * @template D
 */
var NgxMatTimepickerComponent = /** @class */ (function () {
    function NgxMatTimepickerComponent(_dateAdapter, cd, formBuilder) {
        this._dateAdapter = _dateAdapter;
        this.cd = cd;
        this.formBuilder = formBuilder;
        this.disabled = false;
        this.showSpinners = true;
        this.stepHour = DEFAULT_STEP;
        this.stepMinute = DEFAULT_STEP;
        this.stepSecond = DEFAULT_STEP;
        this.showSeconds = false;
        this.disableMinute = false;
        this.enableMeridian = false;
        this.color = 'primary';
        this.meridian = MERIDIANS.AM;
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this._destroyed = new Subject();
        this.pattern = PATTERN_INPUT_HOUR;
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        this.form = this.formBuilder.group({
            hour: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_HOUR)]],
            minute: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_MINUTE)]],
            second: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_SECOND)]]
        });
    }
    Object.defineProperty(NgxMatTimepickerComponent.prototype, "hour", {
        /** Hour */
        get: /**
         * Hour
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var val = Number(this.form.controls['hour'].value);
            return isNaN(val) ? 0 : val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgxMatTimepickerComponent.prototype, "minute", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var val = Number(this.form.controls['minute'].value);
            return isNaN(val) ? 0 : val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgxMatTimepickerComponent.prototype, "second", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var val = Number(this.form.controls['second'].value);
            return isNaN(val) ? 0 : val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgxMatTimepickerComponent.prototype, "valid", {
        /** Whether or not the form is valid */
        get: /**
         * Whether or not the form is valid
         * @return {?}
         */
        function () {
            return this.form.valid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.form.valueChanges.pipe(takeUntil(this._destroyed), debounceTime(400)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this._updateModel();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            this.disabled ? this.form.disable() : this.form.enable();
        }
        this.disableMinute ? this.form.get('minute').disable() : this.form.get('minute').enable();
    };
    /**
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Writes a new value to the element.
     * @param obj
     */
    /**
     * Writes a new value to the element.
     * @param {?} val
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.writeValue = /**
     * Writes a new value to the element.
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val != null) {
            this._model = val;
        }
        else {
            this._model = this._dateAdapter.today();
            if (this.defaultTime != null) {
                this._dateAdapter.setTimeByDefaultValues(this._model, this.defaultTime);
            }
        }
        this._updateHourMinuteSecond();
    };
    /** Registers a callback function that is called when the control's value changes in the UI. */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param {?} fn
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.registerOnChange = /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * Set the function to be called when the control receives a touch event.
     */
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.registerOnTouched = /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /** Enables or disables the appropriate DOM element */
    /**
     * Enables or disables the appropriate DOM element
     * @param {?} isDisabled
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.setDisabledState = /**
     * Enables or disables the appropriate DOM element
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._disabled = isDisabled;
        this.cd.markForCheck();
    };
    /**
     * Format input
     * @param input
     */
    /**
     * Format input
     * @param {?} input
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.formatInput = /**
     * Format input
     * @param {?} input
     * @return {?}
     */
    function (input) {
        input.value = input.value.replace(NUMERIC_REGEX, '');
    };
    /** Toggle meridian */
    /**
     * Toggle meridian
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.toggleMeridian = /**
     * Toggle meridian
     * @return {?}
     */
    function () {
        this.meridian = (this.meridian === MERIDIANS.AM) ? MERIDIANS.PM : MERIDIANS.AM;
        this.change('hour');
    };
    /** Change property of time */
    /**
     * Change property of time
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype.change = /**
     * Change property of time
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    function (prop, up) {
        /** @type {?} */
        var next = this._getNextValueByProp(prop, up);
        this.form.controls[prop].setValue(formatTwoDigitTimeValue(next), { onlySelf: false, emitEvent: false });
        this._updateModel();
    };
    /** Update controls of form by model */
    /**
     * Update controls of form by model
     * @private
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype._updateHourMinuteSecond = /**
     * Update controls of form by model
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _hour = this._dateAdapter.getHour(this._model);
        /** @type {?} */
        var _minute = this._dateAdapter.getMinute(this._model);
        /** @type {?} */
        var _second = this._dateAdapter.getSecond(this._model);
        if (this.enableMeridian) {
            if (_hour > LIMIT_TIMES.meridian) {
                _hour = _hour - LIMIT_TIMES.meridian;
                this.meridian = MERIDIANS.PM;
            }
            else {
                this.meridian = MERIDIANS.AM;
            }
        }
        this.form.controls['hour'].setValue(formatTwoDigitTimeValue(_hour));
        this.form.controls['minute'].setValue(formatTwoDigitTimeValue(_minute));
        this.form.controls['second'].setValue(formatTwoDigitTimeValue(_second));
    };
    /** Update model */
    /**
     * Update model
     * @private
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype._updateModel = /**
     * Update model
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _hour = this.hour;
        if (this.enableMeridian && this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
            _hour = _hour + LIMIT_TIMES.meridian;
        }
        this._dateAdapter.setHour(this._model, _hour);
        this._dateAdapter.setMinute(this._model, this.minute);
        this._dateAdapter.setSecond(this._model, this.second);
        this._onChange(this._model);
    };
    /**
     * Get next value by property
     * @param prop
     * @param up
     */
    /**
     * Get next value by property
     * @private
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    NgxMatTimepickerComponent.prototype._getNextValueByProp = /**
     * Get next value by property
     * @private
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    function (prop, up) {
        /** @type {?} */
        var keyProp = prop[0].toUpperCase() + prop.slice(1);
        /** @type {?} */
        var min = LIMIT_TIMES["min" + keyProp];
        /** @type {?} */
        var max = LIMIT_TIMES["max" + keyProp];
        if (prop === 'hour' && this.enableMeridian) {
            max = LIMIT_TIMES.meridian;
        }
        /** @type {?} */
        var next;
        if (up == null) {
            next = this[prop] % (max);
        }
        else {
            next = up ? this[prop] + this["step" + keyProp] : this[prop] - this["step" + keyProp];
            if (prop === 'hour' && this.enableMeridian) {
                next = next % (max + 1);
                if (next === 0)
                    next = up ? 1 : max;
            }
            else {
                next = next % max;
            }
            if (up) {
                next = next > max ? (next - max + min) : next;
            }
            else {
                next = next < min ? (next - min + max) : next;
            }
        }
        return next;
    };
    NgxMatTimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-mat-timepicker',
                    template: "<form [formGroup]=\"form\">\n  <table class=\"table\">\n    <tbody class=\"tbody\">\n      <tr *ngIf=\"showSpinners\">\n        <td>\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('hour', true)\"\n            [disabled]=\"disabled\">\n            <mat-icon>expand_less</mat-icon>\n          </button>\n        </td>\n        <td></td>\n        <td>\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('minute', true)\"\n            [disabled]=\"disabled || disableMinute\">\n            <mat-icon>expand_less</mat-icon>\n          </button> </td>\n        <td></td>\n        <td *ngIf=\"showSeconds\">\n          <button type=\"button\" mat-icon-button aria-label=\"expand_less icon\" (click)=\"change('second', true)\"\n            [disabled]=\"disabled\">\n            <mat-icon>expand_less</mat-icon>\n          </button>\n        </td>\n        <td *ngIf=\"enableMeridian\" class=\"spacer\"></td>\n        <td *ngIf=\"enableMeridian\"></td>\n      </tr>\n\n      <tr>\n        <td>\n          <mat-form-field>\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\" formControlName=\"hour\"\n              (keydown.ArrowUp)=\"change('hour', true); $event.preventDefault()\"\n              (keydown.ArrowDown)=\"change('hour', false); $event.preventDefault()\" (blur)=\"change('hour')\">\n          </mat-form-field>\n        </td>\n        <td class=\"spacer\">&#58;</td>\n        <td>\n          <mat-form-field>\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\n              formControlName=\"minute\" (keydown.ArrowUp)=\"change('minute', true); $event.preventDefault()\"\n              (keydown.ArrowDown)=\"change('minute', false); $event.preventDefault()\" (blur)=\"change('minute')\">\n          </mat-form-field>\n        </td>\n        <td *ngIf=\"showSeconds\" class=\"spacer\">&#58;</td>\n        <td *ngIf=\"showSeconds\">\n          <mat-form-field>\n            <input type=\"text\" matInput (input)=\"formatInput($any($event).target)\" maxlength=\"2\"\n              formControlName=\"second\" (keydown.ArrowUp)=\"change('second', true); $event.preventDefault()\"\n              (keydown.ArrowDown)=\"change('second', false); $event.preventDefault()\" (blur)=\"change('second')\">\n          </mat-form-field>\n        </td>\n\n        <td *ngIf=\"enableMeridian\" class=\"spacer\"></td>\n        <td *ngIf=\"enableMeridian\" class=\"meridian\">\n          <button mat-button (click)=\"toggleMeridian()\" mat-stroked-button [color]=\"color\" [disabled]=\"disabled\">\n            {{meridian}}\n          </button>\n        </td>\n      </tr>\n\n      <tr *ngIf=\"showSpinners\">\n        <td>\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('hour', false)\"\n            [disabled]=\"disabled\">\n            <mat-icon>expand_more</mat-icon>\n          </button> </td>\n        <td></td>\n        <td>\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('minute', false)\"\n            [disabled]=\"disabled || disableMinute\">\n            <mat-icon>expand_more</mat-icon>\n          </button> </td>\n        <td *ngIf=\"showSeconds\"></td>\n        <td *ngIf=\"showSeconds\">\n          <button type=\"button\" mat-icon-button aria-label=\"expand_more icon\" (click)=\"change('second', false)\"\n            [disabled]=\"disabled\">\n            <mat-icon>expand_more</mat-icon>\n          </button>\n        </td>\n        <td *ngIf=\"enableMeridian\" class=\"spacer\"></td>\n        <td *ngIf=\"enableMeridian\"></td>\n      </tr>\n    </tbody>\n  </table>\n</form>",
                    host: {
                        'class': 'ngx-mat-timepicker'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxMatTimepickerComponent; })),
                            multi: true
                        }
                    ],
                    exportAs: 'ngxMatTimepicker',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".ngx-mat-timepicker{font-size:13px}.ngx-mat-timepicker form{min-width:90px}.ngx-mat-timepicker form .table .tbody tr td{text-align:center}.ngx-mat-timepicker form .table .tbody tr td.spacer{font-weight:700}.ngx-mat-timepicker form .table .tbody tr td.meridian .mat-button{min-width:64px;line-height:36px;border-radius:50%;min-width:0;width:36px;height:36px;padding:0;flex-shrink:0}.ngx-mat-timepicker form .table .tbody tr td .mat-icon-button{height:24px;width:24px;line-height:24px}.ngx-mat-timepicker form .table .tbody tr td .mat-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .table .tbody tr td .mat-form-field{width:20px;max-width:20px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    NgxMatTimepickerComponent.ctorParameters = function () { return [
        { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: FormBuilder }
    ]; };
    NgxMatTimepickerComponent.propDecorators = {
        disabled: [{ type: Input }],
        showSpinners: [{ type: Input }],
        stepHour: [{ type: Input }],
        stepMinute: [{ type: Input }],
        stepSecond: [{ type: Input }],
        showSeconds: [{ type: Input }],
        disableMinute: [{ type: Input }],
        enableMeridian: [{ type: Input }],
        defaultTime: [{ type: Input }],
        color: [{ type: Input }]
    };
    return NgxMatTimepickerComponent;
}());
export { NgxMatTimepickerComponent };
if (false) {
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.form;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.disabled;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.showSpinners;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.stepHour;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.stepMinute;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.stepSecond;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.showSeconds;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.disableMinute;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.enableMeridian;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.defaultTime;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.color;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.meridian;
    /**
     * @type {?}
     * @private
     */
    NgxMatTimepickerComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NgxMatTimepickerComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    NgxMatTimepickerComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    NgxMatTimepickerComponent.prototype._model;
    /**
     * @type {?}
     * @private
     */
    NgxMatTimepickerComponent.prototype._destroyed;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype.pattern;
    /** @type {?} */
    NgxMatTimepickerComponent.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    NgxMatTimepickerComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    NgxMatTimepickerComponent.prototype.formBuilder;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1jb21wb25lbnRzL2RhdGV0aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi90aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSSxPQUFPLEVBQXdCLFdBQVcsRUFBYSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRTlNO0lBZ0VFLG1DQUErQixZQUFrQyxFQUN2RCxFQUFxQixFQUFVLFdBQXdCO1FBRGxDLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUN2RCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBNUN4RCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxZQUFZLENBQUM7UUFDaEMsZUFBVSxHQUFXLFlBQVksQ0FBQztRQUNsQyxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsS0FB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QVU7Ozs0QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7NEJBQ3hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBbkJRLGlCQUFpQix1QkFtRVgsUUFBUTtnQkF4RWQsaUJBQWlCO2dCQUNLLFdBQVc7OzsyQkE0QnZDLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBK0xSLGdDQUFDO0NBQUEsQUE3TkQsSUE2TkM7U0E1TVkseUJBQXlCOzs7SUFFcEMseUNBQXVCOztJQUV2Qiw2Q0FBMEI7O0lBQzFCLGlEQUE2Qjs7SUFDN0IsNkNBQXlDOztJQUN6QywrQ0FBMkM7O0lBQzNDLCtDQUEyQzs7SUFDM0MsZ0RBQTZCOztJQUM3QixrREFBK0I7O0lBQy9CLG1EQUFnQzs7SUFDaEMsZ0RBQStCOztJQUMvQiwwQ0FBeUM7O0lBRXpDLDZDQUF1Qzs7Ozs7SUF1QnZDLDhDQUFtQzs7Ozs7SUFDbkMsK0NBQW9DOzs7OztJQUNwQyw4Q0FBMkI7Ozs7O0lBQzNCLDJDQUFrQjs7Ozs7SUFFbEIsK0NBQXdEOztJQUV4RCw0Q0FBb0M7O0lBRXhCLGlEQUFxRDs7Ozs7SUFDL0QsdUNBQTZCOzs7OztJQUFFLGdEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1IsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yLCBERUZBVUxUX1NURVAsIGZvcm1hdFR3b0RpZ2l0VGltZVZhbHVlLCBMSU1JVF9USU1FUywgTUVSSURJQU5TLCBOVU1FUklDX1JFR0VYLCBQQVRURVJOX0lOUFVUX0hPVVIsIFBBVFRFUk5fSU5QVVRfTUlOVVRFLCBQQVRURVJOX0lOUFVUX1NFQ09ORCB9IGZyb20gJy4vdXRpbHMvZGF0ZS11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1tYXQtdGltZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ25neC1tYXQtdGltZXBpY2tlcidcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hNYXRUaW1lcGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBleHBvcnRBczogJ25neE1hdFRpbWVwaWNrZXInLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRUaW1lcGlja2VyQ29tcG9uZW50PEQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dTcGlubmVycyA9IHRydWU7XG4gIEBJbnB1dCgpIHN0ZXBIb3VyOiBudW1iZXIgPSBERUZBVUxUX1NURVA7XG4gIEBJbnB1dCgpIHN0ZXBNaW51dGU6IG51bWJlciA9IERFRkFVTFRfU1RFUDtcbiAgQElucHV0KCkgc3RlcFNlY29uZDogbnVtYmVyID0gREVGQVVMVF9TVEVQO1xuICBASW5wdXQoKSBzaG93U2Vjb25kcyA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlTWludXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVuYWJsZU1lcmlkaWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRlZmF1bHRUaW1lOiBudW1iZXJbXTtcbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICBwdWJsaWMgbWVyaWRpYW46IHN0cmluZyA9IE1FUklESUFOUy5BTTtcblxuICAvKiogSG91ciAqL1xuICBwcml2YXRlIGdldCBob3VyKCkge1xuICAgIGxldCB2YWwgPSBOdW1iZXIodGhpcy5mb3JtLmNvbnRyb2xzWydob3VyJ10udmFsdWUpO1xuICAgIHJldHVybiBpc05hTih2YWwpID8gMCA6IHZhbDtcbiAgfTtcblxuICBwcml2YXRlIGdldCBtaW51dGUoKSB7XG4gICAgbGV0IHZhbCA9IE51bWJlcih0aGlzLmZvcm0uY29udHJvbHNbJ21pbnV0ZSddLnZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4odmFsKSA/IDAgOiB2YWw7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXQgc2Vjb25kKCkge1xuICAgIGxldCB2YWwgPSBOdW1iZXIodGhpcy5mb3JtLmNvbnRyb2xzWydzZWNvbmQnXS52YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKHZhbCkgPyAwIDogdmFsO1xuICB9O1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgZm9ybSBpcyB2YWxpZCAqL1xuICBwdWJsaWMgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0udmFsaWQ7XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZTogYW55ID0gKCkgPT4geyB9O1xuICBwcml2YXRlIF9vblRvdWNoZWQ6IGFueSA9ICgpID0+IHsgfTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX21vZGVsOiBEO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHVibGljIHBhdHRlcm4gPSBQQVRURVJOX0lOUFVUX0hPVVI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9kYXRlQWRhcHRlcjogTmd4TWF0RGF0ZUFkYXB0ZXI8RD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlcikge1xuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoJ05neE1hdERhdGVBZGFwdGVyJyk7XG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoXG4gICAgICB7XG4gICAgICAgIGhvdXI6IFt7IHZhbHVlOiBudWxsLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9LCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKFBBVFRFUk5fSU5QVVRfSE9VUildXSxcbiAgICAgICAgbWludXRlOiBbeyB2YWx1ZTogbnVsbCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihQQVRURVJOX0lOUFVUX01JTlVURSldXSxcbiAgICAgICAgc2Vjb25kOiBbeyB2YWx1ZTogbnVsbCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihQQVRURVJOX0lOUFVUX1NFQ09ORCldXVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCksIGRlYm91bmNlVGltZSg0MDApKS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1vZGVsKCk7XG4gICAgfSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCAmJiAhY2hhbmdlcy5kaXNhYmxlZC5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA/IHRoaXMuZm9ybS5kaXNhYmxlKCkgOiB0aGlzLmZvcm0uZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNhYmxlTWludXRlID8gdGhpcy5mb3JtLmdldCgnbWludXRlJykuZGlzYWJsZSgpIDogdGhpcy5mb3JtLmdldCgnbWludXRlJykuZW5hYmxlKCk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGEgbmV3IHZhbHVlIHRvIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0gb2JqXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbDogRCk6IHZvaWQge1xuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fbW9kZWwgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21vZGVsID0gdGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKTtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRUaW1lICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0VGltZUJ5RGVmYXVsdFZhbHVlcyh0aGlzLl9tb2RlbCwgdGhpcy5kZWZhdWx0VGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZUhvdXJNaW51dGVTZWNvbmQoKTtcbiAgfVxuXG4gIC8qKiBSZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sJ3MgdmFsdWUgY2hhbmdlcyBpbiB0aGUgVUkuICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgdG91Y2ggZXZlbnQuXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBhcHByb3ByaWF0ZSBET00gZWxlbWVudCAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgaW5wdXRcbiAgICogQHBhcmFtIGlucHV0IFxuICAgKi9cbiAgcHVibGljIGZvcm1hdElucHV0KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKE5VTUVSSUNfUkVHRVgsICcnKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgbWVyaWRpYW4gKi9cbiAgcHVibGljIHRvZ2dsZU1lcmlkaWFuKCkge1xuICAgIHRoaXMubWVyaWRpYW4gPSAodGhpcy5tZXJpZGlhbiA9PT0gTUVSSURJQU5TLkFNKSA/IE1FUklESUFOUy5QTSA6IE1FUklESUFOUy5BTTtcbiAgICB0aGlzLmNoYW5nZSgnaG91cicpO1xuICB9XG5cbiAgLyoqIENoYW5nZSBwcm9wZXJ0eSBvZiB0aW1lICovXG4gIHB1YmxpYyBjaGFuZ2UocHJvcDogc3RyaW5nLCB1cD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5fZ2V0TmV4dFZhbHVlQnlQcm9wKHByb3AsIHVwKTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbcHJvcF0uc2V0VmFsdWUoZm9ybWF0VHdvRGlnaXRUaW1lVmFsdWUobmV4dCksIHsgb25seVNlbGY6IGZhbHNlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuX3VwZGF0ZU1vZGVsKCk7XG4gIH1cblxuICAvKiogVXBkYXRlIGNvbnRyb2xzIG9mIGZvcm0gYnkgbW9kZWwgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlSG91ck1pbnV0ZVNlY29uZCgpIHtcbiAgICBsZXQgX2hvdXIgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRIb3VyKHRoaXMuX21vZGVsKTtcbiAgICBjb25zdCBfbWludXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0TWludXRlKHRoaXMuX21vZGVsKTtcbiAgICBjb25zdCBfc2Vjb25kID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0U2Vjb25kKHRoaXMuX21vZGVsKTtcblxuICAgIGlmICh0aGlzLmVuYWJsZU1lcmlkaWFuKSB7XG4gICAgICBpZiAoX2hvdXIgPiBMSU1JVF9USU1FUy5tZXJpZGlhbikge1xuICAgICAgICBfaG91ciA9IF9ob3VyIC0gTElNSVRfVElNRVMubWVyaWRpYW47XG4gICAgICAgIHRoaXMubWVyaWRpYW4gPSBNRVJJRElBTlMuUE07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1lcmlkaWFuID0gTUVSSURJQU5TLkFNO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZm9ybS5jb250cm9sc1snaG91ciddLnNldFZhbHVlKGZvcm1hdFR3b0RpZ2l0VGltZVZhbHVlKF9ob3VyKSk7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzWydtaW51dGUnXS5zZXRWYWx1ZShmb3JtYXRUd29EaWdpdFRpbWVWYWx1ZShfbWludXRlKSk7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzWydzZWNvbmQnXS5zZXRWYWx1ZShmb3JtYXRUd29EaWdpdFRpbWVWYWx1ZShfc2Vjb25kKSk7XG4gIH1cblxuICAvKiogVXBkYXRlIG1vZGVsICovXG4gIHByaXZhdGUgX3VwZGF0ZU1vZGVsKCkge1xuICAgIGxldCBfaG91ciA9IHRoaXMuaG91cjtcbiAgICBpZiAodGhpcy5lbmFibGVNZXJpZGlhbiAmJiB0aGlzLm1lcmlkaWFuID09PSBNRVJJRElBTlMuUE0gJiYgX2hvdXIgIT09IExJTUlUX1RJTUVTLm1lcmlkaWFuKSB7XG4gICAgICBfaG91ciA9IF9ob3VyICsgTElNSVRfVElNRVMubWVyaWRpYW47XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0SG91cih0aGlzLl9tb2RlbCwgX2hvdXIpO1xuICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldE1pbnV0ZSh0aGlzLl9tb2RlbCwgdGhpcy5taW51dGUpO1xuICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldFNlY29uZCh0aGlzLl9tb2RlbCwgdGhpcy5zZWNvbmQpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuX21vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmV4dCB2YWx1ZSBieSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcCBcbiAgICogQHBhcmFtIHVwXG4gICAqL1xuICBwcml2YXRlIF9nZXROZXh0VmFsdWVCeVByb3AocHJvcDogc3RyaW5nLCB1cD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGNvbnN0IGtleVByb3AgPSBwcm9wWzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpO1xuICAgIGNvbnN0IG1pbiA9IExJTUlUX1RJTUVTW2BtaW4ke2tleVByb3B9YF07XG4gICAgbGV0IG1heCA9IExJTUlUX1RJTUVTW2BtYXgke2tleVByb3B9YF07XG5cbiAgICBpZiAocHJvcCA9PT0gJ2hvdXInICYmIHRoaXMuZW5hYmxlTWVyaWRpYW4pIHtcbiAgICAgIG1heCA9IExJTUlUX1RJTUVTLm1lcmlkaWFuO1xuICAgIH1cblxuICAgIGxldCBuZXh0O1xuICAgIGlmICh1cCA9PSBudWxsKSB7XG4gICAgICBuZXh0ID0gdGhpc1twcm9wXSAlIChtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0ID0gdXAgPyB0aGlzW3Byb3BdICsgdGhpc1tgc3RlcCR7a2V5UHJvcH1gXSA6IHRoaXNbcHJvcF0gLSB0aGlzW2BzdGVwJHtrZXlQcm9wfWBdO1xuICAgICAgaWYgKHByb3AgPT09ICdob3VyJyAmJiB0aGlzLmVuYWJsZU1lcmlkaWFuKSB7XG4gICAgICAgIG5leHQgPSBuZXh0ICUgKG1heCArIDEpO1xuICAgICAgICBpZiAobmV4dCA9PT0gMCkgbmV4dCA9IHVwID8gMSA6IG1heDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQgPSBuZXh0ICUgbWF4O1xuICAgICAgfVxuICAgICAgaWYgKHVwKSB7XG4gICAgICAgIG5leHQgPSBuZXh0ID4gbWF4ID8gKG5leHQgLSBtYXggKyBtaW4pIDogbmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQgPSBuZXh0IDwgbWluID8gKG5leHQgLSBtaW4gKyBtYXgpIDogbmV4dDtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbn1cbiJdfQ==