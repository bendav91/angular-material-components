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
export class NgxMatTimepickerComponent {
    /**
     * @param {?} _dateAdapter
     * @param {?} cd
     * @param {?} formBuilder
     */
    constructor(_dateAdapter, cd, formBuilder) {
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
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
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
    /**
     * Hour
     * @private
     * @return {?}
     */
    get hour() {
        /** @type {?} */
        let val = Number(this.form.controls['hour'].value);
        return isNaN(val) ? 0 : val;
    }
    ;
    /**
     * @private
     * @return {?}
     */
    get minute() {
        /** @type {?} */
        let val = Number(this.form.controls['minute'].value);
        return isNaN(val) ? 0 : val;
    }
    ;
    /**
     * @private
     * @return {?}
     */
    get second() {
        /** @type {?} */
        let val = Number(this.form.controls['second'].value);
        return isNaN(val) ? 0 : val;
    }
    ;
    /**
     * Whether or not the form is valid
     * @return {?}
     */
    get valid() {
        return this.form.valid;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form.valueChanges.pipe(takeUntil(this._destroyed), debounceTime(400)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this._updateModel();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            this.disabled ? this.form.disable() : this.form.enable();
        }
        this.disableMinute ? this.form.get('minute').disable() : this.form.get('minute').enable();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Writes a new value to the element.
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
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
    }
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Enables or disables the appropriate DOM element
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this.cd.markForCheck();
    }
    /**
     * Format input
     * @param {?} input
     * @return {?}
     */
    formatInput(input) {
        input.value = input.value.replace(NUMERIC_REGEX, '');
    }
    /**
     * Toggle meridian
     * @return {?}
     */
    toggleMeridian() {
        this.meridian = (this.meridian === MERIDIANS.AM) ? MERIDIANS.PM : MERIDIANS.AM;
        this.change('hour');
    }
    /**
     * Change property of time
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    change(prop, up) {
        /** @type {?} */
        const next = this._getNextValueByProp(prop, up);
        this.form.controls[prop].setValue(formatTwoDigitTimeValue(next), { onlySelf: false, emitEvent: false });
        this._updateModel();
    }
    /**
     * Update controls of form by model
     * @private
     * @return {?}
     */
    _updateHourMinuteSecond() {
        /** @type {?} */
        let _hour = this._dateAdapter.getHour(this._model);
        /** @type {?} */
        const _minute = this._dateAdapter.getMinute(this._model);
        /** @type {?} */
        const _second = this._dateAdapter.getSecond(this._model);
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
    }
    /**
     * Update model
     * @private
     * @return {?}
     */
    _updateModel() {
        /** @type {?} */
        let _hour = this.hour;
        if (this.enableMeridian && this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
            _hour = _hour + LIMIT_TIMES.meridian;
        }
        this._dateAdapter.setHour(this._model, _hour);
        this._dateAdapter.setMinute(this._model, this.minute);
        this._dateAdapter.setSecond(this._model, this.second);
        this._onChange(this._model);
    }
    /**
     * Get next value by property
     * @private
     * @param {?} prop
     * @param {?=} up
     * @return {?}
     */
    _getNextValueByProp(prop, up) {
        /** @type {?} */
        const keyProp = prop[0].toUpperCase() + prop.slice(1);
        /** @type {?} */
        const min = LIMIT_TIMES[`min${keyProp}`];
        /** @type {?} */
        let max = LIMIT_TIMES[`max${keyProp}`];
        if (prop === 'hour' && this.enableMeridian) {
            max = LIMIT_TIMES.meridian;
        }
        /** @type {?} */
        let next;
        if (up == null) {
            next = this[prop] % (max);
        }
        else {
            next = up ? this[prop] + this[`step${keyProp}`] : this[prop] - this[`step${keyProp}`];
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
    }
}
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
                        () => NgxMatTimepickerComponent)),
                        multi: true
                    }
                ],
                exportAs: 'ngxMatTimepicker',
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-mat-timepicker{font-size:13px}.ngx-mat-timepicker form{min-width:90px}.ngx-mat-timepicker form .table .tbody tr td{text-align:center}.ngx-mat-timepicker form .table .tbody tr td.spacer{font-weight:700}.ngx-mat-timepicker form .table .tbody tr td.meridian .mat-button{min-width:64px;line-height:36px;border-radius:50%;min-width:0;width:36px;height:36px;padding:0;flex-shrink:0}.ngx-mat-timepicker form .table .tbody tr td .mat-icon-button{height:24px;width:24px;line-height:24px}.ngx-mat-timepicker form .table .tbody tr td .mat-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .table .tbody tr td .mat-form-field{width:20px;max-width:20px;text-align:center}"]
            }] }
];
/** @nocollapse */
NgxMatTimepickerComponent.ctorParameters = () => [
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: FormBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1jb21wb25lbnRzL2RhdGV0aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi90aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSSxPQUFPLEVBQXdCLFdBQVcsRUFBYSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBbUI5TSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUErQ3BDLFlBQStCLFlBQWtDLEVBQ3ZELEVBQXFCLEVBQVUsV0FBd0I7UUFEbEMsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBQ3ZELE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUE1Q3hELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsYUFBUSxHQUFXLFlBQVksQ0FBQztRQUNoQyxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLGVBQVUsR0FBVyxZQUFZLENB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QUFLO29CQUNMLEtBQUs7Ozs7SUFYTix5Q0FBdUI7O0lBRXZCLDZDQUEwQjs7SUFDMUIsaURBQTZCOztJQUM3Qiw2Q0FBeUM7O0lBQ3pDLCtDQUEyQzs7SUFDM0MsK0NBQTJDOztJQUMzQyxnREFBNkI7O0lBQzdCLGtEQUErQjs7SUFDL0IsbURBQWdDOztJQUNoQyxnREFBK0I7O0lBQy9CLDBDQUF5Qzs7SUFFekMsNkNBQXVDOzs7OztJQXVCdkMsOENBQW1DOzs7OztJQUNuQywrQ0FBb0M7Ozs7O0lBQ3BDLDhDQUEyQjs7Ozs7SUFDM0IsMkNBQWtCOzs7OztJQUVsQiwrQ0FBd0Q7O0lBRXhELDRDQUFvQzs7SUFFeEIsaURBQXFEOzs7OztJQUMvRCx1Q0FBNkI7Ozs7O0lBQUUsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ3hNYXREYXRlQWRhcHRlciB9IGZyb20gJy4vY29yZS9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IsIERFRkFVTFRfU1RFUCwgZm9ybWF0VHdvRGlnaXRUaW1lVmFsdWUsIExJTUlUX1RJTUVTLCBNRVJJRElBTlMsIE5VTUVSSUNfUkVHRVgsIFBBVFRFUk5fSU5QVVRfSE9VUiwgUEFUVEVSTl9JTlBVVF9NSU5VVEUsIFBBVFRFUk5fSU5QVVRfU0VDT05EIH0gZnJvbSAnLi91dGlscy9kYXRlLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW1hdC10aW1lcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbmd4LW1hdC10aW1lcGlja2VyJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neE1hdFRpbWVwaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGV4cG9ydEFzOiAnbmd4TWF0VGltZXBpY2tlcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdFRpbWVwaWNrZXJDb21wb25lbnQ8RD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1NwaW5uZXJzID0gdHJ1ZTtcbiAgQElucHV0KCkgc3RlcEhvdXI6IG51bWJlciA9IERFRkFVTFRfU1RFUDtcbiAgQElucHV0KCkgc3RlcE1pbnV0ZTogbnVtYmVyID0gREVGQVVMVF9TVEVQO1xuICBASW5wdXQoKSBzdGVwU2Vjb25kOiBudW1iZXIgPSBERUZBVUxUX1NURVA7XG4gIEBJbnB1dCgpIHNob3dTZWNvbmRzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVNaW51dGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZW5hYmxlTWVyaWRpYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGVmYXVsdFRpbWU6IG51bWJlcltdO1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIHB1YmxpYyBtZXJpZGlhbjogc3RyaW5nID0gTUVSSURJQU5TLkFNO1xuXG4gIC8qKiBIb3VyICovXG4gIHByaXZhdGUgZ2V0IGhvdXIoKSB7XG4gICAgbGV0IHZhbCA9IE51bWJlcih0aGlzLmZvcm0uY29udHJvbHNbJ2hvdXInXS52YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKHZhbCkgPyAwIDogdmFsO1xuICB9O1xuXG4gIHByaXZhdGUgZ2V0IG1pbnV0ZSgpIHtcbiAgICBsZXQgdmFsID0gTnVtYmVyKHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlJ10udmFsdWUpO1xuICAgIHJldHVybiBpc05hTih2YWwpID8gMCA6IHZhbDtcbiAgfTtcblxuICBwcml2YXRlIGdldCBzZWNvbmQoKSB7XG4gICAgbGV0IHZhbCA9IE51bWJlcih0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZCddLnZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4odmFsKSA/IDAgOiB2YWw7XG4gIH07XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBmb3JtIGlzIHZhbGlkICovXG4gIHB1YmxpYyBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWxpZDtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG4gIHByaXZhdGUgX29uVG91Y2hlZDogYW55ID0gKCkgPT4geyB9O1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbW9kZWw6IEQ7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwdWJsaWMgcGF0dGVybiA9IFBBVFRFUk5fSU5QVVRfSE9VUjtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgX2RhdGVBZGFwdGVyOiBOZ3hNYXREYXRlQWRhcHRlcjxEPixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcignTmd4TWF0RGF0ZUFkYXB0ZXInKTtcbiAgICB9XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChcbiAgICAgIHtcbiAgICAgICAgaG91cjogW3sgdmFsdWU6IG51bGwsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIH0sIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oUEFUVEVSTl9JTlBVVF9IT1VSKV1dLFxuICAgICAgICBtaW51dGU6IFt7IHZhbHVlOiBudWxsLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9LCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKFBBVFRFUk5fSU5QVVRfTUlOVVRFKV1dLFxuICAgICAgICBzZWNvbmQ6IFt7IHZhbHVlOiBudWxsLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9LCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKFBBVFRFUk5fSU5QVVRfU0VDT05EKV1dXG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSwgZGVib3VuY2VUaW1lKDQwMCkpLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlTW9kZWwoKTtcbiAgICB9KVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkICYmICFjaGFuZ2VzLmRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID8gdGhpcy5mb3JtLmRpc2FibGUoKSA6IHRoaXMuZm9ybS5lbmFibGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc2FibGVNaW51dGUgPyB0aGlzLmZvcm0uZ2V0KCdtaW51dGUnKS5kaXNhYmxlKCkgOiB0aGlzLmZvcm0uZ2V0KCdtaW51dGUnKS5lbmFibGUoKTtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBvYmpcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsOiBEKTogdm9pZCB7XG4gICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9tb2RlbCA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbW9kZWwgPSB0aGlzLl9kYXRlQWRhcHRlci50b2RheSgpO1xuICAgICAgaWYgKHRoaXMuZGVmYXVsdFRpbWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5zZXRUaW1lQnlEZWZhdWx0VmFsdWVzKHRoaXMuX21vZGVsLCB0aGlzLmRlZmF1bHRUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlSG91ck1pbnV0ZVNlY29uZCgpO1xuICB9XG5cbiAgLyoqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wncyB2YWx1ZSBjaGFuZ2VzIGluIHRoZSBVSS4gKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSB0b3VjaCBldmVudC5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGFwcHJvcHJpYXRlIERPTSBlbGVtZW50ICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBpbnB1dFxuICAgKiBAcGFyYW0gaW5wdXQgXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0SW5wdXQoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoTlVNRVJJQ19SRUdFWCwgJycpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZSBtZXJpZGlhbiAqL1xuICBwdWJsaWMgdG9nZ2xlTWVyaWRpYW4oKSB7XG4gICAgdGhpcy5tZXJpZGlhbiA9ICh0aGlzLm1lcmlkaWFuID09PSBNRVJJRElBTlMuQU0pID8gTUVSSURJQU5TLlBNIDogTUVSSURJQU5TLkFNO1xuICAgIHRoaXMuY2hhbmdlKCdob3VyJyk7XG4gIH1cblxuICAvKiogQ2hhbmdlIHByb3BlcnR5IG9mIHRpbWUgKi9cbiAgcHVibGljIGNoYW5nZShwcm9wOiBzdHJpbmcsIHVwPzogYm9vbGVhbikge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLl9nZXROZXh0VmFsdWVCeVByb3AocHJvcCwgdXApO1xuICAgIHRoaXMuZm9ybS5jb250cm9sc1twcm9wXS5zZXRWYWx1ZShmb3JtYXRUd29EaWdpdFRpbWVWYWx1ZShuZXh0KSwgeyBvbmx5U2VsZjogZmFsc2UsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgdGhpcy5fdXBkYXRlTW9kZWwoKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGUgY29udHJvbHMgb2YgZm9ybSBieSBtb2RlbCAqL1xuICBwcml2YXRlIF91cGRhdGVIb3VyTWludXRlU2Vjb25kKCkge1xuICAgIGxldCBfaG91ciA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldEhvdXIodGhpcy5fbW9kZWwpO1xuICAgIGNvbnN0IF9taW51dGUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRNaW51dGUodGhpcy5fbW9kZWwpO1xuICAgIGNvbnN0IF9zZWNvbmQgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRTZWNvbmQodGhpcy5fbW9kZWwpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlTWVyaWRpYW4pIHtcbiAgICAgIGlmIChfaG91ciA+IExJTUlUX1RJTUVTLm1lcmlkaWFuKSB7XG4gICAgICAgIF9ob3VyID0gX2hvdXIgLSBMSU1JVF9USU1FUy5tZXJpZGlhbjtcbiAgICAgICAgdGhpcy5tZXJpZGlhbiA9IE1FUklESUFOUy5QTTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWVyaWRpYW4gPSBNRVJJRElBTlMuQU07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzWydob3VyJ10uc2V0VmFsdWUoZm9ybWF0VHdvRGlnaXRUaW1lVmFsdWUoX2hvdXIpKTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbJ21pbnV0ZSddLnNldFZhbHVlKGZvcm1hdFR3b0RpZ2l0VGltZVZhbHVlKF9taW51dGUpKTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZCddLnNldFZhbHVlKGZvcm1hdFR3b0RpZ2l0VGltZVZhbHVlKF9zZWNvbmQpKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGUgbW9kZWwgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlTW9kZWwoKSB7XG4gICAgbGV0IF9ob3VyID0gdGhpcy5ob3VyO1xuICAgIGlmICh0aGlzLmVuYWJsZU1lcmlkaWFuICYmIHRoaXMubWVyaWRpYW4gPT09IE1FUklESUFOUy5QTSAmJiBfaG91ciAhPT0gTElNSVRfVElNRVMubWVyaWRpYW4pIHtcbiAgICAgIF9ob3VyID0gX2hvdXIgKyBMSU1JVF9USU1FUy5tZXJpZGlhbjtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlQWRhcHRlci5zZXRIb3VyKHRoaXMuX21vZGVsLCBfaG91cik7XG4gICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0TWludXRlKHRoaXMuX21vZGVsLCB0aGlzLm1pbnV0ZSk7XG4gICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0U2Vjb25kKHRoaXMuX21vZGVsLCB0aGlzLnNlY29uZCk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fbW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IHZhbHVlIGJ5IHByb3BlcnR5XG4gICAqIEBwYXJhbSBwcm9wIFxuICAgKiBAcGFyYW0gdXBcbiAgICovXG4gIHByaXZhdGUgX2dldE5leHRWYWx1ZUJ5UHJvcChwcm9wOiBzdHJpbmcsIHVwPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgY29uc3Qga2V5UHJvcCA9IHByb3BbMF0udG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XG4gICAgY29uc3QgbWluID0gTElNSVRfVElNRVNbYG1pbiR7a2V5UHJvcH1gXTtcbiAgICBsZXQgbWF4ID0gTElNSVRfVElNRVNbYG1heCR7a2V5UHJvcH1gXTtcblxuICAgIGlmIChwcm9wID09PSAnaG91cicgJiYgdGhpcy5lbmFibGVNZXJpZGlhbikge1xuICAgICAgbWF4ID0gTElNSVRfVElNRVMubWVyaWRpYW47XG4gICAgfVxuXG4gICAgbGV0IG5leHQ7XG4gICAgaWYgKHVwID09IG51bGwpIHtcbiAgICAgIG5leHQgPSB0aGlzW3Byb3BdICUgKG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQgPSB1cCA/IHRoaXNbcHJvcF0gKyB0aGlzW2BzdGVwJHtrZXlQcm9wfWBdIDogdGhpc1twcm9wXSAtIHRoaXNbYHN0ZXAke2tleVByb3B9YF07XG4gICAgICBpZiAocHJvcCA9PT0gJ2hvdXInICYmIHRoaXMuZW5hYmxlTWVyaWRpYW4pIHtcbiAgICAgICAgbmV4dCA9IG5leHQgJSAobWF4ICsgMSk7XG4gICAgICAgIGlmIChuZXh0ID09PSAwKSBuZXh0ID0gdXAgPyAxIDogbWF4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCA9IG5leHQgJSBtYXg7XG4gICAgICB9XG4gICAgICBpZiAodXApIHtcbiAgICAgICAgbmV4dCA9IG5leHQgPiBtYXggPyAobmV4dCAtIG1heCArIG1pbikgOiBuZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCA9IG5leHQgPCBtaW4gPyAobmV4dCAtIG1pbiArIG1heCkgOiBuZXh0O1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxufVxuIl19