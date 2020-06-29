/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { NgxMatDateAdapter } from './core/date-adapter';
import { NGX_MAT_DATE_FORMATS } from './core/date-formats';
import { NgxMatMonthView } from './month-view';
import { getActiveOffset, isSameMultiYearView, NgxMatMultiYearView, yearsPerPage } from './multi-year-view';
import { createMissingDateImplError, formatYearRange } from './utils/date-utils';
import { NgxMatYearView } from './year-view';
/**
 * Default header for NgxMatCalendar
 * @template D
 */
export class NgxMatCalendarHeader {
    /**
     * @param {?} _intl
     * @param {?} calendar
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} changeDetectorRef
     */
    constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this.calendar.stateChanges.subscribe((/**
         * @return {?}
         */
        () => changeDetectorRef.markForCheck()));
    }
    /**
     * The label for the current calendar view.
     * @return {?}
     */
    get periodButtonText() {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter
                .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYearName(this.calendar.activeDate);
        }
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view, and the last year is
        // just yearsPerPage - 1 away.
        /** @type {?} */
        const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
        /** @type {?} */
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
        /** @type {?} */
        const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
        /** @type {?} */
        const minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
        /** @type {?} */
        const maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
        return formatYearRange(minYearName, maxYearName);
    }
    /**
     * @return {?}
     */
    get periodButtonLabel() {
        return this.calendar.currentView == 'month' ?
            this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /**
     * The label for the previous button.
     * @return {?}
     */
    get prevButtonLabel() {
        return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
        }[this.calendar.currentView];
    }
    /**
     * The label for the next button.
     * @return {?}
     */
    get nextButtonLabel() {
        return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
        }[this.calendar.currentView];
    }
    /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    currentPeriodClicked() {
        this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    previousClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    nextClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    previousEnabled() {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    nextEnabled() {
        return !this.calendar.maxDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @private
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    _isSameView(date1, date2) {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
}
NgxMatCalendarHeader.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-calendar-header',
                template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            cdkAriaLive=\"polite\">\n      {{periodButtonText}}\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
                exportAs: 'ngxMatCalendarHeader',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NgxMatCalendarHeader.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: NgxMatCalendar, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NgxMatCalendar)),] }] },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendarHeader.prototype._intl;
    /** @type {?} */
    NgxMatCalendarHeader.prototype.calendar;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendarHeader.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendarHeader.prototype._dateFormats;
}
/**
 * A calendar that is used as part of the datepicker.
 * \@docs-private
 * @template D
 */
export class NgxMatCalendar {
    /**
     * @param {?} _intl
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} _changeDetectorRef
     */
    constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this._moveFocusOnNextTick = false;
        /**
         * Whether the calendar should be started in month or year view.
         */
        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new Subject();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('NgxDateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('NGX_MAT_DATE_FORMATS');
        }
        this._intlChanges = _intl.changes.subscribe((/**
         * @return {?}
         */
        () => {
            _changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }));
    }
    /**
     * A date representing the period (month or year) to start the calendar in.
     * @return {?}
     */
    get startAt() { return this._startAt; }
    /**
     * @param {?} value
     * @return {?}
     */
    set startAt(value) {
        this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() { return this._minDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() { return this._maxDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     * @return {?}
     */
    get activeDate() { return this._clampedActiveDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        this.stateChanges.next();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Whether the calendar is in month view.
     * @return {?}
     */
    get currentView() { return this._currentView; }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentView(value) {
        this._currentView = value;
        this._moveFocusOnNextTick = true;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._calendarHeaderPortal = new ComponentPortal(this.headerComponent || NgxMatCalendarHeader);
        this.activeDate = this.startAt || this._dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
        if (change && !change.firstChange) {
            /** @type {?} */
            const view = this._getCurrentViewComponent();
            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();
                view._init();
            }
        }
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    focusActiveCell() {
        this._getCurrentViewComponent()._focusActiveCell();
    }
    /**
     * Updates today's date after an update of the active date
     * @return {?}
     */
    updateTodaysDate() {
        /** @type {?} */
        let view = this.currentView == 'month' ? this.monthView :
            (this.currentView == 'year' ? this.yearView : this.multiYearView);
        view.ngAfterContentInit();
    }
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    _dateSelected(date) {
        if (date && !this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    }
    /**
     * Handles year selection in the multiyear view.
     * @param {?} normalizedYear
     * @return {?}
     */
    _yearSelectedInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Handles month selection in the year view.
     * @param {?} normalizedMonth
     * @return {?}
     */
    _monthSelectedInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * @return {?}
     */
    _userSelected() {
        this._userSelection.emit();
    }
    /**
     * Handles year/month selection in the multi-year/year views.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    _goToDateInView(date, view) {
        this.activeDate = date;
        this.currentView = view;
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
     * Returns the component instance that corresponds to the current calendar view.
     * @private
     * @return {?}
     */
    _getCurrentViewComponent() {
        return this.monthView || this.yearView || this.multiYearView;
    }
}
NgxMatCalendar.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-calendar',
                template: "\n<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <ngx-mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (selectedChange)=\"_dateSelected($event)\"\n      (_userSelection)=\"_userSelected()\">\n  </ngx-mat-month-view>\n\n  <ngx-mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </ngx-mat-year-view>\n\n  <ngx-mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </ngx-mat-multi-year-view>\n</div>\n",
                host: {
                    'class': 'mat-calendar',
                },
                exportAs: 'ngxMatCalendar',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{padding:0 8px 8px;outline:0}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{-webkit-transform:rotate(180deg);transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button::after,.mat-calendar-previous-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;-webkit-transform:translateX(2px) rotate(-45deg);transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;-webkit-transform:translateX(-2px) rotate(45deg);transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:'';position:absolute;top:0;left:-8px;right:-8px;height:1px}"]
            }] }
];
/** @nocollapse */
NgxMatCalendar.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
NgxMatCalendar.propDecorators = {
    headerComponent: [{ type: Input }],
    startAt: [{ type: Input }],
    startView: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    dateClass: [{ type: Input }],
    selectedChange: [{ type: Output }],
    yearSelected: [{ type: Output }],
    monthSelected: [{ type: Output }],
    _userSelection: [{ type: Output }],
    monthView: [{ type: ViewChild, args: [NgxMatMonthView,] }],
    yearView: [{ type: ViewChild, args: [NgxMatYearView,] }],
    multiYearView: [{ type: ViewChild, args: [NgxMatMultiYearView,] }]
};
if (false) {
    /**
     * An input indicating the type of the header component, if set.
     * @type {?}
     */
    NgxMatCalendar.prototype.headerComponent;
    /**
     * A portal containing the header component type for this calendar.
     * @type {?}
     */
    NgxMatCalendar.prototype._calendarHeaderPortal;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._intlChanges;
    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._moveFocusOnNextTick;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._startAt;
    /**
     * Whether the calendar should be started in month or year view.
     * @type {?}
     */
    NgxMatCalendar.prototype.startView;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._minDate;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._maxDate;
    /**
     * Function used to filter which dates are selectable.
     * @type {?}
     */
    NgxMatCalendar.prototype.dateFilter;
    /**
     * Function that can be used to add custom CSS classes to dates.
     * @type {?}
     */
    NgxMatCalendar.prototype.dateClass;
    /**
     * Emits when the currently selected date changes.
     * @type {?}
     */
    NgxMatCalendar.prototype.selectedChange;
    /**
     * Emits the year chosen in multiyear view.
     * This doesn't imply a change on the selected date.
     * @type {?}
     */
    NgxMatCalendar.prototype.yearSelected;
    /**
     * Emits the month chosen in year view.
     * This doesn't imply a change on the selected date.
     * @type {?}
     */
    NgxMatCalendar.prototype.monthSelected;
    /**
     * Emits when any date is selected.
     * @type {?}
     */
    NgxMatCalendar.prototype._userSelection;
    /**
     * Reference to the current month view component.
     * @type {?}
     */
    NgxMatCalendar.prototype.monthView;
    /**
     * Reference to the current year view component.
     * @type {?}
     */
    NgxMatCalendar.prototype.yearView;
    /**
     * Reference to the current multi-year view component.
     * @type {?}
     */
    NgxMatCalendar.prototype.multiYearView;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._clampedActiveDate;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._currentView;
    /**
     * Emits whenever there is a state change that the header may need to respond to.
     * @type {?}
     */
    NgxMatCalendar.prototype.stateChanges;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._dateFormats;
    /**
     * @type {?}
     * @private
     */
    NgxMatCalendar.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1jb21wb25lbnRzL2RhdGV0aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUF5QixNQUFNLHFCQUFxQixDQUFDO0FBQzdFLE9BQU8sRUFBc0MsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBd0IsUUFBUSxFQUFFLE1BQU0sRUFBaUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hQLE9BQU8sRUFBNkIsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQXFCLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQWdCN0MsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7SUFDL0IsWUFBb0IsS0FBd0IsRUFDTyxRQUEyQixFQUN4RCxZQUFrQyxFQUNKLFlBQStCLEVBQ2pGLGlCQUFvQztRQUpsQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNPLGFBQVEsR0FBUixRQUFRLENB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LGdCQUFnQjtnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQXJKbUMsaUJBQWlCO1lBRTVDLGlCQUFpQix1QkFtUXJCLFFBQVE7NENBQ1IsUUFBUSxZQUFJLE1BQU0sU0FBQyxvQkFBb0I7WUF2UTBCLGlCQUFpQjs7OzhCQXlKcEYsS0FBSztzQkFlTCxLQUFLO3dCQVFMLEtBQUs7dUJBR0wsS0FBSztzQkFRTCxLQUFLO3NCQVFMLEtBQUs7eUJBUUwsS0FBSzt3QkFHTCxLQUFLOzZCQUdMLE1BQU07MkJBTU4sTUFBTTs0QkFNTixNQUFNOzZCQUdOLE1BQU07d0JBR04sU0FBUyxTQUFDLGVBQWU7dUJBR3pCLFNBQVMsU0FBQyxjQUFjOzRCQUd4QixTQUFTLFNBQUMsbUJBQW1COzs7Ozs7O0lBaEY5Qix5Q0FBNkM7Ozs7O0lBRzdDLCtDQUFtQzs7Ozs7SUFFbkMsc0NBQW1DOzs7Ozs7OztJQU9uQyw4Q0FBcUM7Ozs7O0lBUXJDLGtDQUEyQjs7Ozs7SUFHM0IsbUNBQThDOzs7OztJQVE5QyxtQ0FBNEI7Ozs7O0lBUTVCLGtDQUEyQjs7Ozs7SUFRM0Isa0NBQTJCOzs7OztJQUczQixvQ0FBMEM7Ozs7O0lBRzFDLG1DQUEyRDs7Ozs7SUFHM0Qsd0NBQTJFOzs7Ozs7SUFNM0Usc0NBQXlFOzs7Ozs7SUFNekUsdUNBQTBFOzs7OztJQUcxRSx3Q0FBaUY7Ozs7O0lBR2pGLG1DQUEwRDs7Ozs7SUFHMUQsa0NBQXVEOzs7OztJQUd2RCx1Q0FBc0U7Ozs7O0lBWXRFLDRDQUE4Qjs7Ozs7SUFTOUIsc0NBQXNDOzs7OztJQUt0QyxzQ0FBbUM7Ozs7O0lBR2pDLHNDQUFzRDs7Ozs7SUFDdEQsc0NBQWlGOzs7OztJQUNqRiw0Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBDb21wb25lbnRUeXBlLCBQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzLCBNYXREYXRlcGlja2VySW50bCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hNYXREYXRlQWRhcHRlciB9IGZyb20gJy4vY29yZS9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZUZvcm1hdHMsIE5HWF9NQVRfREFURV9GT1JNQVRTIH0gZnJvbSAnLi9jb3JlL2RhdGUtZm9ybWF0cyc7XG5pbXBvcnQgeyBOZ3hNYXRNb250aFZpZXcgfSBmcm9tICcuL21vbnRoLXZpZXcnO1xuaW1wb3J0IHsgZ2V0QWN0aXZlT2Zmc2V0LCBpc1NhbWVNdWx0aVllYXJWaWV3LCBOZ3hNYXRNdWx0aVllYXJWaWV3LCB5ZWFyc1BlclBhZ2UgfSBmcm9tICcuL211bHRpLXllYXItdmlldyc7XG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciwgZm9ybWF0WWVhclJhbmdlIH0gZnJvbSAnLi91dGlscy9kYXRlLXV0aWxzJztcbmltcG9ydCB7IE5neE1hdFllYXJWaWV3IH0gZnJvbSAnLi95ZWFyLXZpZXcnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHZpZXdzIGZvciB0aGUgY2FsZW5kYXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCB0eXBlIE1hdENhbGVuZGFyVmlldyA9ICdtb250aCcgfCAneWVhcicgfCAnbXVsdGkteWVhcic7XG5cbi8qKiBEZWZhdWx0IGhlYWRlciBmb3IgTmd4TWF0Q2FsZW5kYXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1tYXQtY2FsZW5kYXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1oZWFkZXIuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbmd4TWF0Q2FsZW5kYXJIZWFkZXInLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0Q2FsZW5kYXJIZWFkZXI8RD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCxcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTmd4TWF0Q2FsZW5kYXIpKSBwdWJsaWMgY2FsZW5kYXI6IE5neE1hdENhbGVuZGFyPEQ+LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBOZ3hNYXREYXRlQWRhcHRlcjxEPixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5HWF9NQVRfREFURV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTmd4TWF0RGF0ZUZvcm1hdHMsXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB0aGlzLmNhbGVuZGFyLnN0YXRlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGN1cnJlbnQgY2FsZW5kYXIgdmlldy4gKi9cbiAgZ2V0IHBlcmlvZEJ1dHRvblRleHQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhci5jdXJyZW50VmlldyA9PSAnbW9udGgnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXJcbiAgICAgICAgLmZvcm1hdCh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyTGFiZWwpXG4gICAgICAgIC50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYWxlbmRhci5jdXJyZW50VmlldyA9PSAneWVhcicpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUpO1xuICAgIH1cblxuICAgIC8vIFRoZSBvZmZzZXQgZnJvbSB0aGUgYWN0aXZlIHllYXIgdG8gdGhlIFwic2xvdFwiIGZvciB0aGUgc3RhcnRpbmcgeWVhciBpcyB0aGVcbiAgICAvLyAqYWN0dWFsKiBmaXJzdCByZW5kZXJlZCB5ZWFyIGluIHRoZSBtdWx0aS15ZWFyIHZpZXcsIGFuZCB0aGUgbGFzdCB5ZWFyIGlzXG4gICAgLy8ganVzdCB5ZWFyc1BlclBhZ2UgLSAxIGF3YXkuXG4gICAgY29uc3QgYWN0aXZlWWVhciA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIodGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlKTtcbiAgICBjb25zdCBtaW5ZZWFyT2ZQYWdlID0gYWN0aXZlWWVhciAtIGdldEFjdGl2ZU9mZnNldChcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLCB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXIubWluRGF0ZSwgdGhpcy5jYWxlbmRhci5tYXhEYXRlKTtcbiAgICBjb25zdCBtYXhZZWFyT2ZQYWdlID0gbWluWWVhck9mUGFnZSArIHllYXJzUGVyUGFnZSAtIDE7XG4gICAgY29uc3QgbWluWWVhck5hbWUgPVxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5fZGF0ZUFkYXB0ZXIuY3JlYXRlRGF0ZShtaW5ZZWFyT2ZQYWdlLCAwLCAxKSk7XG4gICAgY29uc3QgbWF4WWVhck5hbWUgPVxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5fZGF0ZUFkYXB0ZXIuY3JlYXRlRGF0ZShtYXhZZWFyT2ZQYWdlLCAwLCAxKSk7XG4gICAgcmV0dXJuIGZvcm1hdFllYXJSYW5nZShtaW5ZZWFyTmFtZSwgbWF4WWVhck5hbWUpO1xuICB9XG5cbiAgZ2V0IHBlcmlvZEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ21vbnRoJyA/XG4gICAgICB0aGlzLl9pbnRsLnN3aXRjaFRvTXVsdGlZZWFyVmlld0xhYmVsIDogdGhpcy5faW50bC5zd2l0Y2hUb01vbnRoVmlld0xhYmVsO1xuICB9XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIGJ1dHRvbi4gKi9cbiAgZ2V0IHByZXZCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB7XG4gICAgICAnbW9udGgnOiB0aGlzLl9pbnRsLnByZXZNb250aExhYmVsLFxuICAgICAgJ3llYXInOiB0aGlzLl9pbnRsLnByZXZZZWFyTGFiZWwsXG4gICAgICAnbXVsdGkteWVhcic6IHRoaXMuX2ludGwucHJldk11bHRpWWVhckxhYmVsXG4gICAgfVt0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3XTtcbiAgfVxuXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBuZXh0IGJ1dHRvbi4gKi9cbiAgZ2V0IG5leHRCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB7XG4gICAgICAnbW9udGgnOiB0aGlzLl9pbnRsLm5leHRNb250aExhYmVsLFxuICAgICAgJ3llYXInOiB0aGlzLl9pbnRsLm5leHRZZWFyTGFiZWwsXG4gICAgICAnbXVsdGkteWVhcic6IHRoaXMuX2ludGwubmV4dE11bHRpWWVhckxhYmVsXG4gICAgfVt0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3XTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIHVzZXIgY2xpY2tzIG9uIHRoZSBwZXJpb2QgbGFiZWwuICovXG4gIGN1cnJlbnRQZXJpb2RDbGlja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPSB0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3ID09ICdtb250aCcgPyAnbXVsdGkteWVhcicgOiAnbW9udGgnO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIHByZXZpb3VzIGJ1dHRvbi4gKi9cbiAgcHJldmlvdXNDbGlja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSA9IHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ21vbnRoJyA/XG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKSA6XG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKFxuICAgICAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ3llYXInID8gLTEgOiAteWVhcnNQZXJQYWdlXG4gICAgICApO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLiAqL1xuICBuZXh0Q2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUgPSB0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3ID09ICdtb250aCcgP1xuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCAxKSA6XG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKFxuICAgICAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsXG4gICAgICAgIHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ3llYXInID8gMSA6IHllYXJzUGVyUGFnZVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBwcmV2aW91cyBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuICovXG4gIHByZXZpb3VzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXIubWluRGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhdGhpcy5jYWxlbmRhci5taW5EYXRlIHx8XG4gICAgICAhdGhpcy5faXNTYW1lVmlldyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXIubWluRGF0ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbmV4dCBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuICovXG4gIG5leHRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5jYWxlbmRhci5tYXhEYXRlIHx8XG4gICAgICAhdGhpcy5faXNTYW1lVmlldyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXIubWF4RGF0ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgdHdvIGRhdGVzIHJlcHJlc2VudCB0aGUgc2FtZSB2aWV3IGluIHRoZSBjdXJyZW50IHZpZXcgbW9kZSAobW9udGggb3IgeWVhcikuICovXG4gIHByaXZhdGUgX2lzU2FtZVZpZXcoZGF0ZTE6IEQsIGRhdGUyOiBEKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXIuY3VycmVudFZpZXcgPT0gJ21vbnRoJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIoZGF0ZTEpID09IHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIoZGF0ZTIpICYmXG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmdldE1vbnRoKGRhdGUxKSA9PSB0aGlzLl9kYXRlQWRhcHRlci5nZXRNb250aChkYXRlMik7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhbGVuZGFyLmN1cnJlbnRWaWV3ID09ICd5ZWFyJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIoZGF0ZTEpID09IHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIoZGF0ZTIpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2Ugd2UgYXJlIGluICdtdWx0aS15ZWFyJyB2aWV3LlxuICAgIHJldHVybiBpc1NhbWVNdWx0aVllYXJWaWV3KFxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIsIGRhdGUxLCBkYXRlMiwgdGhpcy5jYWxlbmRhci5taW5EYXRlLCB0aGlzLmNhbGVuZGFyLm1heERhdGUpO1xuICB9XG59XG5cbi8qKlxuICogQSBjYWxlbmRhciB0aGF0IGlzIHVzZWQgYXMgcGFydCBvZiB0aGUgZGF0ZXBpY2tlci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYWxlbmRhci5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWNhbGVuZGFyJyxcbiAgfSxcbiAgZXhwb3J0QXM6ICduZ3hNYXRDYWxlbmRhcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRDYWxlbmRhcjxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLyoqIEFuIGlucHV0IGluZGljYXRpbmcgdGhlIHR5cGUgb2YgdGhlIGhlYWRlciBjb21wb25lbnQsIGlmIHNldC4gKi9cbiAgQElucHV0KCkgaGVhZGVyQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XG5cbiAgLyoqIEEgcG9ydGFsIGNvbnRhaW5pbmcgdGhlIGhlYWRlciBjb21wb25lbnQgdHlwZSBmb3IgdGhpcyBjYWxlbmRhci4gKi9cbiAgX2NhbGVuZGFySGVhZGVyUG9ydGFsOiBQb3J0YWw8YW55PjtcblxuICBwcml2YXRlIF9pbnRsQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBzY2hlZHVsaW5nIHRoYXQgZm9jdXMgc2hvdWxkIGJlIG1vdmVkIHRvIHRoZSBhY3RpdmUgY2VsbCBvbiB0aGUgbmV4dCB0aWNrLlxuICAgKiBXZSBuZWVkIHRvIHNjaGVkdWxlIGl0LCByYXRoZXIgdGhhbiBkbyBpdCBpbW1lZGlhdGVseSwgYmVjYXVzZSB3ZSBoYXZlIHRvIHdhaXRcbiAgICogZm9yIEFuZ3VsYXIgdG8gcmUtZXZhbHVhdGUgdGhlIHZpZXcgY2hpbGRyZW4uXG4gICAqL1xuICBwcml2YXRlIF9tb3ZlRm9jdXNPbk5leHRUaWNrID0gZmFsc2U7XG5cbiAgLyoqIEEgZGF0ZSByZXByZXNlbnRpbmcgdGhlIHBlcmlvZCAobW9udGggb3IgeWVhcikgdG8gc3RhcnQgdGhlIGNhbGVuZGFyIGluLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RhcnRBdCgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9zdGFydEF0OyB9XG4gIHNldCBzdGFydEF0KHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9zdGFydEF0OiBEIHwgbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgc2hvdWxkIGJlIHN0YXJ0ZWQgaW4gbW9udGggb3IgeWVhciB2aWV3LiAqL1xuICBASW5wdXQoKSBzdGFydFZpZXc6IE1hdENhbGVuZGFyVmlldyA9ICdtb250aCc7XG5cbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkKCk6IEQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkOyB9XG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2dldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEIHwgbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9taW5EYXRlOyB9XG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcblxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RGF0ZSgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9tYXhEYXRlOyB9XG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcblxuICAvKiogRnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBEKSA9PiBib29sZWFuO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBjdXN0b20gQ1NTIGNsYXNzZXMgdG8gZGF0ZXMuICovXG4gIEBJbnB1dCgpIGRhdGVDbGFzczogKGRhdGU6IEQpID0+IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXM7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgeWVhciBjaG9zZW4gaW4gbXVsdGl5ZWFyIHZpZXcuXG4gICAqIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIG1vbnRoIGNob3NlbiBpbiB5ZWFyIHZpZXcuXG4gICAqIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBtb250aFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gYW55IGRhdGUgaXMgc2VsZWN0ZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBfdXNlclNlbGVjdGlvbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgbW9udGggdmlldyBjb21wb25lbnQuICovXG4gIEBWaWV3Q2hpbGQoTmd4TWF0TW9udGhWaWV3KSBtb250aFZpZXc6IE5neE1hdE1vbnRoVmlldzxEPjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHllYXIgdmlldyBjb21wb25lbnQuICovXG4gIEBWaWV3Q2hpbGQoTmd4TWF0WWVhclZpZXcpIHllYXJWaWV3OiBOZ3hNYXRZZWFyVmlldzxEPjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IG11bHRpLXllYXIgdmlldyBjb21wb25lbnQuICovXG4gIEBWaWV3Q2hpbGQoTmd4TWF0TXVsdGlZZWFyVmlldykgbXVsdGlZZWFyVmlldzogTmd4TWF0TXVsdGlZZWFyVmlldzxEPjtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgYWN0aXZlIGRhdGUuIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0aW1lIHBlcmlvZCBpcyBzaG93biBhbmQgd2hpY2ggZGF0ZSBpc1xuICAgKiBoaWdobGlnaHRlZCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gICAqL1xuICBnZXQgYWN0aXZlRGF0ZSgpOiBEIHsgcmV0dXJuIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlOyB9XG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XG4gICAgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5jbGFtcERhdGUodmFsdWUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfY2xhbXBlZEFjdGl2ZURhdGU6IEQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIGlzIGluIG1vbnRoIHZpZXcuICovXG4gIGdldCBjdXJyZW50VmlldygpOiBNYXRDYWxlbmRhclZpZXcgeyByZXR1cm4gdGhpcy5fY3VycmVudFZpZXc7IH1cbiAgc2V0IGN1cnJlbnRWaWV3KHZhbHVlOiBNYXRDYWxlbmRhclZpZXcpIHtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IHZhbHVlO1xuICAgIHRoaXMuX21vdmVGb2N1c09uTmV4dFRpY2sgPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX2N1cnJlbnRWaWV3OiBNYXRDYWxlbmRhclZpZXc7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW5ldmVyIHRoZXJlIGlzIGEgc3RhdGUgY2hhbmdlIHRoYXQgdGhlIGhlYWRlciBtYXkgbmVlZCB0byByZXNwb25kIHRvLlxuICAgKi9cbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihfaW50bDogTWF0RGF0ZXBpY2tlckludGwsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IE5neE1hdERhdGVBZGFwdGVyPEQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTkdYX01BVF9EQVRFX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBOZ3hNYXREYXRlRm9ybWF0cyxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIpIHtcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKCdOZ3hEYXRlQWRhcHRlcicpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKCdOR1hfTUFUX0RBVEVfRk9STUFUUycpO1xuICAgIH1cblxuICAgIHRoaXMuX2ludGxDaGFuZ2VzID0gX2ludGwuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2NhbGVuZGFySGVhZGVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbCh0aGlzLmhlYWRlckNvbXBvbmVudCB8fCBOZ3hNYXRDYWxlbmRhckhlYWRlcik7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zdGFydEF0IHx8IHRoaXMuX2RhdGVBZGFwdGVyLnRvZGF5KCk7XG5cbiAgICAvLyBBc3NpZ24gdG8gdGhlIHByaXZhdGUgcHJvcGVydHkgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0byBtb3ZlIGZvY3VzIG9uIGluaXQuXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSB0aGlzLnN0YXJ0VmlldztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5fbW92ZUZvY3VzT25OZXh0VGljaykge1xuICAgICAgdGhpcy5fbW92ZUZvY3VzT25OZXh0VGljayA9IGZhbHNlO1xuICAgICAgdGhpcy5mb2N1c0FjdGl2ZUNlbGwoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9pbnRsQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgY2hhbmdlID1cbiAgICAgIGNoYW5nZXNbJ21pbkRhdGUnXSB8fCBjaGFuZ2VzWydtYXhEYXRlJ10gfHwgY2hhbmdlc1snZGF0ZUZpbHRlciddO1xuXG4gICAgaWYgKGNoYW5nZSAmJiAhY2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy5fZ2V0Q3VycmVudFZpZXdDb21wb25lbnQoKTtcblxuICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBgZGV0ZWN0Q2hhbmdlc2AgbWFudWFsbHkgaGVyZSwgYmVjYXVzZSB0aGUgYG1pbkRhdGVgLCBgbWF4RGF0ZWAgZXRjLiBhcmVcbiAgICAgICAgLy8gcGFzc2VkIGRvd24gdG8gdGhlIHZpZXcgdmlhIGRhdGEgYmluZGluZ3Mgd2hpY2ggd29uJ3QgYmUgdXAtdG8tZGF0ZSB3aGVuIHdlIGNhbGwgYF9pbml0YC5cbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB2aWV3Ll9pbml0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgZm9jdXNBY3RpdmVDZWxsKCkge1xuICAgIHRoaXMuX2dldEN1cnJlbnRWaWV3Q29tcG9uZW50KCkuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdG9kYXkncyBkYXRlIGFmdGVyIGFuIHVwZGF0ZSBvZiB0aGUgYWN0aXZlIGRhdGUgKi9cbiAgdXBkYXRlVG9kYXlzRGF0ZSgpIHtcbiAgICBsZXQgdmlldyA9IHRoaXMuY3VycmVudFZpZXcgPT0gJ21vbnRoJyA/IHRoaXMubW9udGhWaWV3IDpcbiAgICAgICh0aGlzLmN1cnJlbnRWaWV3ID09ICd5ZWFyJyA/IHRoaXMueWVhclZpZXcgOiB0aGlzLm11bHRpWWVhclZpZXcpO1xuXG4gICAgdmlldy5uZ0FmdGVyQ29udGVudEluaXQoKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIGRhdGUgc2VsZWN0aW9uIGluIHRoZSBtb250aCB2aWV3LiAqL1xuICBfZGF0ZVNlbGVjdGVkKGRhdGU6IEQgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGRhdGUgJiYgIXRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKGRhdGUsIHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEhhbmRsZXMgeWVhciBzZWxlY3Rpb24gaW4gdGhlIG11bHRpeWVhciB2aWV3LiAqL1xuICBfeWVhclNlbGVjdGVkSW5NdWx0aVllYXJWaWV3KG5vcm1hbGl6ZWRZZWFyOiBEKSB7XG4gICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XG4gIH1cblxuICAvKiogSGFuZGxlcyBtb250aCBzZWxlY3Rpb24gaW4gdGhlIHllYXIgdmlldy4gKi9cbiAgX21vbnRoU2VsZWN0ZWRJblllYXJWaWV3KG5vcm1hbGl6ZWRNb250aDogRCkge1xuICAgIHRoaXMubW9udGhTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRNb250aCk7XG4gIH1cblxuICBfdXNlclNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJTZWxlY3Rpb24uZW1pdCgpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgeWVhci9tb250aCBzZWxlY3Rpb24gaW4gdGhlIG11bHRpLXllYXIveWVhciB2aWV3cy4gKi9cbiAgX2dvVG9EYXRlSW5WaWV3KGRhdGU6IEQsIHZpZXc6ICdtb250aCcgfCAneWVhcicgfCAnbXVsdGkteWVhcicpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuICAgIHRoaXMuY3VycmVudFZpZXcgPSB2aWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVjay5cbiAgICogQHJldHVybnMgVGhlIGdpdmVuIG9iamVjdCBpZiBpdCBpcyBib3RoIGEgZGF0ZSBpbnN0YW5jZSBhbmQgdmFsaWQsIG90aGVyd2lzZSBudWxsLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xuICAgIHJldHVybiAodGhpcy5fZGF0ZUFkYXB0ZXIuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJiB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKG9iaikpID8gb2JqIDogbnVsbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQgaW5zdGFuY2UgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgY3VycmVudCBjYWxlbmRhciB2aWV3LiAqL1xuICBwcml2YXRlIF9nZXRDdXJyZW50Vmlld0NvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb250aFZpZXcgfHwgdGhpcy55ZWFyVmlldyB8fCB0aGlzLm11bHRpWWVhclZpZXc7XG4gIH1cbn1cbiJdfQ==