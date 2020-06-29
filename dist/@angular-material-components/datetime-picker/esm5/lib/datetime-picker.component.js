/**
 * @fileoverview added by tsickle
 * Generated from: lib/datetime-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { mixinColor } from '@angular/material/core';
import { matDatepickerAnimations, MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { NgxMatDateAdapter } from './core/date-adapter';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { NgxMatCalendar } from './calendar';
import { createMissingDateImplError, DEFAULT_STEP } from './utils/date-utils';
import { NgxMatTimepickerComponent } from './timepicker.component';
/**
 * Used to generate a unique ID for each datepicker instance.
 * @type {?}
 */
var datepickerUid = 0;
// Boilerplate for applying mixins to MatDatepickerContent.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatDatepickerContent.
/**
 * \@docs-private
 */
MatDatepickerContentBase = /** @class */ (function () {
    function MatDatepickerContentBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatDatepickerContentBase;
}());
if (false) {
    /** @type {?} */
    MatDatepickerContentBase.prototype._elementRef;
}
/** @type {?} */
var _MatDatepickerContentMixinBase = mixinColor(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * NgxMatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
var NgxMatDatetimeContent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxMatDatetimeContent, _super);
    function NgxMatDatetimeContent(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    Object.defineProperty(NgxMatDatetimeContent.prototype, "valid", {
        /** Whether or not the selected date is valid (min,max...) */
        get: /**
         * Whether or not the selected date is valid (min,max...)
         * @return {?}
         */
        function () {
            if (this.datepicker.hideTime)
                return this.datepicker.valid;
            return this._timePicker && this._timePicker.valid && this.datepicker.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimeContent.prototype, "isViewMonth", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._calendar || this._calendar.currentView == null)
                return true;
            return this._calendar.currentView == 'month';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMatDatetimeContent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._calendar.focusActiveCell();
    };
    NgxMatDatetimeContent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-mat-datetime-content',
                    template: "<ngx-mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [ngClass]=\"datepicker.panelClass\" [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\"\n    [dateFilter]=\"datepicker._dateFilter\" [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"datepicker._selected\" [dateClass]=\"datepicker.dateClass\" [@fadeInCalendar]=\"'enter'\"\n    (selectedChange)=\"datepicker.select($event)\" (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\">\n</ngx-mat-calendar>\n<ng-container *ngIf=\"isViewMonth\">\n    <div *ngIf=\"!datepicker._hideTime\" class=\"time-container\" [class.disable-seconds]=\"!datepicker._showSeconds\">\n        <ngx-mat-timepicker [showSpinners]=\"datepicker._showSpinners\" [showSeconds]=\"datepicker._showSeconds\"\n            [disabled]=\"datepicker._disabled\" [stepHour]=\"datepicker._stepHour\" [stepMinute]=\"datepicker._stepMinute\"\n            [stepSecond]=\"datepicker._stepSecond\" [(ngModel)]=\"datepicker._selected\" [color]=\"datepicker._color\"\n            [enableMeridian]=\"datepicker._enableMeridian\" [disableMinute]=\"datepicker._disableMinute\">\n        </ngx-mat-timepicker>\n    </div>\n    <div class=\"actions\">\n        <button mat-button (click)=\"datepicker.ok()\" mat-stroked-button [color]=\"datepicker._color\" cdkFocusInitial\n            [disabled]=\"!valid\">\n            <mat-icon>done</mat-icon>\n        </button>\n    </div>\n</ng-container>",
                    host: {
                        'class': 'mat-datepicker-content',
                        '[@transformPanel]': '"enter"',
                        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                    },
                    animations: [
                        matDatepickerAnimations.transformPanel,
                        matDatepickerAnimations.fadeInCalendar,
                    ],
                    exportAs: 'ngxMatDatetimeContent',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    inputs: ['color'],
                    styles: [".mat-datepicker-content{display:block;border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-datepicker-content .mat-calendar{width:296px}.mat-datepicker-content .time-container{display:flex;position:relative;padding-top:5px;justify-content:center}.mat-datepicker-content .time-container.disable-seconds .ngx-mat-timepicker .table{margin-left:9px}.mat-datepicker-content .time-container::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background-color:rgba(0,0,0,.12)}.mat-datepicker-content .actions{display:flex;padding:5px 15px 10px;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    NgxMatDatetimeContent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NgxMatDatetimeContent.propDecorators = {
        _calendar: [{ type: ViewChild, args: [NgxMatCalendar,] }],
        _timePicker: [{ type: ViewChild, args: [NgxMatTimepickerComponent,] }]
    };
    return NgxMatDatetimeContent;
}(_MatDatepickerContentMixinBase));
export { NgxMatDatetimeContent };
if (false) {
    /**
     * Reference to the internal calendar component.
     * @type {?}
     */
    NgxMatDatetimeContent.prototype._calendar;
    /**
     * Reference to the internal time picker component.
     * @type {?}
     */
    NgxMatDatetimeContent.prototype._timePicker;
    /**
     * Reference to the datepicker that created the overlay.
     * @type {?}
     */
    NgxMatDatetimeContent.prototype.datepicker;
    /**
     * Whether the datepicker is above or below the input.
     * @type {?}
     */
    NgxMatDatetimeContent.prototype._isAbove;
}
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/**
 * Component responsible for managing the datepicker popup/dialog.
 * @template D
 */
var NgxMatDatetimePicker = /** @class */ (function () {
    function NgxMatDatetimePicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
        var _this = this;
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        this._touchUi = false;
        this._hideTime = false;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new EventEmitter();
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new EventEmitter();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new EventEmitter();
        this._opened = false;
        this._showSpinners = true;
        this._showSeconds = false;
        this._stepHour = DEFAULT_STEP;
        this._stepMinute = DEFAULT_STEP;
        this._stepSecond = DEFAULT_STEP;
        this._enableMeridian = false;
        this._hasBackdrop = true;
        /**
         * The id for the datepicker calendar.
         */
        this.id = "mat-datepicker-" + datepickerUid++;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */
        this._inputSubscription = Subscription.EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new Subject();
        /**
         * Emits new selected date when selected date changes.
         */
        this._selectedChanged = new Subject();
        /**
         * The form control validator for the min date.
         */
        this._minValidator = (/**
         * @return {?}
         */
        function () {
            return (!_this._minDate || !_this._selected ||
                _this._dateAdapter.compareDateWithTime(_this._minDate, _this._selected, _this.showSeconds) <= 0) ?
                null : { 'matDatetimePickerMin': { 'min': _this._minDate, 'actual': _this._selected } };
        });
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = (/**
         * @return {?}
         */
        function () {
            return (!_this._maxDate || !_this._selected ||
                _this._dateAdapter.compareDateWithTime(_this._maxDate, _this._selected, _this.showSeconds) >= 0) ?
                null : { 'matDatetimePickerMax': { 'max': _this._maxDate, 'actual': _this._selected } };
        });
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(NgxMatDatetimePicker.prototype, "startAt", {
        /** The date to open the calendar to initially. */
        get: /**
         * The date to open the calendar to initially.
         * @return {?}
         */
        function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "color", {
        /** Color palette to use on the datepicker's calendar. */
        get: /**
         * Color palette to use on the datepicker's calendar.
         * @return {?}
         */
        function () {
            return this._color ||
                (this._datepickerInput ? this._datepickerInput._getThemePalette() : 'primary');
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "touchUi", {
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         */
        get: /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */
        function () { return this._touchUi; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._touchUi = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "hideTime", {
        get: /**
         * @return {?}
         */
        function () { return this._hideTime; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideTime = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "disabled", {
        /** Whether the datepicker pop-up should be disabled. */
        get: /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = coerceBooleanProperty(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "opened", {
        /** Whether the calendar is open. */
        get: /**
         * Whether the calendar is open.
         * @return {?}
         */
        function () { return this._opened; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { value ? this.open() : this.close(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "showSpinners", {
        /** Whether the timepicker'spinners is shown. */
        get: /**
         * Whether the timepicker'spinners is shown.
         * @return {?}
         */
        function () { return this._showSpinners; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._showSpinners = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "showSeconds", {
        /** Whether the second part is disabled. */
        get: /**
         * Whether the second part is disabled.
         * @return {?}
         */
        function () { return this._showSeconds; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._showSeconds = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "stepHour", {
        /** Step hour */
        get: /**
         * Step hour
         * @return {?}
         */
        function () { return this._stepHour; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._stepHour = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "stepMinute", {
        /** Step minute */
        get: /**
         * Step minute
         * @return {?}
         */
        function () { return this._stepMinute; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._stepMinute = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "stepSecond", {
        /** Step second */
        get: /**
         * Step second
         * @return {?}
         */
        function () { return this._stepSecond; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._stepSecond = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "enableMeridian", {
        /** Enable meridian */
        get: /**
         * Enable meridian
         * @return {?}
         */
        function () { return this._enableMeridian; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._enableMeridian = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "disableMinute", {
        /** disable minute */
        get: /**
         * disable minute
         * @return {?}
         */
        function () { return this._disableMinute; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disableMinute = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "defaultTime", {
        /** Step second */
        get: /**
         * Step second
         * @return {?}
         */
        function () { return this._defaultTime; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._defaultTime = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "_selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._validSelected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._validSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var minValidators = this._minValidator();
            /** @type {?} */
            var maxValidators = this._maxValidator();
            return minValidators == null && maxValidators == null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatDatetimePicker.prototype, "_dateFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMatDatetimePicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
    };
    /** Selects the given date */
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    NgxMatDatetimePicker.prototype.select = /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this._dateAdapter.copyTime(date, this._selected);
        this._selected = date;
    };
    /** Emits the selected year in multiyear view */
    /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._selectYear = /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /** Emits selected month in year view */
    /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._selectMonth = /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    /** OK button handler and close*/
    /**
     * OK button handler and close
     * @return {?}
     */
    NgxMatDatetimePicker.prototype.ok = /**
     * OK button handler and close
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cloned = this._dateAdapter.clone(this._selected);
        this._selectedChanged.next(cloned);
        this.close();
    };
    /** Cancel and close */
    /**
     * Cancel and close
     * @return {?}
     */
    NgxMatDatetimePicker.prototype.cancel = /**
     * Cancel and close
     * @return {?}
     */
    function () {
        this._selected = this._rawValue;
        this.close();
    };
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._registerInput = /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error('A NgxMatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return _this._selected = value; }));
    };
    /** Open the calendar. */
    /**
     * Open the calendar.
     * @return {?}
     */
    NgxMatDatetimePicker.prototype.open = /**
     * Open the calendar.
     * @return {?}
     */
    function () {
        this._rawValue = this._selected != null
            ? this._dateAdapter.clone(this._selected) : null;
        if (this._selected == null) {
            this._selected = this._dateAdapter.today();
            if (this.defaultTime != null) {
                this._dateAdapter.setTimeByDefaultValues(this._selected, this.defaultTime);
            }
        }
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error('Attempted to open an NgxMatDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    };
    /** Close the calendar. */
    /**
     * Close the calendar.
     * @return {?}
     */
    NgxMatDatetimePicker.prototype.close = /**
     * Close the calendar.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        /** @type {?} */
        var completeClose = (/**
         * @return {?}
         */
        function () {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this._opened) {
                _this._opened = false;
                _this.closedStream.emit();
                _this._focusedElementBeforeOpen = null;
            }
        });
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    };
    /** Open the calendar as a dialog. */
    /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._openAsDialog = /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(NgxMatDatetimeContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
            hasBackdrop: this._hasBackdrop
        });
        this._dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
        this._dialogRef.componentInstance.datepicker = this;
        this._setColor();
    };
    /** Open the calendar as a popup. */
    /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._openAsPopup = /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new ComponentPortal(NgxMatDatetimeContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
            this._popupComponentRef.instance.datepicker = this;
            this._setColor();
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._popupRef.updatePosition();
            }));
        }
    };
    /** Create the popup. */
    /**
     * Create the popup.
     * @private
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._createPopup = /**
     * Create the popup.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: this._hasBackdrop,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === ESCAPE ||
                (_this._datepickerInput && event.altKey && event.keyCode === UP_ARROW);
        })))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event) {
                event.preventDefault();
            }
            (_this._hasBackdrop && event) ? _this.cancel() : _this.close();
        }));
    };
    /** Create the popup PositionStrategy. */
    /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._createPopupPositionStrategy = /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    function () {
        return this._overlay.position()
            .flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
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
    NgxMatDatetimePicker.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Passes the current theme color along to the calendar overlay. */
    /**
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    NgxMatDatetimePicker.prototype._setColor = /**
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    };
    NgxMatDatetimePicker.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-mat-datetime-picker',
                    template: '',
                    exportAs: 'ngxMatDatetimePicker',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NgxMatDatetimePicker.ctorParameters = function () { return [
        { type: MatDialog },
        { type: Overlay },
        { type: NgZone },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
        { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NgxMatDatetimePicker.propDecorators = {
        calendarHeaderComponent: [{ type: Input }],
        startAt: [{ type: Input }],
        startView: [{ type: Input }],
        color: [{ type: Input }],
        touchUi: [{ type: Input }],
        hideTime: [{ type: Input }],
        disabled: [{ type: Input }],
        yearSelected: [{ type: Output }],
        monthSelected: [{ type: Output }],
        panelClass: [{ type: Input }],
        dateClass: [{ type: Input }],
        openedStream: [{ type: Output, args: ['opened',] }],
        closedStream: [{ type: Output, args: ['closed',] }],
        opened: [{ type: Input }],
        showSpinners: [{ type: Input }],
        showSeconds: [{ type: Input }],
        stepHour: [{ type: Input }],
        stepMinute: [{ type: Input }],
        stepSecond: [{ type: Input }],
        enableMeridian: [{ type: Input }],
        disableMinute: [{ type: Input }],
        defaultTime: [{ type: Input }]
    };
    return NgxMatDatetimePicker;
}());
export { NgxMatDatetimePicker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._scrollStrategy;
    /**
     * An input indicating the type of the custom header component for the calendar, if set.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.calendarHeaderComponent;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._startAt;
    /**
     * The view that the calendar should start in.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.startView;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._color;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._touchUi;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._hideTime;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._disabled;
    /**
     * Emits selected year in multiyear view.
     * This doesn't imply a change on the selected date.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.yearSelected;
    /**
     * Emits selected month in year view.
     * This doesn't imply a change on the selected date.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.monthSelected;
    /**
     * Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.panelClass;
    /**
     * Function that can be used to add custom CSS classes to dates.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.dateClass;
    /**
     * Emits when the datepicker has been opened.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.openedStream;
    /**
     * Emits when the datepicker has been closed.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.closedStream;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._opened;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._showSpinners;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._showSeconds;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._stepHour;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._stepMinute;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._stepSecond;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._enableMeridian;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._disableMinute;
    /** @type {?} */
    NgxMatDatetimePicker.prototype._defaultTime;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._hasBackdrop;
    /**
     * The id for the datepicker calendar.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype.id;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._validSelected;
    /**
     * A reference to the overlay when the calendar is opened as a popup.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype._popupRef;
    /**
     * A reference to the dialog when the calendar is opened as a dialog.
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._dialogRef;
    /**
     * A portal containing the calendar for this datepicker.
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._calendarPortal;
    /**
     * Reference to the component instantiated in popup mode.
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._popupComponentRef;
    /**
     * The element that was focused before the datepicker was opened.
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._focusedElementBeforeOpen;
    /**
     * Subscription to value changes in the associated input element.
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._inputSubscription;
    /**
     * The input element this datepicker is associated with.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype._datepickerInput;
    /**
     * Emits when the datepicker is disabled.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype._disabledChange;
    /**
     * Emits new selected date when selected date changes.
     * @type {?}
     */
    NgxMatDatetimePicker.prototype._selectedChanged;
    /**
     * Raw value before
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._rawValue;
    /**
     * The form control validator for the min date.
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._minValidator;
    /**
     * The form control validator for the max date.
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._maxValidator;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._dialog;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    NgxMatDatetimePicker.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvZGF0ZXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFnRCxNQUFNLHNCQUFzQixDQUFDO0FBQzVHLE9BQU8sRUFBRSxlQUFlLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBaUIsdUJBQXVCLEVBQUUsU0FBUyxFQUFnQixVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlOLE9BQU8sRUFBMEIsVUFBVSxFQUFnQixNQUFNLHdCQUF3QixDQUFDO0FBQzFGLE9BQU8sRUFBNkIsdUJBQXVCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsSSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxP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QUdsRCxnREFBNkM7Ozs7OztJQUc3Qyx5Q0FBcUI7Ozs7OztJQTZCckIsNkNBSUM7Ozs7OztJQUdELDZDQUlDOzs7OztJQXRDVyx1Q0FBMEI7Ozs7O0lBQ3BDLHdDQUF5Qjs7Ozs7SUFDekIsdUNBQXVCOzs7OztJQUN2QixpREFBMkM7Ozs7O0lBRTNDLDRDQUFzRDs7Ozs7SUFDdEQsb0NBQXdDOzs7OztJQUN4Qyx5Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRVNDQVBFLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmLCBQb3NpdGlvblN0cmF0ZWd5LCBTY3JvbGxTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5Db2xvciwgQ2FuQ29sb3JDdG9yLCBtaXhpbkNvbG9yLCBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMsIG1hdERhdGVwaWNrZXJBbmltYXRpb25zLCBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE5neE1hdERhdGVBZGFwdGVyIH0gZnJvbSAnLi9jb3JlL2RhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ3hNYXRDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZXRpbWVJbnB1dCB9IGZyb20gJy4vZGF0ZXRpbWUtaW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IsIERFRkFVTFRfU1RFUCB9IGZyb20gJy4vdXRpbHMvZGF0ZS11dGlscyc7XG5pbXBvcnQgeyBOZ3hNYXRUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogVXNlZCB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZWFjaCBkYXRlcGlja2VyIGluc3RhbmNlLiAqL1xubGV0IGRhdGVwaWNrZXJVaWQgPSAwO1xuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE1hdERhdGVwaWNrZXJDb250ZW50LlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE1hdERhdGVwaWNrZXJDb250ZW50QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG59XG5jb25zdCBfTWF0RGF0ZXBpY2tlckNvbnRlbnRNaXhpbkJhc2U6IENhbkNvbG9yQ3RvciAmIHR5cGVvZiBNYXREYXRlcGlja2VyQ29udGVudEJhc2UgPVxuICBtaXhpbkNvbG9yKE1hdERhdGVwaWNrZXJDb250ZW50QmFzZSk7XG5cbi8qKlxuICogQ29tcG9uZW50IHVzZWQgYXMgdGhlIGNvbnRlbnQgZm9yIHRoZSBkYXRlcGlja2VyIGRpYWxvZyBhbmQgcG9wdXAuIFdlIHVzZSB0aGlzIGluc3RlYWQgb2YgdXNpbmdcbiAqIE5neE1hdENhbGVuZGFyIGRpcmVjdGx5IGFzIHRoZSBjb250ZW50IHNvIHdlIGNhbiBjb250cm9sIHRoZSBpbml0aWFsIGZvY3VzLiBUaGlzIGFsc28gZ2l2ZXMgdXMgYVxuICogcGxhY2UgdG8gcHV0IGFkZGl0aW9uYWwgZmVhdHVyZXMgb2YgdGhlIHBvcHVwIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBjYWxlbmRhciBpdHNlbGYgaW4gdGhlXG4gKiBmdXR1cmUuIChlLmcuIGNvbmZpcm1hdGlvbiBidXR0b25zKS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1kYXRldGltZS1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRldGltZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGV0aW1lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZGF0ZXBpY2tlci1jb250ZW50JyxcbiAgICAnW0B0cmFuc2Zvcm1QYW5lbF0nOiAnXCJlbnRlclwiJyxcbiAgICAnW2NsYXNzLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2hdJzogJ2RhdGVwaWNrZXIudG91Y2hVaScsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBtYXREYXRlcGlja2VyQW5pbWF0aW9ucy50cmFuc2Zvcm1QYW5lbCxcbiAgICBtYXREYXRlcGlja2VyQW5pbWF0aW9ucy5mYWRlSW5DYWxlbmRhcixcbiAgXSxcbiAgZXhwb3J0QXM6ICduZ3hNYXREYXRldGltZUNvbnRlbnQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ2NvbG9yJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdERhdGV0aW1lQ29udGVudDxEPiBleHRlbmRzIF9NYXREYXRlcGlja2VyQ29udGVudE1peGluQmFzZVxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENhbkNvbG9yIHtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBpbnRlcm5hbCBjYWxlbmRhciBjb21wb25lbnQuICovXG4gIEBWaWV3Q2hpbGQoTmd4TWF0Q2FsZW5kYXIpIF9jYWxlbmRhcjogTmd4TWF0Q2FsZW5kYXI8RD47XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWwgdGltZSBwaWNrZXIgY29tcG9uZW50LiAqL1xuICBAVmlld0NoaWxkKE5neE1hdFRpbWVwaWNrZXJDb21wb25lbnQpIF90aW1lUGlja2VyOiBOZ3hNYXRUaW1lcGlja2VyQ29tcG9uZW50PEQ+O1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGRhdGVwaWNrZXIgdGhhdCBjcmVhdGVkIHRoZSBvdmVybGF5LiAqL1xuICBkYXRlcGlja2VyOiBOZ3hNYXREYXRldGltZVBpY2tlcjxEPjtcblxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlciBpcyBhYm92ZSBvciBiZWxvdyB0aGUgaW5wdXQuICovXG4gIF9pc0Fib3ZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2VsZWN0ZWQgZGF0ZSBpcyB2YWxpZCAobWluLG1heC4uLikgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGlmKHRoaXMuZGF0ZXBpY2tlci5oaWRlVGltZSkgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci52YWxpZDtcbiAgICByZXR1cm4gdGhpcy5fdGltZVBpY2tlciAmJiB0aGlzLl90aW1lUGlja2VyLnZhbGlkICYmIHRoaXMuZGF0ZXBpY2tlci52YWxpZDtcbiAgfVxuXG4gIGdldCBpc1ZpZXdNb250aCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2NhbGVuZGFyIHx8IHRoaXMuX2NhbGVuZGFyLmN1cnJlbnRWaWV3ID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhci5jdXJyZW50VmlldyA9PSAnbW9udGgnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2NhbGVuZGFyLmZvY3VzQWN0aXZlQ2VsbCgpO1xuICB9XG5cbn1cblxuLy8gVE9ETyhtbWFsZXJiYSk6IFdlIHVzZSBhIGNvbXBvbmVudCBpbnN0ZWFkIG9mIGEgZGlyZWN0aXZlIGhlcmUgc28gdGhlIHVzZXIgY2FuIHVzZSBpbXBsaWNpdFxuLy8gdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlcyAoZS5nLiAjZCB2cyAjZD1cIm1hdERhdGVwaWNrZXJcIikuIFdlIGNhbiBjaGFuZ2UgdGhpcyB0byBhIGRpcmVjdGl2ZVxuLy8gaWYgYW5ndWxhciBhZGRzIHN1cHBvcnQgZm9yIGBleHBvcnRBczogJyRpbXBsaWNpdCdgIG9uIGRpcmVjdGl2ZXMuXG4vKiogQ29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBtYW5hZ2luZyB0aGUgZGF0ZXBpY2tlciBwb3B1cC9kaWFsb2cuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWRhdGV0aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgZXhwb3J0QXM6ICduZ3hNYXREYXRldGltZVBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXREYXRldGltZVBpY2tlcjxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ2FuQ29sb3Ige1xuICBwcml2YXRlIF9zY3JvbGxTdHJhdGVneTogKCkgPT4gU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgLyoqIEFuIGlucHV0IGluZGljYXRpbmcgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBoZWFkZXIgY29tcG9uZW50IGZvciB0aGUgY2FsZW5kYXIsIGlmIHNldC4gKi9cbiAgQElucHV0KCkgY2FsZW5kYXJIZWFkZXJDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PjtcblxuICAvKiogVGhlIGRhdGUgdG8gb3BlbiB0aGUgY2FsZW5kYXIgdG8gaW5pdGlhbGx5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RhcnRBdCgpOiBEIHwgbnVsbCB7XG4gICAgLy8gSWYgYW4gZXhwbGljaXQgc3RhcnRBdCBpcyBzZXQgd2Ugc3RhcnQgdGhlcmUsIG90aGVyd2lzZSB3ZSBzdGFydCBhdCB3aGF0ZXZlciB0aGUgY3VycmVudGx5XG4gICAgLy8gc2VsZWN0ZWQgdmFsdWUgaXMuXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQgfHwgKHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA/IHRoaXMuX2RhdGVwaWNrZXJJbnB1dC52YWx1ZSA6IG51bGwpO1xuICB9XG4gIHNldCBzdGFydEF0KHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9zdGFydEF0OiBEIHwgbnVsbDtcblxuICAvKiogVGhlIHZpZXcgdGhhdCB0aGUgY2FsZW5kYXIgc2hvdWxkIHN0YXJ0IGluLiAqL1xuICBASW5wdXQoKSBzdGFydFZpZXc6ICdtb250aCcgfCAneWVhcicgfCAnbXVsdGkteWVhcicgPSAnbW9udGgnO1xuXG4gIC8qKiBDb2xvciBwYWxldHRlIHRvIHVzZSBvbiB0aGUgZGF0ZXBpY2tlcidzIGNhbGVuZGFyLiAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sb3IoKTogVGhlbWVQYWxldHRlIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3IgfHxcbiAgICAgICh0aGlzLl9kYXRlcGlja2VySW5wdXQgPyB0aGlzLl9kYXRlcGlja2VySW5wdXQuX2dldFRoZW1lUGFsZXR0ZSgpIDogJ3ByaW1hcnknKTtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IFRoZW1lUGFsZXR0ZSkge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cbiAgX2NvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIFVJIGlzIGluIHRvdWNoIG1vZGUuIEluIHRvdWNoIG1vZGUgdGhlIGNhbGVuZGFyIG9wZW5zIGluIGEgZGlhbG9nIHJhdGhlclxuICAgKiB0aGFuIGEgcG9wdXAgYW5kIGVsZW1lbnRzIGhhdmUgbW9yZSBwYWRkaW5nIHRvIGFsbG93IGZvciBiaWdnZXIgdG91Y2ggdGFyZ2V0cy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB0b3VjaFVpKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fdG91Y2hVaTsgfVxuICBzZXQgdG91Y2hVaSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3RvdWNoVWkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3RvdWNoVWkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgaGlkZVRpbWUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9oaWRlVGltZTsgfVxuICBzZXQgaGlkZVRpbWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlVGltZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIF9oaWRlVGltZSA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkYXRlcGlja2VyIHBvcC11cCBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQgP1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0LmRpc2FibGVkIDogISF0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UubmV4dChuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVtaXRzIHNlbGVjdGVkIHllYXIgaW4gbXVsdGl5ZWFyIHZpZXcuXG4gICAqIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcblxuICAvKipcbiAgICogRW1pdHMgc2VsZWN0ZWQgbW9udGggaW4geWVhciB2aWV3LlxuICAgKiBUaGlzIGRvZXNuJ3QgaW1wbHkgYSBjaGFuZ2Ugb24gdGhlIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9udGhTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xuXG4gIC8qKiBDbGFzc2VzIHRvIGJlIHBhc3NlZCB0byB0aGUgZGF0ZSBwaWNrZXIgcGFuZWwuIFN1cHBvcnRzIHRoZSBzYW1lIHN5bnRheCBhcyBgbmdDbGFzc2AuICovXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBjdXN0b20gQ1NTIGNsYXNzZXMgdG8gZGF0ZXMuICovXG4gIEBJbnB1dCgpIGRhdGVDbGFzczogKGRhdGU6IEQpID0+IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXM7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaGFzIGJlZW4gb3BlbmVkLiAqL1xuICBAT3V0cHV0KCdvcGVuZWQnKSBvcGVuZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBoYXMgYmVlbiBjbG9zZWQuICovXG4gIEBPdXRwdXQoJ2Nsb3NlZCcpIGNsb3NlZFN0cmVhbTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIGlzIG9wZW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vcGVuZWQ7IH1cbiAgc2V0IG9wZW5lZCh2YWx1ZTogYm9vbGVhbikgeyB2YWx1ZSA/IHRoaXMub3BlbigpIDogdGhpcy5jbG9zZSgpOyB9XG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSB0aW1lcGlja2VyJ3NwaW5uZXJzIGlzIHNob3duLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd1NwaW5uZXJzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2hvd1NwaW5uZXJzOyB9XG4gIHNldCBzaG93U3Bpbm5lcnModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fc2hvd1NwaW5uZXJzID0gdmFsdWU7IH1cbiAgcHVibGljIF9zaG93U3Bpbm5lcnMgPSB0cnVlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWNvbmQgcGFydCBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNob3dTZWNvbmRzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2hvd1NlY29uZHM7IH1cbiAgc2V0IHNob3dTZWNvbmRzKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX3Nob3dTZWNvbmRzID0gdmFsdWU7IH1cbiAgcHVibGljIF9zaG93U2Vjb25kcyA9IGZhbHNlO1xuXG4gIC8qKiBTdGVwIGhvdXIgKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0ZXBIb3VyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zdGVwSG91cjsgfVxuICBzZXQgc3RlcEhvdXIodmFsdWU6IG51bWJlcikgeyB0aGlzLl9zdGVwSG91ciA9IHZhbHVlOyB9XG4gIHB1YmxpYyBfc3RlcEhvdXI6IG51bWJlciA9IERFRkFVTFRfU1RFUDtcblxuICAvKiogU3RlcCBtaW51dGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0ZXBNaW51dGUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3N0ZXBNaW51dGU7IH1cbiAgc2V0IHN0ZXBNaW51dGUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9zdGVwTWludXRlID0gdmFsdWU7IH1cbiAgcHVibGljIF9zdGVwTWludXRlOiBudW1iZXIgPSBERUZBVUxUX1NURVA7XG5cbiAgLyoqIFN0ZXAgc2Vjb25kICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwU2Vjb25kKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zdGVwU2Vjb25kOyB9XG4gIHNldCBzdGVwU2Vjb25kKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fc3RlcFNlY29uZCA9IHZhbHVlOyB9XG4gIHB1YmxpYyBfc3RlcFNlY29uZDogbnVtYmVyID0gREVGQVVMVF9TVEVQO1xuXG4gIC8qKiBFbmFibGUgbWVyaWRpYW4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGVuYWJsZU1lcmlkaWFuKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZW5hYmxlTWVyaWRpYW47IH1cbiAgc2V0IGVuYWJsZU1lcmlkaWFuKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2VuYWJsZU1lcmlkaWFuID0gdmFsdWU7IH1cbiAgcHVibGljIF9lbmFibGVNZXJpZGlhbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBkaXNhYmxlIG1pbnV0ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZU1pbnV0ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVNaW51dGU7IH1cbiAgc2V0IGRpc2FibGVNaW51dGUodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fZGlzYWJsZU1pbnV0ZSA9IHZhbHVlOyB9XG4gIHB1YmxpYyBfZGlzYWJsZU1pbnV0ZTogYm9vbGVhbjtcblxuICAvKiogU3RlcCBzZWNvbmQgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRlZmF1bHRUaW1lKCk6IG51bWJlcltdIHsgcmV0dXJuIHRoaXMuX2RlZmF1bHRUaW1lOyB9XG4gIHNldCBkZWZhdWx0VGltZSh2YWx1ZTogbnVtYmVyW10pIHsgdGhpcy5fZGVmYXVsdFRpbWUgPSB2YWx1ZTsgfVxuICBwdWJsaWMgX2RlZmF1bHRUaW1lOiBudW1iZXJbXTtcblxuICBwcml2YXRlIF9oYXNCYWNrZHJvcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIFRoZSBpZCBmb3IgdGhlIGRhdGVwaWNrZXIgY2FsZW5kYXIuICovXG4gIGlkOiBzdHJpbmcgPSBgbWF0LWRhdGVwaWNrZXItJHtkYXRlcGlja2VyVWlkKyt9YDtcblxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xuICBnZXQgX3NlbGVjdGVkKCk6IEQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX3ZhbGlkU2VsZWN0ZWQ7IH1cbiAgc2V0IF9zZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHsgdGhpcy5fdmFsaWRTZWxlY3RlZCA9IHZhbHVlOyB9XG4gIHByaXZhdGUgX3ZhbGlkU2VsZWN0ZWQ6IEQgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBnZXQgX21pbkRhdGUoKTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1pbjtcbiAgfVxuXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gIGdldCBfbWF4RGF0ZSgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWF4O1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1pblZhbGlkYXRvcnMgPSB0aGlzLl9taW5WYWxpZGF0b3IoKTtcbiAgICBjb25zdCBtYXhWYWxpZGF0b3JzID0gdGhpcy5fbWF4VmFsaWRhdG9yKCk7XG4gICAgcmV0dXJuIG1pblZhbGlkYXRvcnMgPT0gbnVsbCAmJiBtYXhWYWxpZGF0b3JzID09IG51bGw7XG4gIH1cblxuICBnZXQgX2RhdGVGaWx0ZXIoKTogKGRhdGU6IEQgfCBudWxsKSA9PiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fZGF0ZUZpbHRlcjtcbiAgfVxuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBwb3B1cC4gKi9cbiAgX3BvcHVwUmVmOiBPdmVybGF5UmVmO1xuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgZGlhbG9nIHdoZW4gdGhlIGNhbGVuZGFyIGlzIG9wZW5lZCBhcyBhIGRpYWxvZy4gKi9cbiAgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Tmd4TWF0RGF0ZXRpbWVDb250ZW50PEQ+PiB8IG51bGw7XG5cbiAgLyoqIEEgcG9ydGFsIGNvbnRhaW5pbmcgdGhlIGNhbGVuZGFyIGZvciB0aGlzIGRhdGVwaWNrZXIuICovXG4gIHByaXZhdGUgX2NhbGVuZGFyUG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Tmd4TWF0RGF0ZXRpbWVDb250ZW50PEQ+PjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgaW5zdGFudGlhdGVkIGluIHBvcHVwIG1vZGUuICovXG4gIHByaXZhdGUgX3BvcHVwQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Tmd4TWF0RGF0ZXRpbWVDb250ZW50PEQ+PiB8IG51bGw7XG5cbiAgLyoqIFRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBkYXRlcGlja2VyIHdhcyBvcGVuZWQuICovXG4gIHByaXZhdGUgX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHZhbHVlIGNoYW5nZXMgaW4gdGhlIGFzc29jaWF0ZWQgaW5wdXQgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfaW5wdXRTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHRoaXMgZGF0ZXBpY2tlciBpcyBhc3NvY2lhdGVkIHdpdGguICovXG4gIF9kYXRlcGlja2VySW5wdXQ6IE5neE1hdERhdGV0aW1lSW5wdXQ8RD47XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgZGlzYWJsZWQuICovXG4gIHJlYWRvbmx5IF9kaXNhYmxlZENoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgLyoqIEVtaXRzIG5ldyBzZWxlY3RlZCBkYXRlIHdoZW4gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLiAqL1xuICByZWFkb25seSBfc2VsZWN0ZWRDaGFuZ2VkID0gbmV3IFN1YmplY3Q8RD4oKTtcblxuICAvKiogUmF3IHZhbHVlIGJlZm9yZSAgKi9cbiAgcHJpdmF0ZSBfcmF3VmFsdWU6IEQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBJbmplY3QoTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZKSBzY3JvbGxTdHJhdGVneTogYW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBOZ3hNYXREYXRlQWRhcHRlcjxEPixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcignTmd4TWF0RGF0ZUFkYXB0ZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zY3JvbGxTdHJhdGVneSA9IHNjcm9sbFN0cmF0ZWd5O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuY29tcGxldGUoKTtcblxuICAgIGlmICh0aGlzLl9wb3B1cFJlZikge1xuICAgICAgdGhpcy5fcG9wdXBSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIG1pbiBkYXRlLiAqL1xuICBwcml2YXRlIF9taW5WYWxpZGF0b3IgPSAoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiAoIXRoaXMuX21pbkRhdGUgfHwgIXRoaXMuX3NlbGVjdGVkIHx8XG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZVdpdGhUaW1lKHRoaXMuX21pbkRhdGUsIHRoaXMuX3NlbGVjdGVkLCB0aGlzLnNob3dTZWNvbmRzKSA8PSAwKSA/XG4gICAgICBudWxsIDogeyAnbWF0RGF0ZXRpbWVQaWNrZXJNaW4nOiB7ICdtaW4nOiB0aGlzLl9taW5EYXRlLCAnYWN0dWFsJzogdGhpcy5fc2VsZWN0ZWQgfSB9O1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB0aGUgbWF4IGRhdGUuICovXG4gIHByaXZhdGUgX21heFZhbGlkYXRvciA9ICgpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuICghdGhpcy5fbWF4RGF0ZSB8fCAhdGhpcy5fc2VsZWN0ZWQgfHxcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmNvbXBhcmVEYXRlV2l0aFRpbWUodGhpcy5fbWF4RGF0ZSwgdGhpcy5fc2VsZWN0ZWQsIHRoaXMuc2hvd1NlY29uZHMpID49IDApID9cbiAgICAgIG51bGwgOiB7ICdtYXREYXRldGltZVBpY2tlck1heCc6IHsgJ21heCc6IHRoaXMuX21heERhdGUsICdhY3R1YWwnOiB0aGlzLl9zZWxlY3RlZCB9IH07XG4gIH1cblxuICAvKiogU2VsZWN0cyB0aGUgZ2l2ZW4gZGF0ZSAqL1xuICBzZWxlY3QoZGF0ZTogRCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVBZGFwdGVyLmNvcHlUaW1lKGRhdGUsIHRoaXMuX3NlbGVjdGVkKTtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IGRhdGU7XG4gIH1cblxuICAvKiogRW1pdHMgdGhlIHNlbGVjdGVkIHllYXIgaW4gbXVsdGl5ZWFyIHZpZXcgKi9cbiAgX3NlbGVjdFllYXIobm9ybWFsaXplZFllYXI6IEQpOiB2b2lkIHtcbiAgICB0aGlzLnllYXJTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRZZWFyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBzZWxlY3RlZCBtb250aCBpbiB5ZWFyIHZpZXcgKi9cbiAgX3NlbGVjdE1vbnRoKG5vcm1hbGl6ZWRNb250aDogRCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRNb250aCk7XG4gIH1cblxuICAvKiogT0sgYnV0dG9uIGhhbmRsZXIgYW5kIGNsb3NlKi9cbiAgcHVibGljIG9rKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsb25lZCA9IHRoaXMuX2RhdGVBZGFwdGVyLmNsb25lKHRoaXMuX3NlbGVjdGVkKTtcbiAgICB0aGlzLl9zZWxlY3RlZENoYW5nZWQubmV4dChjbG9uZWQpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKiBDYW5jZWwgYW5kIGNsb3NlICovXG4gIHB1YmxpYyBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9yYXdWYWx1ZTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gaW5wdXQgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXG4gICAqIEBwYXJhbSBpbnB1dCBUaGUgZGF0ZXBpY2tlciBpbnB1dCB0byByZWdpc3RlciB3aXRoIHRoaXMgZGF0ZXBpY2tlci5cbiAgICovXG4gIF9yZWdpc3RlcklucHV0KGlucHV0OiBOZ3hNYXREYXRldGltZUlucHV0PEQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXJJbnB1dCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0EgTmd4TWF0RGF0ZXBpY2tlciBjYW4gb25seSBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uID1cbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fdmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRCB8IG51bGwpID0+IHRoaXMuX3NlbGVjdGVkID0gdmFsdWUpO1xuICB9XG5cbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyLiAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuX3Jhd1ZhbHVlID0gdGhpcy5fc2VsZWN0ZWQgIT0gbnVsbFxuICAgICAgPyB0aGlzLl9kYXRlQWRhcHRlci5jbG9uZSh0aGlzLl9zZWxlY3RlZCkgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKTtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRUaW1lICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0VGltZUJ5RGVmYXVsdFZhbHVlcyh0aGlzLl9zZWxlY3RlZCwgdGhpcy5kZWZhdWx0VGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wZW5lZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XG4gICAgICB0aHJvdyBFcnJvcignQXR0ZW1wdGVkIHRvIG9wZW4gYW4gTmd4TWF0RGF0ZXBpY2tlciB3aXRoIG5vIGFzc29jaWF0ZWQgaW5wdXQuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gdGhpcy5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoVWkgPyB0aGlzLl9vcGVuQXNEaWFsb2coKSA6IHRoaXMuX29wZW5Bc1BvcHVwKCk7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wZW5lZFN0cmVhbS5lbWl0KCk7XG4gIH1cblxuICAvKiogQ2xvc2UgdGhlIGNhbGVuZGFyLiAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX29wZW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9wdXBSZWYgJiYgdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgdGhpcy5fZGlhbG9nUmVmID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhbGVuZGFyUG9ydGFsICYmIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmRldGFjaCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBUaGUgYF9vcGVuZWRgIGNvdWxkJ3ZlIGJlZW4gcmVzZXQgYWxyZWFkeSBpZlxuICAgICAgLy8gd2UgZ290IHR3byBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbi5cbiAgICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VkU3RyZWFtLmVtaXQoKTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiAmJlxuICAgICAgdHlwZW9mIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3Blbi5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQmVjYXVzZSBJRSBtb3ZlcyBmb2N1cyBhc3luY2hyb25vdXNseSwgd2UgY2FuJ3QgY291bnQgb24gaXQgYmVpbmcgcmVzdG9yZWQgYmVmb3JlIHdlJ3ZlXG4gICAgICAvLyBtYXJrZWQgdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLiBJZiB0aGUgZXZlbnQgZmlyZXMgb3V0IG9mIHNlcXVlbmNlIGFuZCB0aGUgZWxlbWVudCB0aGF0XG4gICAgICAvLyB3ZSdyZSByZWZvY3VzaW5nIG9wZW5zIHRoZSBkYXRlcGlja2VyIG9uIGZvY3VzLCB0aGUgdXNlciBjb3VsZCBiZSBzdHVjayB3aXRoIG5vdCBiZWluZ1xuICAgICAgLy8gYWJsZSB0byBjbG9zZSB0aGUgY2FsZW5kYXIgYXQgYWxsLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBtYWtpbmcgdGhlIGxvZ2ljLCB0aGF0IG1hcmtzXG4gICAgICAvLyB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQsIGFzeW5jIGFzIHdlbGwuXG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMoKTtcbiAgICAgIHNldFRpbWVvdXQoY29tcGxldGVDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBkaWFsb2cuICovXG4gIHByaXZhdGUgX29wZW5Bc0RpYWxvZygpOiB2b2lkIHtcbiAgICAvLyBVc3VhbGx5IHRoaXMgd291bGQgYmUgaGFuZGxlZCBieSBgb3BlbmAgd2hpY2ggZW5zdXJlcyB0aGF0IHdlIGNhbiBvbmx5IGhhdmUgb25lIG92ZXJsYXlcbiAgICAvLyBvcGVuIGF0IGEgdGltZSwgaG93ZXZlciBzaW5jZSB3ZSByZXNldCB0aGUgdmFyaWFibGVzIGluIGFzeW5jIGhhbmRsZXJzIHNvbWUgb3ZlcmxheXNcbiAgICAvLyBtYXkgc2xpcCB0aHJvdWdoIGlmIHRoZSB1c2VyIG9wZW5zIGFuZCBjbG9zZXMgbXVsdGlwbGUgdGltZXMgaW4gcXVpY2sgc3VjY2Vzc2lvbiAoZS5nLlxuICAgIC8vIGJ5IGhvbGRpbmcgZG93biB0aGUgZW50ZXIga2V5KS5cbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWFsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbjxOZ3hNYXREYXRldGltZUNvbnRlbnQ8RD4+KE5neE1hdERhdGV0aW1lQ29udGVudCwge1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiAnbHRyJyxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBwYW5lbENsYXNzOiAnbWF0LWRhdGVwaWNrZXItZGlhbG9nJyxcbiAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLl9oYXNCYWNrZHJvcFxuICAgIH0pO1xuXG4gICAgdGhpcy5fZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGVwaWNrZXIgPSB0aGlzO1xuICAgIHRoaXMuX3NldENvbG9yKCk7XG4gIH1cblxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfb3BlbkFzUG9wdXAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jYWxlbmRhclBvcnRhbCkge1xuICAgICAgdGhpcy5fY2FsZW5kYXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsPE5neE1hdERhdGV0aW1lQ29udGVudDxEPj4oTmd4TWF0RGF0ZXRpbWVDb250ZW50LFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3BvcHVwUmVmKSB7XG4gICAgICB0aGlzLl9jcmVhdGVQb3B1cCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYgPSB0aGlzLl9wb3B1cFJlZi5hdHRhY2godGhpcy5fY2FsZW5kYXJQb3J0YWwpO1xuICAgICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0ZXBpY2tlciA9IHRoaXM7XG4gICAgICB0aGlzLl9zZXRDb2xvcigpO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9uY2UgdGhlIGNhbGVuZGFyIGhhcyByZW5kZXJlZC5cbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXAoKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX2NyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpLFxuICAgICAgaGFzQmFja2Ryb3A6IHRoaXMuX2hhc0JhY2tkcm9wLFxuICAgICAgYmFja2Ryb3BDbGFzczogJ21hdC1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX3Njcm9sbFN0cmF0ZWd5KCksXG4gICAgICBwYW5lbENsYXNzOiAnbWF0LWRhdGVwaWNrZXItcG9wdXAnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fcG9wdXBSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcbiAgICB0aGlzLl9wb3B1cFJlZi5vdmVybGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG5cbiAgICBtZXJnZShcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmJhY2tkcm9wQ2xpY2soKSxcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRldGFjaG1lbnRzKCksXG4gICAgICB0aGlzLl9wb3B1cFJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAvLyBDbG9zaW5nIG9uIGFsdCArIHVwIGlzIG9ubHkgdmFsaWQgd2hlbiB0aGVyZSdzIGFuIGlucHV0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZGF0ZXBpY2tlci5cbiAgICAgICAgcmV0dXJuIGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSB8fFxuICAgICAgICAgICh0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgZXZlbnQuYWx0S2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IFVQX0FSUk9XKTtcbiAgICAgIH0pKVxuICAgICkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICAodGhpcy5faGFzQmFja2Ryb3AgJiYgZXZlbnQpID8gdGhpcy5jYW5jZWwoKSA6IHRoaXMuY2xvc2UoKTtcblxuICAgIH0pO1xuICB9XG5cbiAgLyoqIENyZWF0ZSB0aGUgcG9wdXAgUG9zaXRpb25TdHJhdGVneS4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5nZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCkpXG4gICAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcubWF0LWRhdGVwaWNrZXItY29udGVudCcpXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcbiAgICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKVxuICAgICAgLndpdGhQb3NpdGlvbnMoW1xuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVjay5cbiAgICogQHJldHVybnMgVGhlIGdpdmVuIG9iamVjdCBpZiBpdCBpcyBib3RoIGEgZGF0ZSBpbnN0YW5jZSBhbmQgdmFsaWQsIG90aGVyd2lzZSBudWxsLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xuICAgIHJldHVybiAodGhpcy5fZGF0ZUFkYXB0ZXIuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJiB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKG9iaikpID8gb2JqIDogbnVsbDtcbiAgfVxuXG4gIC8qKiBQYXNzZXMgdGhlIGN1cnJlbnQgdGhlbWUgY29sb3IgYWxvbmcgdG8gdGhlIGNhbGVuZGFyIG92ZXJsYXkuICovXG4gIHByaXZhdGUgX3NldENvbG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICBpZiAodGhpcy5fcG9wdXBDb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmLmluc3RhbmNlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=