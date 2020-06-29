/**
 * @fileoverview added by tsickle
 * Generated from: lib/datetime-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
let datepickerUid = 0;
// Boilerplate for applying mixins to MatDatepickerContent.
/**
 * \@docs-private
 */
class MatDatepickerContentBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {
    /** @type {?} */
    MatDatepickerContentBase.prototype._elementRef;
}
/** @type {?} */
const _MatDatepickerContentMixinBase = mixinColor(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * NgxMatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
export class NgxMatDatetimeContent extends _MatDatepickerContentMixinBase {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
    /**
     * Whether or not the selected date is valid (min,max...)
     * @return {?}
     */
    get valid() {
        if (this.datepicker.hideTime)
            return this.datepicker.valid;
        return this._timePicker && this._timePicker.valid && this.datepicker.valid;
    }
    /**
     * @return {?}
     */
    get isViewMonth() {
        if (!this._calendar || this._calendar.currentView == null)
            return true;
        return this._calendar.currentView == 'month';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._calendar.focusActiveCell();
    }
}
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
NgxMatDatetimeContent.ctorParameters = () => [
    { type: ElementRef }
];
NgxMatDatetimeContent.propDecorators = {
    _calendar: [{ type: ViewChild, args: [NgxMatCalendar,] }],
    _timePicker: [{ type: ViewChild, args: [NgxMatTimepickerComponent,] }]
};
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
export class NgxMatDatetimePicker {
    /**
     * @param {?} _dialog
     * @param {?} _overlay
     * @param {?} _ngZone
     * @param {?} _viewContainerRef
     * @param {?} scrollStrategy
     * @param {?} _dateAdapter
     * @param {?} _dir
     * @param {?} _document
     */
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
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
        this.id = `mat-datepicker-${datepickerUid++}`;
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
        () => {
            return (!this._minDate || !this._selected ||
                this._dateAdapter.compareDateWithTime(this._minDate, this._selected, this.showSeconds) <= 0) ?
                null : { 'matDatetimePickerMin': { 'min': this._minDate, 'actual': this._selected } };
        });
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = (/**
         * @return {?}
         */
        () => {
            return (!this._maxDate || !this._selected ||
                this._dateAdapter.compareDateWithTime(this._maxDate, this._selected, this.showSeconds) >= 0) ?
                null : { 'matDatetimePickerMax': { 'max': this._maxDate, 'actual': this._selected } };
        });
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxMatDateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * The date to open the calendar to initially.
     * @return {?}
     */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startAt(value) {
        this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * Color palette to use on the datepicker's calendar.
     * @return {?}
     */
    get color() {
        return this._color ||
            (this._datepickerInput ? this._datepickerInput._getThemePalette() : 'primary');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     * @return {?}
     */
    get touchUi() { return this._touchUi; }
    /**
     * @param {?} value
     * @return {?}
     */
    set touchUi(value) {
        this._touchUi = coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    get hideTime() { return this._hideTime; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideTime(value) {
        this._hideTime = coerceBooleanProperty(value);
    }
    /**
     * Whether the datepicker pop-up should be disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled === undefined && this._datepickerInput ?
            this._datepickerInput.disabled : !!this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._disabledChange.next(newValue);
        }
    }
    /**
     * Whether the calendar is open.
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) { value ? this.open() : this.close(); }
    /**
     * Whether the timepicker'spinners is shown.
     * @return {?}
     */
    get showSpinners() { return this._showSpinners; }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSpinners(value) { this._showSpinners = value; }
    /**
     * Whether the second part is disabled.
     * @return {?}
     */
    get showSeconds() { return this._showSeconds; }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSeconds(value) { this._showSeconds = value; }
    /**
     * Step hour
     * @return {?}
     */
    get stepHour() { return this._stepHour; }
    /**
     * @param {?} value
     * @return {?}
     */
    set stepHour(value) { this._stepHour = value; }
    /**
     * Step minute
     * @return {?}
     */
    get stepMinute() { return this._stepMinute; }
    /**
     * @param {?} value
     * @return {?}
     */
    set stepMinute(value) { this._stepMinute = value; }
    /**
     * Step second
     * @return {?}
     */
    get stepSecond() { return this._stepSecond; }
    /**
     * @param {?} value
     * @return {?}
     */
    set stepSecond(value) { this._stepSecond = value; }
    /**
     * Enable meridian
     * @return {?}
     */
    get enableMeridian() { return this._enableMeridian; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enableMeridian(value) { this._enableMeridian = value; }
    /**
     * disable minute
     * @return {?}
     */
    get disableMinute() { return this._disableMinute; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableMinute(value) { this._disableMinute = value; }
    /**
     * Step second
     * @return {?}
     */
    get defaultTime() { return this._defaultTime; }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultTime(value) { this._defaultTime = value; }
    /**
     * The currently selected date.
     * @return {?}
     */
    get _selected() { return this._validSelected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set _selected(value) { this._validSelected = value; }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get _minDate() {
        return this._datepickerInput && this._datepickerInput.min;
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get _maxDate() {
        return this._datepickerInput && this._datepickerInput.max;
    }
    /**
     * @return {?}
     */
    get valid() {
        /** @type {?} */
        const minValidators = this._minValidator();
        /** @type {?} */
        const maxValidators = this._maxValidator();
        return minValidators == null && maxValidators == null;
    }
    /**
     * @return {?}
     */
    get _dateFilter() {
        return this._datepickerInput && this._datepickerInput._dateFilter;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
    }
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    select(date) {
        this._dateAdapter.copyTime(date, this._selected);
        this._selected = date;
    }
    /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    _selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    _selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * OK button handler and close
     * @return {?}
     */
    ok() {
        /** @type {?} */
        const cloned = this._dateAdapter.clone(this._selected);
        this._selectedChanged.next(cloned);
        this.close();
    }
    /**
     * Cancel and close
     * @return {?}
     */
    cancel() {
        this._selected = this._rawValue;
        this.close();
    }
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    _registerInput(input) {
        if (this._datepickerInput) {
            throw Error('A NgxMatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            (value) => this._selected = value));
    }
    /**
     * Open the calendar.
     * @return {?}
     */
    open() {
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
    }
    /**
     * Close the calendar.
     * @return {?}
     */
    close() {
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
        const completeClose = (/**
         * @return {?}
         */
        () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
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
    }
    /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    _openAsDialog() {
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
        () => this.close()));
        this._dialogRef.componentInstance.datepicker = this;
        this._setColor();
    }
    /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    _openAsPopup() {
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
            () => {
                this._popupRef.updatePosition();
            }));
        }
    }
    /**
     * Create the popup.
     * @private
     * @return {?}
     */
    _createPopup() {
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
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
        event => {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === ESCAPE ||
                (this._datepickerInput && event.altKey && event.keyCode === UP_ARROW);
        })))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event) {
                event.preventDefault();
            }
            (this._hasBackdrop && event) ? this.cancel() : this.close();
        }));
    }
    /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    _createPopupPositionStrategy() {
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
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    _setColor() {
        /** @type {?} */
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
}
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
NgxMatDatetimePicker.ctorParameters = () => [
    { type: MatDialog },
    { type: Overlay },
    { type: NgZone },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvZGF0ZXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWdELE1BQU0sc0JBQXNCLENBQUM7QUFDNUcsT0FBTyxFQUFFLGVBQWUsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQWdCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOU4sT0FBTyxFQUEwQixVQUFVLEVBQWdCLE1BQU0sd0JBQXdCLENBQUM7QUFDMUYsT0FBTyxFQUE2Qix1QkFBdUIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xJLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9B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TUFBTSxLQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQzlDLElBQUksTUFBTSxDQUFDLEtBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFJbEUsSUFDSSxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDMUQsSUFBSSxZQUFZLENBQUMsS0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFJaEUsSUFDSSxXQUFXLEtBQWMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDeEQsSUFBSSxXQUFXLENBQUMsS0FBYyxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFJOUQsSUFDSSxRQUFRLEtBQWEsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDakQsSUFBSSxRQUFRLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFJdkQsSUFDSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDckQsSUFBSSxVQUFVLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFJM0QsSUFDSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDckQsSUFBSSxVQUFVLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFJM0QsSUFDSSxjQUFjLEtBQWMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMs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MUUseURBQTZEOzs7Ozs7SUFHN0Qsa0RBQWdEOzs7OztJQUdoRCxnREFBeUM7Ozs7O0lBR3pDLCtDQUFrRDs7Ozs7SUFHbEQsZ0RBQTZDOzs7Ozs7SUFHN0MseUNBQXFCOzs7Ozs7SUE2QnJCLDZDQUlDOzs7Ozs7SUFHRCw2Q0FJQzs7Ozs7SUF0Q1csdUNBQTBCOzs7OztJQUNwQyx3Q0FBeUI7Ozs7O0lBQ3pCLHVDQUF1Qjs7Ozs7SUFDdkIsaURBQTJDOzs7OztJQUUzQyw0Q0FBc0Q7Ozs7O0lBQ3RELG9DQUF3Qzs7Ozs7SUFDeEMseUNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVTQ0FQRSwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiwgUG9zaXRpb25TdHJhdGVneSwgU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQ29sb3IsIENhbkNvbG9yQ3RvciwgbWl4aW5Db2xvciwgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzLCBtYXREYXRlcGlja2VyQW5pbWF0aW9ucywgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBOZ3hNYXREYXRlQWRhcHRlciB9IGZyb20gJy4vY29yZS9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmd4TWF0Q2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IE5neE1hdERhdGV0aW1lSW5wdXQgfSBmcm9tICcuL2RhdGV0aW1lLWlucHV0JztcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yLCBERUZBVUxUX1NURVAgfSBmcm9tICcuL3V0aWxzL2RhdGUtdXRpbHMnO1xuaW1wb3J0IHsgTmd4TWF0VGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIFVzZWQgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGVhY2ggZGF0ZXBpY2tlciBpbnN0YW5jZS4gKi9cbmxldCBkYXRlcGlja2VyVWlkID0gMDtcblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXREYXRlcGlja2VyQ29udGVudC5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXREYXRlcGlja2VyQ29udGVudEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxufVxuY29uc3QgX01hdERhdGVwaWNrZXJDb250ZW50TWl4aW5CYXNlOiBDYW5Db2xvckN0b3IgJiB0eXBlb2YgTWF0RGF0ZXBpY2tlckNvbnRlbnRCYXNlID1cbiAgbWl4aW5Db2xvcihNYXREYXRlcGlja2VyQ29udGVudEJhc2UpO1xuXG4vKipcbiAqIENvbXBvbmVudCB1c2VkIGFzIHRoZSBjb250ZW50IGZvciB0aGUgZGF0ZXBpY2tlciBkaWFsb2cgYW5kIHBvcHVwLiBXZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIHVzaW5nXG4gKiBOZ3hNYXRDYWxlbmRhciBkaXJlY3RseSBhcyB0aGUgY29udGVudCBzbyB3ZSBjYW4gY29udHJvbCB0aGUgaW5pdGlhbCBmb2N1cy4gVGhpcyBhbHNvIGdpdmVzIHVzIGFcbiAqIHBsYWNlIHRvIHB1dCBhZGRpdGlvbmFsIGZlYXR1cmVzIG9mIHRoZSBwb3B1cCB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgY2FsZW5kYXIgaXRzZWxmIGluIHRoZVxuICogZnV0dXJlLiAoZS5nLiBjb25maXJtYXRpb24gYnV0dG9ucykuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1tYXQtZGF0ZXRpbWUtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXRpbWUtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRldGltZS1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWRhdGVwaWNrZXItY29udGVudCcsXG4gICAgJ1tAdHJhbnNmb3JtUGFuZWxdJzogJ1wiZW50ZXJcIicsXG4gICAgJ1tjbGFzcy5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoXSc6ICdkYXRlcGlja2VyLnRvdWNoVWknLFxuICB9LFxuICBhbmltYXRpb25zOiBbXG4gICAgbWF0RGF0ZXBpY2tlckFuaW1hdGlvbnMudHJhbnNmb3JtUGFuZWwsXG4gICAgbWF0RGF0ZXBpY2tlckFuaW1hdGlvbnMuZmFkZUluQ2FsZW5kYXIsXG4gIF0sXG4gIGV4cG9ydEFzOiAnbmd4TWF0RGF0ZXRpbWVDb250ZW50JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogWydjb2xvciddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXREYXRldGltZUNvbnRlbnQ8RD4gZXh0ZW5kcyBfTWF0RGF0ZXBpY2tlckNvbnRlbnRNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDYW5Db2xvciB7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWwgY2FsZW5kYXIgY29tcG9uZW50LiAqL1xuICBAVmlld0NoaWxkKE5neE1hdENhbGVuZGFyKSBfY2FsZW5kYXI6IE5neE1hdENhbGVuZGFyPEQ+O1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGludGVybmFsIHRpbWUgcGlja2VyIGNvbXBvbmVudC4gKi9cbiAgQFZpZXdDaGlsZChOZ3hNYXRUaW1lcGlja2VyQ29tcG9uZW50KSBfdGltZVBpY2tlcjogTmd4TWF0VGltZXBpY2tlckNvbXBvbmVudDxEPjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBkYXRlcGlja2VyIHRoYXQgY3JlYXRlZCB0aGUgb3ZlcmxheS4gKi9cbiAgZGF0ZXBpY2tlcjogTmd4TWF0RGF0ZXRpbWVQaWNrZXI8RD47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRhdGVwaWNrZXIgaXMgYWJvdmUgb3IgYmVsb3cgdGhlIGlucHV0LiAqL1xuICBfaXNBYm92ZTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIHNlbGVjdGVkIGRhdGUgaXMgdmFsaWQgKG1pbixtYXguLi4pICovXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICBpZih0aGlzLmRhdGVwaWNrZXIuaGlkZVRpbWUpIHJldHVybiB0aGlzLmRhdGVwaWNrZXIudmFsaWQ7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVQaWNrZXIgJiYgdGhpcy5fdGltZVBpY2tlci52YWxpZCAmJiB0aGlzLmRhdGVwaWNrZXIudmFsaWQ7XG4gIH1cblxuICBnZXQgaXNWaWV3TW9udGgoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9jYWxlbmRhciB8fCB0aGlzLl9jYWxlbmRhci5jdXJyZW50VmlldyA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ21vbnRoJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9jYWxlbmRhci5mb2N1c0FjdGl2ZUNlbGwoKTtcbiAgfVxuXG59XG5cbi8vIFRPRE8obW1hbGVyYmEpOiBXZSB1c2UgYSBjb21wb25lbnQgaW5zdGVhZCBvZiBhIGRpcmVjdGl2ZSBoZXJlIHNvIHRoZSB1c2VyIGNhbiB1c2UgaW1wbGljaXRcbi8vIHRlbXBsYXRlIHJlZmVyZW5jZSB2YXJpYWJsZXMgKGUuZy4gI2QgdnMgI2Q9XCJtYXREYXRlcGlja2VyXCIpLiBXZSBjYW4gY2hhbmdlIHRoaXMgdG8gYSBkaXJlY3RpdmVcbi8vIGlmIGFuZ3VsYXIgYWRkcyBzdXBwb3J0IGZvciBgZXhwb3J0QXM6ICckaW1wbGljaXQnYCBvbiBkaXJlY3RpdmVzLlxuLyoqIENvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIGRhdGVwaWNrZXIgcG9wdXAvZGlhbG9nLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1kYXRldGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIGV4cG9ydEFzOiAnbmd4TWF0RGF0ZXRpbWVQaWNrZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0RGF0ZXRpbWVQaWNrZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIENhbkNvbG9yIHtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3k6ICgpID0+IFNjcm9sbFN0cmF0ZWd5O1xuXG4gIC8qKiBBbiBpbnB1dCBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gaGVhZGVyIGNvbXBvbmVudCBmb3IgdGhlIGNhbGVuZGFyLCBpZiBzZXQuICovXG4gIEBJbnB1dCgpIGNhbGVuZGFySGVhZGVyQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XG5cbiAgLyoqIFRoZSBkYXRlIHRvIG9wZW4gdGhlIGNhbGVuZGFyIHRvIGluaXRpYWxseS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0YXJ0QXQoKTogRCB8IG51bGwge1xuICAgIC8vIElmIGFuIGV4cGxpY2l0IHN0YXJ0QXQgaXMgc2V0IHdlIHN0YXJ0IHRoZXJlLCBvdGhlcndpc2Ugd2Ugc3RhcnQgYXQgd2hhdGV2ZXIgdGhlIGN1cnJlbnRseVxuICAgIC8vIHNlbGVjdGVkIHZhbHVlIGlzLlxuICAgIHJldHVybiB0aGlzLl9zdGFydEF0IHx8ICh0aGlzLl9kYXRlcGlja2VySW5wdXQgPyB0aGlzLl9kYXRlcGlja2VySW5wdXQudmFsdWUgOiBudWxsKTtcbiAgfVxuICBzZXQgc3RhcnRBdCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9zdGFydEF0ID0gdGhpcy5fZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XG4gIH1cbiAgcHJpdmF0ZSBfc3RhcnRBdDogRCB8IG51bGw7XG5cbiAgLyoqIFRoZSB2aWV3IHRoYXQgdGhlIGNhbGVuZGFyIHNob3VsZCBzdGFydCBpbi4gKi9cbiAgQElucHV0KCkgc3RhcnRWaWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXInID0gJ21vbnRoJztcblxuICAvKiogQ29sb3IgcGFsZXR0ZSB0byB1c2Ugb24gdGhlIGRhdGVwaWNrZXIncyBjYWxlbmRhci4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IFRoZW1lUGFsZXR0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yIHx8XG4gICAgICAodGhpcy5fZGF0ZXBpY2tlcklucHV0ID8gdGhpcy5fZGF0ZXBpY2tlcklucHV0Ll9nZXRUaGVtZVBhbGV0dGUoKSA6ICdwcmltYXJ5Jyk7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBUaGVtZVBhbGV0dGUpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIF9jb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBVSSBpcyBpbiB0b3VjaCBtb2RlLiBJbiB0b3VjaCBtb2RlIHRoZSBjYWxlbmRhciBvcGVucyBpbiBhIGRpYWxvZyByYXRoZXJcbiAgICogdGhhbiBhIHBvcHVwIGFuZCBlbGVtZW50cyBoYXZlIG1vcmUgcGFkZGluZyB0byBhbGxvdyBmb3IgYmlnZ2VyIHRvdWNoIHRhcmdldHMuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdG91Y2hVaSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3RvdWNoVWk7IH1cbiAgc2V0IHRvdWNoVWkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90b3VjaFVpID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF90b3VjaFVpID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhpZGVUaW1lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faGlkZVRpbWU7IH1cbiAgc2V0IGhpZGVUaW1lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVRpbWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBfaGlkZVRpbWUgPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlciBwb3AtdXAgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0ID9cbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5kaXNhYmxlZCA6ICEhdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLm5leHQobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgX2Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBzZWxlY3RlZCB5ZWFyIGluIG11bHRpeWVhciB2aWV3LlxuICAgKiBUaGlzIGRvZXNuJ3QgaW1wbHkgYSBjaGFuZ2Ugb24gdGhlIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgeWVhclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHNlbGVjdGVkIG1vbnRoIGluIHllYXIgdmlldy5cbiAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vbnRoU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcblxuICAvKiogQ2xhc3NlcyB0byBiZSBwYXNzZWQgdG8gdGhlIGRhdGUgcGlja2VyIHBhbmVsLiBTdXBwb3J0cyB0aGUgc2FtZSBzeW50YXggYXMgYG5nQ2xhc3NgLiAqL1xuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKiogRnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgY3VzdG9tIENTUyBjbGFzc2VzIHRvIGRhdGVzLiAqL1xuICBASW5wdXQoKSBkYXRlQ2xhc3M6IChkYXRlOiBEKSA9PiBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGhhcyBiZWVuIG9wZW5lZC4gKi9cbiAgQE91dHB1dCgnb3BlbmVkJykgb3BlbmVkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaGFzIGJlZW4gY2xvc2VkLiAqL1xuICBAT3V0cHV0KCdjbG9zZWQnKSBjbG9zZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBpcyBvcGVuLiAqL1xuICBASW5wdXQoKVxuICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3BlbmVkOyB9XG4gIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHsgdmFsdWUgPyB0aGlzLm9wZW4oKSA6IHRoaXMuY2xvc2UoKTsgfVxuICBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgdGltZXBpY2tlcidzcGlubmVycyBpcyBzaG93bi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNob3dTcGlubmVycygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3Nob3dTcGlubmVyczsgfVxuICBzZXQgc2hvd1NwaW5uZXJzKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX3Nob3dTcGlubmVycyA9IHZhbHVlOyB9XG4gIHB1YmxpYyBfc2hvd1NwaW5uZXJzID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgc2Vjb25kIHBhcnQgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaG93U2Vjb25kcygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3Nob3dTZWNvbmRzOyB9XG4gIHNldCBzaG93U2Vjb25kcyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9zaG93U2Vjb25kcyA9IHZhbHVlOyB9XG4gIHB1YmxpYyBfc2hvd1NlY29uZHMgPSBmYWxzZTtcblxuICAvKiogU3RlcCBob3VyICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwSG91cigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc3RlcEhvdXI7IH1cbiAgc2V0IHN0ZXBIb3VyKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fc3RlcEhvdXIgPSB2YWx1ZTsgfVxuICBwdWJsaWMgX3N0ZXBIb3VyOiBudW1iZXIgPSBERUZBVUxUX1NURVA7XG5cbiAgLyoqIFN0ZXAgbWludXRlICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwTWludXRlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zdGVwTWludXRlOyB9XG4gIHNldCBzdGVwTWludXRlKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fc3RlcE1pbnV0ZSA9IHZhbHVlOyB9XG4gIHB1YmxpYyBfc3RlcE1pbnV0ZTogbnVtYmVyID0gREVGQVVMVF9TVEVQO1xuXG4gIC8qKiBTdGVwIHNlY29uZCAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RlcFNlY29uZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc3RlcFNlY29uZDsgfVxuICBzZXQgc3RlcFNlY29uZCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX3N0ZXBTZWNvbmQgPSB2YWx1ZTsgfVxuICBwdWJsaWMgX3N0ZXBTZWNvbmQ6IG51bWJlciA9IERFRkFVTFRfU1RFUDtcblxuICAvKiogRW5hYmxlIG1lcmlkaWFuICovXG4gIEBJbnB1dCgpXG4gIGdldCBlbmFibGVNZXJpZGlhbigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2VuYWJsZU1lcmlkaWFuOyB9XG4gIHNldCBlbmFibGVNZXJpZGlhbih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9lbmFibGVNZXJpZGlhbiA9IHZhbHVlOyB9XG4gIHB1YmxpYyBfZW5hYmxlTWVyaWRpYW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogZGlzYWJsZSBtaW51dGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVNaW51dGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlTWludXRlOyB9XG4gIHNldCBkaXNhYmxlTWludXRlKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2Rpc2FibGVNaW51dGUgPSB2YWx1ZTsgfVxuICBwdWJsaWMgX2Rpc2FibGVNaW51dGU6IGJvb2xlYW47XG5cbiAgLyoqIFN0ZXAgc2Vjb25kICovXG4gIEBJbnB1dCgpXG4gIGdldCBkZWZhdWx0VGltZSgpOiBudW1iZXJbXSB7IHJldHVybiB0aGlzLl9kZWZhdWx0VGltZTsgfVxuICBzZXQgZGVmYXVsdFRpbWUodmFsdWU6IG51bWJlcltdKSB7IHRoaXMuX2RlZmF1bHRUaW1lID0gdmFsdWU7IH1cbiAgcHVibGljIF9kZWZhdWx0VGltZTogbnVtYmVyW107XG5cbiAgcHJpdmF0ZSBfaGFzQmFja2Ryb3A6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBUaGUgaWQgZm9yIHRoZSBkYXRlcGlja2VyIGNhbGVuZGFyLiAqL1xuICBpZDogc3RyaW5nID0gYG1hdC1kYXRlcGlja2VyLSR7ZGF0ZXBpY2tlclVpZCsrfWA7XG5cbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cbiAgZ2V0IF9zZWxlY3RlZCgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl92YWxpZFNlbGVjdGVkOyB9XG4gIHNldCBfc2VsZWN0ZWQodmFsdWU6IEQgfCBudWxsKSB7IHRoaXMuX3ZhbGlkU2VsZWN0ZWQgPSB2YWx1ZTsgfVxuICBwcml2YXRlIF92YWxpZFNlbGVjdGVkOiBEIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cbiAgZ2V0IF9taW5EYXRlKCk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5taW47XG4gIH1cblxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBnZXQgX21heERhdGUoKTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1heDtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBtaW5WYWxpZGF0b3JzID0gdGhpcy5fbWluVmFsaWRhdG9yKCk7XG4gICAgY29uc3QgbWF4VmFsaWRhdG9ycyA9IHRoaXMuX21heFZhbGlkYXRvcigpO1xuICAgIHJldHVybiBtaW5WYWxpZGF0b3JzID09IG51bGwgJiYgbWF4VmFsaWRhdG9ycyA9PSBudWxsO1xuICB9XG5cbiAgZ2V0IF9kYXRlRmlsdGVyKCk6IChkYXRlOiBEIHwgbnVsbCkgPT4gYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQuX2RhdGVGaWx0ZXI7XG4gIH1cblxuICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIG92ZXJsYXkgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkIGFzIGEgcG9wdXAuICovXG4gIF9wb3B1cFJlZjogT3ZlcmxheVJlZjtcblxuICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIGRpYWxvZyB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBkaWFsb2cuICovXG4gIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE5neE1hdERhdGV0aW1lQ29udGVudDxEPj4gfCBudWxsO1xuXG4gIC8qKiBBIHBvcnRhbCBjb250YWluaW5nIHRoZSBjYWxlbmRhciBmb3IgdGhpcyBkYXRlcGlja2VyLiAqL1xuICBwcml2YXRlIF9jYWxlbmRhclBvcnRhbDogQ29tcG9uZW50UG9ydGFsPE5neE1hdERhdGV0aW1lQ29udGVudDxEPj47XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IGluc3RhbnRpYXRlZCBpbiBwb3B1cCBtb2RlLiAqL1xuICBwcml2YXRlIF9wb3B1cENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE5neE1hdERhdGV0aW1lQ29udGVudDxEPj4gfCBudWxsO1xuXG4gIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgZGF0ZXBpY2tlciB3YXMgb3BlbmVkLiAqL1xuICBwcml2YXRlIF9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW46IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB2YWx1ZSBjaGFuZ2VzIGluIHRoZSBhc3NvY2lhdGVkIGlucHV0IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2lucHV0U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB0aGlzIGRhdGVwaWNrZXIgaXMgYXNzb2NpYXRlZCB3aXRoLiAqL1xuICBfZGF0ZXBpY2tlcklucHV0OiBOZ3hNYXREYXRldGltZUlucHV0PEQ+O1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGRpc2FibGVkLiAqL1xuICByZWFkb25seSBfZGlzYWJsZWRDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKiBFbWl0cyBuZXcgc2VsZWN0ZWQgZGF0ZSB3aGVuIHNlbGVjdGVkIGRhdGUgY2hhbmdlcy4gKi9cbiAgcmVhZG9ubHkgX3NlbGVjdGVkQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PEQ+KCk7XG5cbiAgLyoqIFJhdyB2YWx1ZSBiZWZvcmUgICovXG4gIHByaXZhdGUgX3Jhd1ZhbHVlOiBEO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBASW5qZWN0KE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSkgc2Nyb2xsU3RyYXRlZ3k6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kYXRlQWRhcHRlcjogTmd4TWF0RGF0ZUFkYXB0ZXI8RD4sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlcikge1xuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoJ05neE1hdERhdGVBZGFwdGVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kgPSBzY3JvbGxTdHJhdGVneTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLl9pbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XG5cbiAgICBpZiAodGhpcy5fcG9wdXBSZWYpIHtcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHRoZSBtaW4gZGF0ZS4gKi9cbiAgcHJpdmF0ZSBfbWluVmFsaWRhdG9yID0gKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gKCF0aGlzLl9taW5EYXRlIHx8ICF0aGlzLl9zZWxlY3RlZCB8fFxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGVXaXRoVGltZSh0aGlzLl9taW5EYXRlLCB0aGlzLl9zZWxlY3RlZCwgdGhpcy5zaG93U2Vjb25kcykgPD0gMCkgP1xuICAgICAgbnVsbCA6IHsgJ21hdERhdGV0aW1lUGlja2VyTWluJzogeyAnbWluJzogdGhpcy5fbWluRGF0ZSwgJ2FjdHVhbCc6IHRoaXMuX3NlbGVjdGVkIH0gfTtcbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIG1heCBkYXRlLiAqL1xuICBwcml2YXRlIF9tYXhWYWxpZGF0b3IgPSAoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiAoIXRoaXMuX21heERhdGUgfHwgIXRoaXMuX3NlbGVjdGVkIHx8XG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZVdpdGhUaW1lKHRoaXMuX21heERhdGUsIHRoaXMuX3NlbGVjdGVkLCB0aGlzLnNob3dTZWNvbmRzKSA+PSAwKSA/XG4gICAgICBudWxsIDogeyAnbWF0RGF0ZXRpbWVQaWNrZXJNYXgnOiB7ICdtYXgnOiB0aGlzLl9tYXhEYXRlLCAnYWN0dWFsJzogdGhpcy5fc2VsZWN0ZWQgfSB9O1xuICB9XG5cbiAgLyoqIFNlbGVjdHMgdGhlIGdpdmVuIGRhdGUgKi9cbiAgc2VsZWN0KGRhdGU6IEQpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlQWRhcHRlci5jb3B5VGltZShkYXRlLCB0aGlzLl9zZWxlY3RlZCk7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBkYXRlO1xuICB9XG5cbiAgLyoqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyIGluIG11bHRpeWVhciB2aWV3ICovXG4gIF9zZWxlY3RZZWFyKG5vcm1hbGl6ZWRZZWFyOiBEKTogdm9pZCB7XG4gICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XG4gIH1cblxuICAvKiogRW1pdHMgc2VsZWN0ZWQgbW9udGggaW4geWVhciB2aWV3ICovXG4gIF9zZWxlY3RNb250aChub3JtYWxpemVkTW9udGg6IEQpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkTW9udGgpO1xuICB9XG5cbiAgLyoqIE9LIGJ1dHRvbiBoYW5kbGVyIGFuZCBjbG9zZSovXG4gIHB1YmxpYyBvaygpOiB2b2lkIHtcbiAgICBjb25zdCBjbG9uZWQgPSB0aGlzLl9kYXRlQWRhcHRlci5jbG9uZSh0aGlzLl9zZWxlY3RlZCk7XG4gICAgdGhpcy5fc2VsZWN0ZWRDaGFuZ2VkLm5leHQoY2xvbmVkKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKiogQ2FuY2VsIGFuZCBjbG9zZSAqL1xuICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fcmF3VmFsdWU7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyBkYXRlcGlja2VyLlxuICAgKiBAcGFyYW0gaW5wdXQgVGhlIGRhdGVwaWNrZXIgaW5wdXQgdG8gcmVnaXN0ZXIgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXG4gICAqL1xuICBfcmVnaXN0ZXJJbnB1dChpbnB1dDogTmd4TWF0RGF0ZXRpbWVJbnB1dDxEPik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlcGlja2VySW5wdXQpIHtcbiAgICAgIHRocm93IEVycm9yKCdBIE5neE1hdERhdGVwaWNrZXIgY2FuIG9ubHkgYmUgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLl9pbnB1dFN1YnNjcmlwdGlvbiA9XG4gICAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQuX3ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IEQgfCBudWxsKSA9PiB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhci4gKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLl9yYXdWYWx1ZSA9IHRoaXMuX3NlbGVjdGVkICE9IG51bGxcbiAgICAgID8gdGhpcy5fZGF0ZUFkYXB0ZXIuY2xvbmUodGhpcy5fc2VsZWN0ZWQpIDogbnVsbDtcblxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2RhdGVBZGFwdGVyLnRvZGF5KCk7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VGltZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldFRpbWVCeURlZmF1bHRWYWx1ZXModGhpcy5fc2VsZWN0ZWQsIHRoaXMuZGVmYXVsdFRpbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcGVuZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJJbnB1dCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0F0dGVtcHRlZCB0byBvcGVuIGFuIE5neE1hdERhdGVwaWNrZXIgd2l0aCBubyBhc3NvY2lhdGVkIGlucHV0LicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFVpID8gdGhpcy5fb3BlbkFzRGlhbG9nKCkgOiB0aGlzLl9vcGVuQXNQb3B1cCgpO1xuICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5vcGVuZWRTdHJlYW0uZW1pdCgpO1xuICB9XG5cbiAgLyoqIENsb3NlIHRoZSBjYWxlbmRhci4gKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcHVwUmVmICYmIHRoaXMuX3BvcHVwUmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRldGFjaCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYWxlbmRhclBvcnRhbCAmJiB0aGlzLl9jYWxlbmRhclBvcnRhbC5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhclBvcnRhbC5kZXRhY2goKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZUNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gVGhlIGBfb3BlbmVkYCBjb3VsZCd2ZSBiZWVuIHJlc2V0IGFscmVhZHkgaWZcbiAgICAgIC8vIHdlIGdvdCB0d28gZXZlbnRzIGluIHF1aWNrIHN1Y2Nlc3Npb24uXG4gICAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsb3NlZFN0cmVhbS5lbWl0KCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gJiZcbiAgICAgIHR5cGVvZiB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEJlY2F1c2UgSUUgbW92ZXMgZm9jdXMgYXN5bmNocm9ub3VzbHksIHdlIGNhbid0IGNvdW50IG9uIGl0IGJlaW5nIHJlc3RvcmVkIGJlZm9yZSB3ZSd2ZVxuICAgICAgLy8gbWFya2VkIHRoZSBkYXRlcGlja2VyIGFzIGNsb3NlZC4gSWYgdGhlIGV2ZW50IGZpcmVzIG91dCBvZiBzZXF1ZW5jZSBhbmQgdGhlIGVsZW1lbnQgdGhhdFxuICAgICAgLy8gd2UncmUgcmVmb2N1c2luZyBvcGVucyB0aGUgZGF0ZXBpY2tlciBvbiBmb2N1cywgdGhlIHVzZXIgY291bGQgYmUgc3R1Y2sgd2l0aCBub3QgYmVpbmdcbiAgICAgIC8vIGFibGUgdG8gY2xvc2UgdGhlIGNhbGVuZGFyIGF0IGFsbC4gV2Ugd29yayBhcm91bmQgaXQgYnkgbWFraW5nIHRoZSBsb2dpYywgdGhhdCBtYXJrc1xuICAgICAgLy8gdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLCBhc3luYyBhcyB3ZWxsLlxuICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzKCk7XG4gICAgICBzZXRUaW1lb3V0KGNvbXBsZXRlQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZUNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyIGFzIGEgZGlhbG9nLiAqL1xuICBwcml2YXRlIF9vcGVuQXNEaWFsb2coKTogdm9pZCB7XG4gICAgLy8gVXN1YWxseSB0aGlzIHdvdWxkIGJlIGhhbmRsZWQgYnkgYG9wZW5gIHdoaWNoIGVuc3VyZXMgdGhhdCB3ZSBjYW4gb25seSBoYXZlIG9uZSBvdmVybGF5XG4gICAgLy8gb3BlbiBhdCBhIHRpbWUsIGhvd2V2ZXIgc2luY2Ugd2UgcmVzZXQgdGhlIHZhcmlhYmxlcyBpbiBhc3luYyBoYW5kbGVycyBzb21lIG92ZXJsYXlzXG4gICAgLy8gbWF5IHNsaXAgdGhyb3VnaCBpZiB0aGUgdXNlciBvcGVucyBhbmQgY2xvc2VzIG11bHRpcGxlIHRpbWVzIGluIHF1aWNrIHN1Y2Nlc3Npb24gKGUuZy5cbiAgICAvLyBieSBob2xkaW5nIGRvd24gdGhlIGVudGVyIGtleSkuXG4gICAgaWYgKHRoaXMuX2RpYWxvZ1JlZikge1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlhbG9nUmVmID0gdGhpcy5fZGlhbG9nLm9wZW48Tmd4TWF0RGF0ZXRpbWVDb250ZW50PEQ+PihOZ3hNYXREYXRldGltZUNvbnRlbnQsIHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogJ2x0cicsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgcGFuZWxDbGFzczogJ21hdC1kYXRlcGlja2VyLWRpYWxvZycsXG4gICAgICBoYXNCYWNrZHJvcDogdGhpcy5faGFzQmFja2Ryb3BcbiAgICB9KTtcblxuICAgIHRoaXMuX2RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRlcGlja2VyID0gdGhpcztcbiAgICB0aGlzLl9zZXRDb2xvcigpO1xuICB9XG5cbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyIGFzIGEgcG9wdXAuICovXG4gIHByaXZhdGUgX29wZW5Bc1BvcHVwKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY2FsZW5kYXJQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxOZ3hNYXREYXRldGltZUNvbnRlbnQ8RD4+KE5neE1hdERhdGV0aW1lQ29udGVudCxcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9wb3B1cFJlZikge1xuICAgICAgdGhpcy5fY3JlYXRlUG9wdXAoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3BvcHVwUmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmID0gdGhpcy5fcG9wdXBSZWYuYXR0YWNoKHRoaXMuX2NhbGVuZGFyUG9ydGFsKTtcbiAgICAgIHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGVwaWNrZXIgPSB0aGlzO1xuICAgICAgdGhpcy5fc2V0Q29sb3IoKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbiBvbmNlIHRoZSBjYWxlbmRhciBoYXMgcmVuZGVyZWQuXG4gICAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9wb3B1cFJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENyZWF0ZSB0aGUgcG9wdXAuICovXG4gIHByaXZhdGUgX2NyZWF0ZVBvcHVwKCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9jcmVhdGVQb3B1cFBvc2l0aW9uU3RyYXRlZ3koKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLl9oYXNCYWNrZHJvcCxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdtYXQtb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2RpcixcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9zY3JvbGxTdHJhdGVneSgpLFxuICAgICAgcGFuZWxDbGFzczogJ21hdC1kYXRlcGlja2VyLXBvcHVwJyxcbiAgICB9KTtcblxuICAgIHRoaXMuX3BvcHVwUmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gICAgdGhpcy5fcG9wdXBSZWYub3ZlcmxheUVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuXG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLl9wb3B1cFJlZi5iYWNrZHJvcENsaWNrKCksXG4gICAgICB0aGlzLl9wb3B1cFJlZi5kZXRhY2htZW50cygpLFxuICAgICAgdGhpcy5fcG9wdXBSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgLy8gQ2xvc2luZyBvbiBhbHQgKyB1cCBpcyBvbmx5IHZhbGlkIHdoZW4gdGhlcmUncyBhbiBpbnB1dCBhc3NvY2lhdGVkIHdpdGggdGhlIGRhdGVwaWNrZXIuXG4gICAgICAgIHJldHVybiBldmVudC5rZXlDb2RlID09PSBFU0NBUEUgfHxcbiAgICAgICAgICAodGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIGV2ZW50LmFsdEtleSAmJiBldmVudC5rZXlDb2RlID09PSBVUF9BUlJPVyk7XG4gICAgICB9KSlcbiAgICApLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgKHRoaXMuX2hhc0JhY2tkcm9wICYmIGV2ZW50KSA/IHRoaXMuY2FuY2VsKCkgOiB0aGlzLmNsb3NlKCk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDcmVhdGUgdGhlIHBvcHVwIFBvc2l0aW9uU3RyYXRlZ3kuICovXG4gIHByaXZhdGUgX2NyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpOiBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLl9kYXRlcGlja2VySW5wdXQuZ2V0Q29ubmVjdGVkT3ZlcmxheU9yaWdpbigpKVxuICAgICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQnKVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXG4gICAgICAud2l0aExvY2tlZFBvc2l0aW9uKClcbiAgICAgIC53aXRoUG9zaXRpb25zKFtcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIFRoZSBnaXZlbiBvYmplY3QgaWYgaXQgaXMgYm90aCBhIGRhdGUgaW5zdGFuY2UgYW5kIHZhbGlkLCBvdGhlcndpc2UgbnVsbC5cbiAgICovXG4gIHByaXZhdGUgX2dldFZhbGlkRGF0ZU9yTnVsbChvYmo6IGFueSk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gKHRoaXMuX2RhdGVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XG4gIH1cblxuICAvKiogUGFzc2VzIHRoZSBjdXJyZW50IHRoZW1lIGNvbG9yIGFsb25nIHRvIHRoZSBjYWxlbmRhciBvdmVybGF5LiAqL1xuICBwcml2YXRlIF9zZXRDb2xvcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgaWYgKHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLl9wb3B1cENvbXBvbmVudFJlZi5pbnN0YW5jZS5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gIH1cblxufVxuIl19