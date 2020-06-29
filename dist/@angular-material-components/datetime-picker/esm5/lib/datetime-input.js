/**
 * @fileoverview added by tsickle
 * Generated from: lib/datetime-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOWN_ARROW } from '@angular/cdk/keycodes';
import { Directive, ElementRef, EventEmitter, forwardRef, Inject, Input, Optional, Output } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { NgxMatDateAdapter } from './core/date-adapter';
import { NGX_MAT_DATE_FORMATS } from './core/date-formats';
import { NgxMatDatetimePicker } from './datetime-picker.component';
import { createMissingDateImplError } from './utils/date-utils';
/**
 * \@docs-private
 * @type {?}
 */
export var MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NgxMatDatetimeInput; })),
    multi: true
};
/**
 * \@docs-private
 * @type {?}
 */
export var MAT_DATEPICKER_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NgxMatDatetimeInput; })),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatetimePickerInputEvent instead.
 * @template D
 */
var /**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatetimePickerInputEvent instead.
 * @template D
 */
MatDatetimePickerInputEvent = /** @class */ (function () {
    function MatDatetimePickerInputEvent(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
    return MatDatetimePickerInputEvent;
}());
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatetimePickerInputEvent instead.
 * @template D
 */
export { MatDatetimePickerInputEvent };
if (false) {
    /**
     * The new value for the target datepicker input.
     * @type {?}
     */
    MatDatetimePickerInputEvent.prototype.value;
    /**
     * Reference to the datepicker input component that emitted the event.
     * @type {?}
     */
    MatDatetimePickerInputEvent.prototype.target;
    /**
     * Reference to the native input element associated with the datepicker input.
     * @type {?}
     */
    MatDatetimePickerInputEvent.prototype.targetElement;
}
/**
 * Directive used to connect an input to a matDatetimePicker.
 * @template D
 */
var NgxMatDatetimeInput = /** @class */ (function () {
    function NgxMatDatetimeInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this = this;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.dateChange = new EventEmitter();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new EventEmitter();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new EventEmitter();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new EventEmitter();
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this._cvaOnChange = (/**
         * @return {?}
         */
        function () { });
        this._validatorOnChange = (/**
         * @return {?}
         */
        function () { });
        this._datepickerSubscription = Subscription.EMPTY;
        this._localeSubscription = Subscription.EMPTY;
        /**
         * The form control validator for whether the input parses.
         */
        this._parseValidator = (/**
         * @return {?}
         */
        function () {
            return _this._lastValueValid ?
                null : { 'matDatetimePickerParse': { 'text': _this._elementRef.nativeElement.value } };
        });
        /**
         * The form control validator for the min date.
         */
        this._minValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.min || !controlValue ||
                _this._dateAdapter.compareDateWithTime(_this.min, controlValue, _this._datepicker.showSeconds) <= 0) ?
                null : { 'matDatetimePickerMin': { 'min': _this.min, 'actual': controlValue } };
        });
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.max || !controlValue ||
                _this._dateAdapter.compareDateWithTime(_this.max, controlValue, _this._datepicker.showSeconds) >= 0) ?
                null : { 'matDatetimePickerMax': { 'max': _this.max, 'actual': controlValue } };
        });
        /**
         * The form control validator for the date filter.
         */
        this._filterValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue) ?
                null : { 'matDatetimePickerFilter': true };
        });
        /**
         * The combined form control validator for this input.
         */
        this._validator = Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe((/**
         * @return {?}
         */
        function () {
            _this.value = _this.value;
        }));
    }
    Object.defineProperty(NgxMatDatetimeInput.prototype, "ngxMatDatetimePicker", {
        /** The datepicker that this input is associated with. */
        set: /**
         * The datepicker that this input is associated with.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                return;
            }
            this._datepicker = value;
            this._datepicker._registerInput(this);
            this._datepickerSubscription.unsubscribe();
            this._datepickerSubscription = this._datepicker._selectedChanged.subscribe((/**
             * @param {?} selected
             * @return {?}
             */
            function (selected) {
                _this.value = selected;
                _this._cvaOnChange(selected);
                _this._onTouched();
                _this.dateInput.emit(new MatDatetimePickerInputEvent(_this, _this._elementRef.nativeElement));
                _this.dateChange.emit(new MatDatetimePickerInputEvent(_this, _this._elementRef.nativeElement));
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimeInput.prototype, "ngxMatDatetimePickerFilter", {
        /** Function that can be used to filter out dates within the datepicker. */
        set: /**
         * Function that can be used to filter out dates within the datepicker.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dateFilter = value;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimeInput.prototype, "value", {
        /** The value of the input. */
        get: /**
         * The value of the input.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = !value || this._dateAdapter.isValid(value);
            value = this._getValidDateOrNull(value);
            /** @type {?} */
            var oldDate = this.value;
            this._value = value;
            this._formatValue(value);
            if (!this._dateAdapter.sameDate(oldDate, value)) {
                this._valueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimeInput.prototype, "min", {
        /** The minimum valid date. */
        get: /**
         * The minimum valid date.
         * @return {?}
         */
        function () { return this._min; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimeInput.prototype, "max", {
        /** The maximum valid date. */
        get: /**
         * The maximum valid date.
         * @return {?}
         */
        function () { return this._max; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimeInput.prototype, "disabled", {
        /** Whether the datepicker-input is disabled. */
        get: /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */
        function () { return !!this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = value != null && "" + value !== 'false';
            /** @type {?} */
            var element = this._elementRef.nativeElement;
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disabledChange.emit(newValue);
            }
            // We need to null check the `blur` method, because it's undefined during SSR.
            if (newValue && element.blur) {
                // Normally, native input elements automatically blur if they turn disabled. This behavior
                // is problematic, because it would mean that it triggers another change detection cycle,
                // which then causes a changed after checked error if the input element was focused before.
                element.blur();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.registerOnValidatorChange = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorOnChange = fn;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.validate = /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator ? this._validator(c) : null;
    };
    /**
     * @deprecated
     * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     */
    /**
     * @deprecated
     * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.getPopupConnectionElementRef = /**
     * @deprecated
     * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    function () {
        return this.getConnectedOverlayOrigin();
    };
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    NgxMatDatetimeInput.prototype.getConnectedOverlayOrigin = /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    function () {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.writeValue = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.registerOnChange = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._cvaOnChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.registerOnTouched = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgxMatDatetimeInput.prototype.setDisabledState = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxMatDatetimeInput.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;
        if (this._datepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._datepicker.open();
            event.preventDefault();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxMatDatetimeInput.prototype._onInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var lastValueWasValid = this._lastValueValid;
        /** @type {?} */
        var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._getValidDateOrNull(date);
        /** @type {?} */
        var isSameTime = this._dateAdapter.isSameTime(date, this._value);
        if ((date != null && (!isSameTime || !this._dateAdapter.sameDate(date, this._value)))
            || (date == null && this._value != null)) {
            this._value = date;
            this._cvaOnChange(date);
            this._valueChange.emit(date);
            this.dateInput.emit(new MatDatetimePickerInputEvent(this, this._elementRef.nativeElement));
        }
        else if (lastValueWasValid !== this._lastValueValid) {
            this._validatorOnChange();
        }
    };
    /**
     * @return {?}
     */
    NgxMatDatetimeInput.prototype._onChange = /**
     * @return {?}
     */
    function () {
        this.dateChange.emit(new MatDatetimePickerInputEvent(this, this._elementRef.nativeElement));
    };
    /** Returns the palette used by the input's form field, if any. */
    /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    NgxMatDatetimeInput.prototype._getThemePalette = /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    function () {
        return this._formField ? this._formField.color : undefined;
    };
    /** Handles blur events on the input. */
    /**
     * Handles blur events on the input.
     * @return {?}
     */
    NgxMatDatetimeInput.prototype._onBlur = /**
     * Handles blur events on the input.
     * @return {?}
     */
    function () {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    };
    /** Handles focus events on the input. */
    /**
     * Handles focus events on the input.
     * @return {?}
     */
    NgxMatDatetimeInput.prototype._onFocus = /**
     * Handles focus events on the input.
     * @return {?}
     */
    function () {
        // Close datetime picker if opened
        if (this._datepicker && this._datepicker.opened) {
            this._datepicker.cancel();
        }
    };
    /** Formats a value and sets it on the input element. */
    /**
     * Formats a value and sets it on the input element.
     * @private
     * @param {?} value
     * @return {?}
     */
    NgxMatDatetimeInput.prototype._formatValue = /**
     * Formats a value and sets it on the input element.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    NgxMatDatetimeInput.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    NgxMatDatetimeInput.decorators = [
        { type: Directive, args: [{
                    selector: 'input[ngxMatDatetimePicker]',
                    providers: [
                        MAT_DATEPICKER_VALUE_ACCESSOR,
                        MAT_DATEPICKER_VALIDATORS,
                        { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: NgxMatDatetimeInput },
                    ],
                    host: {
                        '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
                        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                        '[disabled]': 'disabled',
                        '(input)': '_onInput($event.target.value)',
                        '(change)': '_onChange()',
                        '(blur)': '_onBlur()',
                        '(focus)': '_onFocus()',
                        '(keydown)': '_onKeydown($event)',
                    },
                    exportAs: 'ngxMatDatetimePickerInput',
                },] }
    ];
    /** @nocollapse */
    NgxMatDatetimeInput.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
        { type: MatFormField, decorators: [{ type: Optional }] }
    ]; };
    NgxMatDatetimeInput.propDecorators = {
        ngxMatDatetimePicker: [{ type: Input }],
        ngxMatDatetimePickerFilter: [{ type: Input }],
        value: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        disabled: [{ type: Input }],
        dateChange: [{ type: Output }],
        dateInput: [{ type: Output }]
    };
    return NgxMatDatetimeInput;
}());
export { NgxMatDatetimeInput };
if (false) {
    /** @type {?} */
    NgxMatDatetimeInput.prototype._datepicker;
    /** @type {?} */
    NgxMatDatetimeInput.prototype._dateFilter;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._value;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._min;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._max;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._disabled;
    /**
     * Emits when a `change` event is fired on this `<input>`.
     * @type {?}
     */
    NgxMatDatetimeInput.prototype.dateChange;
    /**
     * Emits when an `input` event is fired on this `<input>`.
     * @type {?}
     */
    NgxMatDatetimeInput.prototype.dateInput;
    /**
     * Emits when the value changes (either due to user input or programmatic change).
     * @type {?}
     */
    NgxMatDatetimeInput.prototype._valueChange;
    /**
     * Emits when the disabled state has changed
     * @type {?}
     */
    NgxMatDatetimeInput.prototype._disabledChange;
    /** @type {?} */
    NgxMatDatetimeInput.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._cvaOnChange;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._validatorOnChange;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._datepickerSubscription;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._localeSubscription;
    /**
     * The form control validator for whether the input parses.
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._parseValidator;
    /**
     * The form control validator for the min date.
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._minValidator;
    /**
     * The form control validator for the max date.
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._maxValidator;
    /**
     * The form control validator for the date filter.
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._filterValidator;
    /**
     * The combined form control validator for this input.
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._validator;
    /**
     * Whether the last value set on the input was valid.
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._lastValueValid;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._elementRef;
    /** @type {?} */
    NgxMatDatetimeInput.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._dateFormats;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimeInput.prototype._formField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1jb21wb25lbnRzL2RhdGV0aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9kYXRldGltZS1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUF5QyxhQUFhLEVBQUUsaUJBQWlCLEVBQTRDLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9KLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBcUIsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFHaEUsTUFBTSxLQUFPLDZCQUE2QixHQUFRO0lBQzlDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNkOzs7OztBQUdELE1BQU0sS0FBTyx5QkFBeUIsR0FBUTtJQUMxQyxPQUFPLEVBQUUsYUFB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Szs2QkFzQkwsTUFBTTs0QkFJTixNQUFNOztJQW9NWCwwQkFBQztDQUFBLEFBclRELElBcVRDO1NBaFNZLG1CQUFtQjs7O0lBb0I1QiwwQ0FBcUM7O0lBUXJDLDBDQUF5Qzs7Ozs7SUFpQnpDLHFDQUF5Qjs7Ozs7SUFTekIsbUNBQXVCOzs7OztJQVN2QixtQ0FBdUI7Ozs7O0lBc0J2Qix3Q0FBMkI7Ozs7O0lBRzNCLHlDQUN1RDs7Ozs7SUFHdkQsd0NBQ3VEOzs7OztJQUd2RCwyQ0FBNEM7Ozs7O0lBRzVDLDhDQUE4Qzs7SUFFOUMseUNBQXVCOzs7OztJQUV2QiwyQ0FBdUQ7Ozs7O0lBRXZELGlEQUF1Qzs7Ozs7SUFFdkMsc0RBQXFEOzs7OztJQUVyRCxrREFBaUQ7Ozs7OztJQUdqRCw4Q0FHQzs7Ozs7O0lBR0QsNENBS0M7Ozs7OztJQUdELDRDQUtDOzs7Ozs7SUFHRCwrQ0FJQzs7Ozs7O0lBR0QseUNBRStGOzs7Ozs7SUFHL0YsOENBQWdDOzs7OztJQUc1QiwwQ0FBaUQ7O0lBQ2pELDJDQUFxRDs7Ozs7SUFDckQsMkNBQWlGOzs7OztJQUNqRix5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgRE9XTl9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNQVRfSU5QVVRfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neE1hdERhdGVBZGFwdGVyIH0gZnJvbSAnLi9jb3JlL2RhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ3hNYXREYXRlRm9ybWF0cywgTkdYX01BVF9EQVRFX0ZPUk1BVFMgfSBmcm9tICcuL2NvcmUvZGF0ZS1mb3JtYXRzJztcbmltcG9ydCB7IE5neE1hdERhdGV0aW1lUGlja2VyIH0gZnJvbSAnLi9kYXRldGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSAnLi91dGlscy9kYXRlLXV0aWxzJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBNQVRfREFURVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neE1hdERhdGV0aW1lSW5wdXQpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IE1BVF9EQVRFUElDS0VSX1ZBTElEQVRPUlM6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neE1hdERhdGV0aW1lSW5wdXQpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5cbi8qKlxuICogQW4gZXZlbnQgdXNlZCBmb3IgZGF0ZXBpY2tlciBpbnB1dCBhbmQgY2hhbmdlIGV2ZW50cy4gV2UgZG9uJ3QgYWx3YXlzIGhhdmUgYWNjZXNzIHRvIGEgbmF0aXZlXG4gKiBpbnB1dCBvciBjaGFuZ2UgZXZlbnQgYmVjYXVzZSB0aGUgZXZlbnQgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgdGhlIHVzZXIgY2xpY2tpbmcgb24gdGhlXG4gKiBjYWxlbmRhciBwb3B1cC4gRm9yIGNvbnNpc3RlbmN5LCB3ZSBhbHdheXMgdXNlIE1hdERhdGV0aW1lUGlja2VySW5wdXRFdmVudCBpbnN0ZWFkLlxuICovXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVQaWNrZXJJbnB1dEV2ZW50PEQ+IHtcbiAgICAvKiogVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIHRhcmdldCBkYXRlcGlja2VyIGlucHV0LiAqL1xuICAgIHZhbHVlOiBEIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBkYXRlcGlja2VyIGlucHV0IGNvbXBvbmVudCB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50LiAqL1xuICAgICAgICBwdWJsaWMgdGFyZ2V0OiBOZ3hNYXREYXRldGltZUlucHV0PEQ+LFxuICAgICAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGRhdGVwaWNrZXIgaW5wdXQuICovXG4gICAgICAgIHB1YmxpYyB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy50YXJnZXQudmFsdWU7XG4gICAgfVxufVxuXG5cbi8qKiBEaXJlY3RpdmUgdXNlZCB0byBjb25uZWN0IGFuIGlucHV0IHRvIGEgbWF0RGF0ZXRpbWVQaWNrZXIuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2lucHV0W25neE1hdERhdGV0aW1lUGlja2VyXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1BVF9EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICBNQVRfREFURVBJQ0tFUl9WQUxJREFUT1JTLFxuICAgICAgICB7IHByb3ZpZGU6IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE5neE1hdERhdGV0aW1lSW5wdXQgfSxcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLmFyaWEtaGFzcG9wdXBdJzogJ19kYXRlcGlja2VyID8gXCJkaWFsb2dcIiA6IG51bGwnLFxuICAgICAgICAnW2F0dHIuYXJpYS1vd25zXSc6ICcoX2RhdGVwaWNrZXI/Lm9wZW5lZCAmJiBfZGF0ZXBpY2tlci5pZCkgfHwgbnVsbCcsXG4gICAgICAgICdbYXR0ci5taW5dJzogJ21pbiA/IF9kYXRlQWRhcHRlci50b0lzbzg2MDEobWluKSA6IG51bGwnLFxuICAgICAgICAnW2F0dHIubWF4XSc6ICdtYXggPyBfZGF0ZUFkYXB0ZXIudG9Jc284NjAxKG1heCkgOiBudWxsJyxcbiAgICAgICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICAgICAnKGlucHV0KSc6ICdfb25JbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICcoY2hhbmdlKSc6ICdfb25DaGFuZ2UoKScsXG4gICAgICAgICcoYmx1ciknOiAnX29uQmx1cigpJyxcbiAgICAgICAgJyhmb2N1cyknOiAnX29uRm9jdXMoKScsXG4gICAgICAgICcoa2V5ZG93biknOiAnX29uS2V5ZG93bigkZXZlbnQpJyxcbiAgICB9LFxuICAgIGV4cG9ydEFzOiAnbmd4TWF0RGF0ZXRpbWVQaWNrZXJJbnB1dCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdERhdGV0aW1lSW5wdXQ8RD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBWYWxpZGF0b3Ige1xuICAgIC8qKiBUaGUgZGF0ZXBpY2tlciB0aGF0IHRoaXMgaW5wdXQgaXMgYXNzb2NpYXRlZCB3aXRoLiAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5neE1hdERhdGV0aW1lUGlja2VyKHZhbHVlOiBOZ3hNYXREYXRldGltZVBpY2tlcjxEPikge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuX3JlZ2lzdGVySW5wdXQodGhpcyk7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyU3Vic2NyaXB0aW9uID0gdGhpcy5fZGF0ZXBpY2tlci5fc2VsZWN0ZWRDaGFuZ2VkLnN1YnNjcmliZSgoc2VsZWN0ZWQ6IEQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMuX2N2YU9uQ2hhbmdlKHNlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRlSW5wdXQuZW1pdChuZXcgTWF0RGF0ZXRpbWVQaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQobmV3IE1hdERhdGV0aW1lUGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9kYXRlcGlja2VyOiBOZ3hNYXREYXRldGltZVBpY2tlcjxEPjtcblxuICAgIC8qKiBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbHRlciBvdXQgZGF0ZXMgd2l0aGluIHRoZSBkYXRlcGlja2VyLiAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5neE1hdERhdGV0aW1lUGlja2VyRmlsdGVyKHZhbHVlOiAoZGF0ZTogRCB8IG51bGwpID0+IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZGF0ZUZpbHRlciA9IHZhbHVlO1xuICAgICAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSgpO1xuICAgIH1cbiAgICBfZGF0ZUZpbHRlcjogKGRhdGU6IEQgfCBudWxsKSA9PiBib29sZWFuO1xuXG4gICAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuICovXG4gICAgQElucHV0KClcbiAgICBnZXQgdmFsdWUoKTogRCB8IG51bGwgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgICBzZXQgdmFsdWUodmFsdWU6IEQgfCBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xuICAgICAgICB0aGlzLl9sYXN0VmFsdWVWYWxpZCA9ICF2YWx1ZSB8fCB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xuICAgICAgICBjb25zdCBvbGREYXRlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZm9ybWF0VmFsdWUodmFsdWUpO1xuXG4gICAgICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUob2xkRGF0ZSwgdmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF92YWx1ZTogRCB8IG51bGw7XG5cbiAgICAvKiogVGhlIG1pbmltdW0gdmFsaWQgZGF0ZS4gKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBtaW4oKTogRCB8IG51bGwgeyByZXR1cm4gdGhpcy5fbWluOyB9XG4gICAgc2V0IG1pbih2YWx1ZTogRCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5fbWluID0gdGhpcy5fZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgX21pbjogRCB8IG51bGw7XG5cbiAgICAvKiogVGhlIG1heGltdW0gdmFsaWQgZGF0ZS4gKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBtYXgoKTogRCB8IG51bGwgeyByZXR1cm4gdGhpcy5fbWF4OyB9XG4gICAgc2V0IG1heCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5fbWF4ID0gdGhpcy5fZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgX21heDogRCB8IG51bGw7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlci1pbnB1dCBpcyBkaXNhYmxlZC4gKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5fZGlzYWJsZWQ7IH1cbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBudWxsIGNoZWNrIHRoZSBgYmx1cmAgbWV0aG9kLCBiZWNhdXNlIGl0J3MgdW5kZWZpbmVkIGR1cmluZyBTU1IuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiBlbGVtZW50LmJsdXIpIHtcbiAgICAgICAgICAgIC8vIE5vcm1hbGx5LCBuYXRpdmUgaW5wdXQgZWxlbWVudHMgYXV0b21hdGljYWxseSBibHVyIGlmIHRoZXkgdHVybiBkaXNhYmxlZC4gVGhpcyBiZWhhdmlvclxuICAgICAgICAgICAgLy8gaXMgcHJvYmxlbWF0aWMsIGJlY2F1c2UgaXQgd291bGQgbWVhbiB0aGF0IGl0IHRyaWdnZXJzIGFub3RoZXIgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSxcbiAgICAgICAgICAgIC8vIHdoaWNoIHRoZW4gY2F1c2VzIGEgY2hhbmdlZCBhZnRlciBjaGVja2VkIGVycm9yIGlmIHRoZSBpbnB1dCBlbGVtZW50IHdhcyBmb2N1c2VkIGJlZm9yZS5cbiAgICAgICAgICAgIGVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gYSBgY2hhbmdlYCBldmVudCBpcyBmaXJlZCBvbiB0aGlzIGA8aW5wdXQ+YC4gKi9cbiAgICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lUGlja2VySW5wdXRFdmVudDxEPj4gPVxuICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lUGlja2VySW5wdXRFdmVudDxEPj4oKTtcblxuICAgIC8qKiBFbWl0cyB3aGVuIGFuIGBpbnB1dGAgZXZlbnQgaXMgZmlyZWQgb24gdGhpcyBgPGlucHV0PmAuICovXG4gICAgQE91dHB1dCgpIHJlYWRvbmx5IGRhdGVJbnB1dDogRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lUGlja2VySW5wdXRFdmVudDxEPj4gPVxuICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lUGlja2VySW5wdXRFdmVudDxEPj4oKTtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChlaXRoZXIgZHVlIHRvIHVzZXIgaW5wdXQgb3IgcHJvZ3JhbW1hdGljIGNoYW5nZSkuICovXG4gICAgX3ZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEIHwgbnVsbD4oKTtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0ZSBoYXMgY2hhbmdlZCAqL1xuICAgIF9kaXNhYmxlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgICBwcml2YXRlIF9jdmFPbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgICBwcml2YXRlIF92YWxpZGF0b3JPbkNoYW5nZSA9ICgpID0+IHsgfTtcblxuICAgIHByaXZhdGUgX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgICBwcml2YXRlIF9sb2NhbGVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHdoZXRoZXIgdGhlIGlucHV0IHBhcnNlcy4gKi9cbiAgICBwcml2YXRlIF9wYXJzZVZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdFZhbHVlVmFsaWQgP1xuICAgICAgICAgICAgbnVsbCA6IHsgJ21hdERhdGV0aW1lUGlja2VyUGFyc2UnOiB7ICd0ZXh0JzogdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlIH0gfTtcbiAgICB9XG5cbiAgICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHRoZSBtaW4gZGF0ZS4gKi9cbiAgICBwcml2YXRlIF9taW5WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcbiAgICAgICAgcmV0dXJuICghdGhpcy5taW4gfHwgIWNvbnRyb2xWYWx1ZSB8fFxuICAgICAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGVXaXRoVGltZSh0aGlzLm1pbiwgY29udHJvbFZhbHVlLCB0aGlzLl9kYXRlcGlja2VyLnNob3dTZWNvbmRzKSA8PSAwKSA/XG4gICAgICAgICAgICBudWxsIDogeyAnbWF0RGF0ZXRpbWVQaWNrZXJNaW4nOiB7ICdtaW4nOiB0aGlzLm1pbiwgJ2FjdHVhbCc6IGNvbnRyb2xWYWx1ZSB9IH07XG4gICAgfVxuXG4gICAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB0aGUgbWF4IGRhdGUuICovXG4gICAgcHJpdmF0ZSBfbWF4VmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IHRoaXMuX2dldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZShjb250cm9sLnZhbHVlKSk7XG4gICAgICAgIHJldHVybiAoIXRoaXMubWF4IHx8ICFjb250cm9sVmFsdWUgfHxcbiAgICAgICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmNvbXBhcmVEYXRlV2l0aFRpbWUodGhpcy5tYXgsIGNvbnRyb2xWYWx1ZSwgdGhpcy5fZGF0ZXBpY2tlci5zaG93U2Vjb25kcykgPj0gMCkgP1xuICAgICAgICAgICAgbnVsbCA6IHsgJ21hdERhdGV0aW1lUGlja2VyTWF4JzogeyAnbWF4JzogdGhpcy5tYXgsICdhY3R1YWwnOiBjb250cm9sVmFsdWUgfSB9O1xuICAgIH1cblxuICAgIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIGRhdGUgZmlsdGVyLiAqL1xuICAgIHByaXZhdGUgX2ZpbHRlclZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sVmFsdWUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUoY29udHJvbC52YWx1ZSkpO1xuICAgICAgICByZXR1cm4gIXRoaXMuX2RhdGVGaWx0ZXIgfHwgIWNvbnRyb2xWYWx1ZSB8fCB0aGlzLl9kYXRlRmlsdGVyKGNvbnRyb2xWYWx1ZSkgP1xuICAgICAgICAgICAgbnVsbCA6IHsgJ21hdERhdGV0aW1lUGlja2VyRmlsdGVyJzogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8qKiBUaGUgY29tYmluZWQgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhpcyBpbnB1dC4gKi9cbiAgICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgbnVsbCA9XG4gICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShcbiAgICAgICAgICAgIFt0aGlzLl9wYXJzZVZhbGlkYXRvciwgdGhpcy5fbWluVmFsaWRhdG9yLCB0aGlzLl9tYXhWYWxpZGF0b3IsIHRoaXMuX2ZpbHRlclZhbGlkYXRvcl0pO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGxhc3QgdmFsdWUgc2V0IG9uIHRoZSBpbnB1dCB3YXMgdmFsaWQuICovXG4gICAgcHJpdmF0ZSBfbGFzdFZhbHVlVmFsaWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2RhdGVBZGFwdGVyOiBOZ3hNYXREYXRlQWRhcHRlcjxEPixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChOR1hfTUFUX0RBVEVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE5neE1hdERhdGVGb3JtYXRzLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9mb3JtRmllbGQ6IE1hdEZvcm1GaWVsZCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcignTmd4TWF0RGF0ZUFkYXB0ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XG4gICAgICAgICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcignTkdYX01BVF9EQVRFX0ZPUk1BVFMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGRhdGUgd2hlbiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gICAgICAgIHRoaXMuX2xvY2FsZVN1YnNjcmlwdGlvbiA9IF9kYXRlQWRhcHRlci5sb2NhbGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IgPyB0aGlzLl92YWxpZGF0b3IoYykgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBVc2UgYGdldENvbm5lY3RlZE92ZXJsYXlPcmlnaW5gIGluc3RlYWRcbiAgICAgKi9cbiAgICBnZXRQb3B1cENvbm5lY3Rpb25FbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZWxlbWVudCB0aGF0IHRoZSBkYXRlcGlja2VyIHBvcHVwIHNob3VsZCBiZSBjb25uZWN0ZWQgdG8uXG4gICAgICogQHJldHVybiBUaGUgZWxlbWVudCB0byBjb25uZWN0IHRoZSBwb3B1cCB0by5cbiAgICAgKi9cbiAgICBnZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCk6IEVsZW1lbnRSZWYge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybUZpZWxkID8gdGhpcy5fZm9ybUZpZWxkLmdldENvbm5lY3RlZE92ZXJsYXlPcmlnaW4oKSA6IHRoaXMuX2VsZW1lbnRSZWY7XG4gICAgfVxuXG4gICAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBEKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2N2YU9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBfb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlzQWx0RG93bkFycm93ID0gZXZlbnQuYWx0S2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IERPV05fQVJST1c7XG5cbiAgICAgICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIgJiYgaXNBbHREb3duQXJyb3cgJiYgIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZWFkT25seSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlci5vcGVuKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uSW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsYXN0VmFsdWVXYXNWYWxpZCA9IHRoaXMuX2xhc3RWYWx1ZVZhbGlkO1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLnBhcnNlKHZhbHVlLCB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5kYXRlSW5wdXQpO1xuICAgICAgICB0aGlzLl9sYXN0VmFsdWVWYWxpZCA9ICFkYXRlIHx8IHRoaXMuX2RhdGVBZGFwdGVyLmlzVmFsaWQoZGF0ZSk7XG4gICAgICAgIGRhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgaXNTYW1lVGltZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmlzU2FtZVRpbWUoZGF0ZSwgdGhpcy5fdmFsdWUpO1xuXG4gICAgICAgIGlmICgoZGF0ZSAhPSBudWxsICYmICghaXNTYW1lVGltZSB8fCAhdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUoZGF0ZSwgdGhpcy5fdmFsdWUpKSlcbiAgICAgICAgICAgIHx8IChkYXRlID09IG51bGwgJiYgdGhpcy5fdmFsdWUgIT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX2N2YU9uQ2hhbmdlKGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUlucHV0LmVtaXQobmV3IE1hdERhdGV0aW1lUGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0VmFsdWVXYXNWYWxpZCAhPT0gdGhpcy5fbGFzdFZhbHVlVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBNYXREYXRldGltZVBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XG4gICAgfVxuXG4gICAgLyoqIFJldHVybnMgdGhlIHBhbGV0dGUgdXNlZCBieSB0aGUgaW5wdXQncyBmb3JtIGZpZWxkLCBpZiBhbnkuICovXG4gICAgX2dldFRoZW1lUGFsZXR0ZSgpOiBUaGVtZVBhbGV0dGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybUZpZWxkID8gdGhpcy5fZm9ybUZpZWxkLmNvbG9yIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKiBIYW5kbGVzIGJsdXIgZXZlbnRzIG9uIHRoZSBpbnB1dC4gKi9cbiAgICBfb25CbHVyKCkge1xuICAgICAgICAvLyBSZWZvcm1hdCB0aGUgaW5wdXQgb25seSBpZiB3ZSBoYXZlIGEgdmFsaWQgdmFsdWUuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9mb3JtYXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIC8qKiBIYW5kbGVzIGZvY3VzIGV2ZW50cyBvbiB0aGUgaW5wdXQuICovXG4gICAgX29uRm9jdXMoKSB7XG4gICAgICAgIC8vIENsb3NlIGRhdGV0aW1lIHBpY2tlciBpZiBvcGVuZWRcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIgJiYgdGhpcy5fZGF0ZXBpY2tlci5vcGVuZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRm9ybWF0cyBhIHZhbHVlIGFuZCBzZXRzIGl0IG9uIHRoZSBpbnB1dCBlbGVtZW50LiAqL1xuICAgIHByaXZhdGUgX2Zvcm1hdFZhbHVlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPVxuICAgICAgICAgICAgdmFsdWUgPyB0aGlzLl9kYXRlQWRhcHRlci5mb3JtYXQodmFsdWUsIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUlucHV0KSA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVjay5cbiAgICAgKiBAcmV0dXJucyBUaGUgZ2l2ZW4gb2JqZWN0IGlmIGl0IGlzIGJvdGggYSBkYXRlIGluc3RhbmNlIGFuZCB2YWxpZCwgb3RoZXJ3aXNlIG51bGwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2RhdGVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XG4gICAgfVxuXG59XG4iXX0=