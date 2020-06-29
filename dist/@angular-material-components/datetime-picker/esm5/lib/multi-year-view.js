/**
 * @fileoverview added by tsickle
 * Generated from: lib/multi-year-view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOWN_ARROW, END, ENTER, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW, SPACE, } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { MatCalendarBody, MatCalendarCell } from '@angular/material/datepicker';
import { NgxMatDateAdapter } from './core/date-adapter';
/** @type {?} */
export var yearsPerPage = 24;
/** @type {?} */
export var yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * \@docs-private
 * @template D
 */
var NgxMatMultiYearView = /** @class */ (function () {
    function NgxMatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new year is selected.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new EventEmitter();
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(NgxMatMultiYearView.prototype, "activeDate", {
        /** The date to display in this multi-year view (everything other than the year is ignored). */
        get: /**
         * The date to display in this multi-year view (everything other than the year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            /** @type {?} */
            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
            if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatMultiYearView.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatMultiYearView.prototype, "minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMatMultiYearView.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMatMultiYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Initializes this multi-year view. */
    /**
     * Initializes this multi-year view.
     * @return {?}
     */
    NgxMatMultiYearView.prototype._init = /**
     * Initializes this multi-year view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        // We want a range years such that we maximize the number of
        // enabled dates visible at once. This prevents issues where the minimum year
        // is the last item of a page OR the maximum year is the first item of a page.
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view.
        /** @type {?} */
        var activeYear = this._dateAdapter.getYear(this._activeDate);
        /** @type {?} */
        var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        this._years = [];
        for (var i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map((/**
                 * @param {?} year
                 * @return {?}
                 */
                function (year) { return _this._createCellForYear(year); })));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /** Handles when a new year is selected. */
    /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    NgxMatMultiYearView.prototype._yearSelected = /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
        /** @type {?} */
        var month = this._dateAdapter.getMonth(this.activeDate);
        /** @type {?} */
        var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    NgxMatMultiYearView.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var oldActiveDate = this._activeDate;
        /** @type {?} */
        var isRtl = this._isRtl();
        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case HOME:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case END:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case PAGE_UP:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case PAGE_DOWN:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case ENTER:
            case SPACE:
                this._yearSelected(this._dateAdapter.getYear(this._activeDate));
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    NgxMatMultiYearView.prototype._getActiveCell = /**
     * @return {?}
     */
    function () {
        return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    NgxMatMultiYearView.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        this._matCalendarBody._focusActiveCell();
    };
    /** Creates an MatCalendarCell for the given year. */
    /**
     * Creates an MatCalendarCell for the given year.
     * @private
     * @param {?} year
     * @return {?}
     */
    NgxMatMultiYearView.prototype._createCellForYear = /**
     * Creates an MatCalendarCell for the given year.
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));
        return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
    };
    /** Whether the given year is enabled. */
    /**
     * Whether the given year is enabled.
     * @private
     * @param {?} year
     * @return {?}
     */
    NgxMatMultiYearView.prototype._shouldEnableYear = /**
     * Whether the given year is enabled.
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        /** @type {?} */
        var firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
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
    NgxMatMultiYearView.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Determines whether the user has the RTL layout direction. */
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    NgxMatMultiYearView.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    NgxMatMultiYearView.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-mat-multi-year-view',
                    template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [selectedValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                    exportAs: 'ngxMatMultiYearView',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NgxMatMultiYearView.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgxMatDateAdapter, decorators: [{ type: Optional }] },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    NgxMatMultiYearView.propDecorators = {
        activeDate: [{ type: Input }],
        selected: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        dateFilter: [{ type: Input }],
        selectedChange: [{ type: Output }],
        yearSelected: [{ type: Output }],
        activeDateChange: [{ type: Output }],
        _matCalendarBody: [{ type: ViewChild, args: [MatCalendarBody,] }]
    };
    return NgxMatMultiYearView;
}());
export { NgxMatMultiYearView };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxMatMultiYearView.prototype._activeDate;
    /**
     * @type {?}
     * @private
     */
    NgxMatMultiYearView.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    NgxMatMultiYearView.prototype._minDate;
    /**
     * @type {?}
     * @private
     */
    NgxMatMultiYearView.prototype._maxDate;
    /**
     * A function used to filter which dates are selectable.
     * @type {?}
     */
    NgxMatMultiYearView.prototype.dateFilter;
    /**
     * Emits when a new year is selected.
     * @type {?}
     */
    NgxMatMultiYearView.prototype.selectedChange;
    /**
     * Emits the selected year. This doesn't imply a change on the selected date
     * @type {?}
     */
    NgxMatMultiYearView.prototype.yearSelected;
    /**
     * Emits when any date is activated.
     * @type {?}
     */
    NgxMatMultiYearView.prototype.activeDateChange;
    /**
     * The body of calendar table
     * @type {?}
     */
    NgxMatMultiYearView.prototype._matCalendarBody;
    /**
     * Grid of calendar cells representing the currently displayed years.
     * @type {?}
     */
    NgxMatMultiYearView.prototype._years;
    /**
     * The year that today falls on.
     * @type {?}
     */
    NgxMatMultiYearView.prototype._todayYear;
    /**
     * The year of the selected date. Null if the selected date is null.
     * @type {?}
     */
    NgxMatMultiYearView.prototype._selectedYear;
    /**
     * @type {?}
     * @private
     */
    NgxMatMultiYearView.prototype._changeDetectorRef;
    /** @type {?} */
    NgxMatMultiYearView.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    NgxMatMultiYearView.prototype._dir;
}
/**
 * @template D
 * @param {?} dateAdapter
 * @param {?} date1
 * @param {?} date2
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
    /** @type {?} */
    var year1 = dateAdapter.getYear(date1);
    /** @type {?} */
    var year2 = dateAdapter.getYear(date2);
    /** @type {?} */
    var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
    return Math.floor((year1 - startingYear) / yearsPerPage) ===
        Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 * @template D
 * @param {?} dateAdapter
 * @param {?} activeDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
    /** @type {?} */
    var activeYear = dateAdapter.getYear(activeDate);
    return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 * @template D
 * @param {?} dateAdapter
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
    /** @type {?} */
    var startingYear = 0;
    if (maxDate) {
        /** @type {?} */
        var maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
    }
    else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
    }
    return startingYear;
}
/**
 * Gets remainder that is non-negative, even if first number is negative
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function euclideanModulo(a, b) {
    return (a % b + b) % b;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGkteWVhci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtY29tcG9uZW50cy9kYXRldGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvbXVsdGkteWVhci12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsR0FBRyxFQUNILEtBQUssRUFDTCxJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFDVCxPQUFPLEVBQ1AsV0FBVyxFQUNYLFFBQVEsRUFDUixLQUFLLEdBQ04sTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXhELE1BQU0sS0FBTyxZQUFZLEdBQUcsRUFBRTs7QUFFOUIsTUFBTSxLQUFPLFdBQVcsR0FBRyxDQUFDOzs7Ozs7QUFNNUI7SUF5RUUsNkJBQW9CLGtCQUFxQyxFQUMxQixZQUFrQyxFQUNqQyxJQUFxQjtRQUZqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFpQjs7OztRQXRCbEMsbUJBQWMsR0FBb0IsSUFBSSxZQUFZLEVBQUssQ0FBQzs7OztRQUd4RCxpQkFBWSxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDOzs7O1FBR3RELHFCQUFnQixHQUFvQixJQUFJLFlB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Q0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsZUFBZSxDQUM3QixXQUFpQyxFQUFFLFVBQWEsRUFBRSxPQUFpQixFQUFFLE9BQWlCOztRQUNoRixVQUFVLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDbEQsT0FBTyxlQUFlLENBQUMsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFDbEYsWUFBWSxDQUFDLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7OztBQU1ELFNBQVMsZUFBZSxDQUN0QixXQUFpQyxFQUFFLE9BQWlCLEVBQUUsT0FBaUI7O1FBQ25FLFlBQVksR0FBRyxDQUFDO0lBQ3BCLElBQUksT0FBTyxFQUFFOztZQUNMLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM1QyxZQUFZLEdBQUcsT0FBTyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7S0FDM0M7U0FBTSxJQUFJLE9BQU8sRUFBRTtRQUNsQixZQUFZLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7Ozs7Ozs7QUFHRCxTQUFTLGVBQWUsQ0FBRSxDQUFTLEVBQUUsQ0FBUztJQUM1QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBET1dOX0FSUk9XLFxuICBFTkQsXG4gIEVOVEVSLFxuICBIT01FLFxuICBMRUZUX0FSUk9XLFxuICBQQUdFX0RPV04sXG4gIFBBR0VfVVAsXG4gIFJJR0hUX0FSUk9XLFxuICBVUF9BUlJPVyxcbiAgU1BBQ0UsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBNYXRDYWxlbmRhckJvZHksIE1hdENhbGVuZGFyQ2VsbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvZGF0ZS1hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IHllYXJzUGVyUGFnZSA9IDI0O1xuXG5leHBvcnQgY29uc3QgeWVhcnNQZXJSb3cgPSA0O1xuXG4vKipcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgYSB5ZWFyIHNlbGVjdG9yIGluIHRoZSBkYXRlcGlja2VyLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LW11bHRpLXllYXItdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnbXVsdGkteWVhci12aWV3Lmh0bWwnLFxuICBleHBvcnRBczogJ25neE1hdE11bHRpWWVhclZpZXcnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRNdWx0aVllYXJWaWV3PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgbXVsdGkteWVhciB2aWV3IChldmVyeXRoaW5nIG90aGVyIHRoYW4gdGhlIHllYXIgaXMgaWdub3JlZCkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVEYXRlKCk6IEQgeyByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTsgfVxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRCkge1xuICAgIGxldCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZTtcbiAgICBjb25zdCB2YWxpZERhdGUgPVxuICAgICAgICB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKSB8fCB0aGlzLl9kYXRlQWRhcHRlci50b2RheSgpO1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5jbGFtcERhdGUodmFsaWREYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XG5cbiAgICBpZiAoIWlzU2FtZU11bHRpWWVhclZpZXcoXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlciwgb2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2FjdGl2ZURhdGU6IEQ7XG5cbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkKCk6IEQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkOyB9XG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2dldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xuICAgIHRoaXMuX3NlbGVjdGVkWWVhciA9IHRoaXMuX3NlbGVjdGVkICYmIHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIodGhpcy5fc2VsZWN0ZWQpO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEIHwgbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9taW5EYXRlOyB9XG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcblxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RGF0ZSgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9tYXhEYXRlOyB9XG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcblxuICAvKiogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQpID0+IGJvb2xlYW47XG5cbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgeWVhciBpcyBzZWxlY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyLiBUaGlzIGRvZXNuJ3QgaW1wbHkgYSBjaGFuZ2Ugb24gdGhlIHNlbGVjdGVkIGRhdGUgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHllYXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIGFueSBkYXRlIGlzIGFjdGl2YXRlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcblxuICAvKiogVGhlIGJvZHkgb2YgY2FsZW5kYXIgdGFibGUgKi9cbiAgQFZpZXdDaGlsZChNYXRDYWxlbmRhckJvZHkpIF9tYXRDYWxlbmRhckJvZHk6IE1hdENhbGVuZGFyQm9keTtcblxuICAvKiogR3JpZCBvZiBjYWxlbmRhciBjZWxscyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgeWVhcnMuICovXG4gIF95ZWFyczogTWF0Q2FsZW5kYXJDZWxsW11bXTtcblxuICAvKiogVGhlIHllYXIgdGhhdCB0b2RheSBmYWxscyBvbi4gKi9cbiAgX3RvZGF5WWVhcjogbnVtYmVyO1xuXG4gIC8qKiBUaGUgeWVhciBvZiB0aGUgc2VsZWN0ZWQgZGF0ZS4gTnVsbCBpZiB0aGUgc2VsZWN0ZWQgZGF0ZSBpcyBudWxsLiAqL1xuICBfc2VsZWN0ZWRZZWFyOiBudW1iZXIgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHVibGljIF9kYXRlQWRhcHRlcjogTmd4TWF0RGF0ZUFkYXB0ZXI8RD4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2Rpcj86IERpcmVjdGlvbmFsaXR5KSB7XG5cbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBtdWx0aS15ZWFyIHZpZXcuICovXG4gIF9pbml0KCkge1xuICAgIHRoaXMuX3RvZGF5WWVhciA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIodGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKSk7XG5cbiAgICAvLyBXZSB3YW50IGEgcmFuZ2UgeWVhcnMgc3VjaCB0aGF0IHdlIG1heGltaXplIHRoZSBudW1iZXIgb2ZcbiAgICAvLyBlbmFibGVkIGRhdGVzIHZpc2libGUgYXQgb25jZS4gVGhpcyBwcmV2ZW50cyBpc3N1ZXMgd2hlcmUgdGhlIG1pbmltdW0geWVhclxuICAgIC8vIGlzIHRoZSBsYXN0IGl0ZW0gb2YgYSBwYWdlIE9SIHRoZSBtYXhpbXVtIHllYXIgaXMgdGhlIGZpcnN0IGl0ZW0gb2YgYSBwYWdlLlxuXG4gICAgLy8gVGhlIG9mZnNldCBmcm9tIHRoZSBhY3RpdmUgeWVhciB0byB0aGUgXCJzbG90XCIgZm9yIHRoZSBzdGFydGluZyB5ZWFyIGlzIHRoZVxuICAgIC8vICphY3R1YWwqIGZpcnN0IHJlbmRlcmVkIHllYXIgaW4gdGhlIG11bHRpLXllYXIgdmlldy5cbiAgICBjb25zdCBhY3RpdmVZZWFyID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLl9hY3RpdmVEYXRlKTtcbiAgICBjb25zdCBtaW5ZZWFyT2ZQYWdlID0gYWN0aXZlWWVhciAtIGdldEFjdGl2ZU9mZnNldChcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLCB0aGlzLmFjdGl2ZURhdGUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcblxuICAgIHRoaXMuX3llYXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIHJvdzogbnVtYmVyW10gPSBbXTsgaSA8IHllYXJzUGVyUGFnZTsgaSsrKSB7XG4gICAgICByb3cucHVzaChtaW5ZZWFyT2ZQYWdlICsgaSk7XG4gICAgICBpZiAocm93Lmxlbmd0aCA9PSB5ZWFyc1BlclJvdykge1xuICAgICAgICB0aGlzLl95ZWFycy5wdXNoKHJvdy5tYXAoeWVhciA9PiB0aGlzLl9jcmVhdGVDZWxsRm9yWWVhcih5ZWFyKSkpO1xuICAgICAgICByb3cgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogSGFuZGxlcyB3aGVuIGEgbmV3IHllYXIgaXMgc2VsZWN0ZWQuICovXG4gIF95ZWFyU2VsZWN0ZWQoeWVhcjogbnVtYmVyKSB7XG4gICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdCh0aGlzLl9kYXRlQWRhcHRlci5jcmVhdGVEYXRlKHllYXIsIDAsIDEpKTtcbiAgICBsZXQgbW9udGggPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGxldCBkYXlzSW5Nb250aCA9XG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmdldE51bURheXNJbk1vbnRoKHRoaXMuX2RhdGVBZGFwdGVyLmNyZWF0ZURhdGUoeWVhciwgbW9udGgsIDEpKTtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5fZGF0ZUFkYXB0ZXIuY3JlYXRlRGF0ZSh5ZWFyLCBtb250aCxcbiAgICAgICAgTWF0aC5taW4odGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCBkYXlzSW5Nb250aCkpKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzIG9uIHRoZSBjYWxlbmRhciBib2R5IHdoZW4gY2FsZW5kYXIgaXMgaW4gbXVsdGkteWVhciB2aWV3LiAqL1xuICBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlO1xuICAgIGNvbnN0IGlzUnRsID0gdGhpcy5faXNSdGwoKTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIGlzUnRsID8gMSA6IC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIGlzUnRsID8gLTEgOiAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIC15ZWFyc1BlclJvdyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIHllYXJzUGVyUm93KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhPTUU6XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSxcbiAgICAgICAgICAtZ2V0QWN0aXZlT2Zmc2V0KHRoaXMuX2RhdGVBZGFwdGVyLCB0aGlzLmFjdGl2ZURhdGUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFTkQ6XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSxcbiAgICAgICAgICB5ZWFyc1BlclBhZ2UgLSBnZXRBY3RpdmVPZmZzZXQoXG4gICAgICAgICAgICB0aGlzLl9kYXRlQWRhcHRlciwgdGhpcy5hY3RpdmVEYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkgLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfVVA6XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9XG4gICAgICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKFxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZURhdGUsIGV2ZW50LmFsdEtleSA/IC15ZWFyc1BlclBhZ2UgKiAxMCA6IC15ZWFyc1BlclBhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUEFHRV9ET1dOOlxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPVxuICAgICAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyhcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVEYXRlLCBldmVudC5hbHRLZXkgPyB5ZWFyc1BlclBhZ2UgKiAxMCA6IHllYXJzUGVyUGFnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIHRoaXMuX3llYXJTZWxlY3RlZCh0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyKHRoaXMuX2FjdGl2ZURhdGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBEb24ndCBwcmV2ZW50IGRlZmF1bHQgb3IgZm9jdXMgYWN0aXZlIGNlbGwgb24ga2V5cyB0aGF0IHdlIGRvbid0IGV4cGxpY2l0bHkgaGFuZGxlLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZShvbGRBY3RpdmVEYXRlLCB0aGlzLmFjdGl2ZURhdGUpKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xuICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIF9nZXRBY3RpdmVDZWxsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZU9mZnNldCh0aGlzLl9kYXRlQWRhcHRlciwgdGhpcy5hY3RpdmVEYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgYWN0aXZlIGNlbGwgYWZ0ZXIgdGhlIG1pY3JvdGFzayBxdWV1ZSBpcyBlbXB0eS4gKi9cbiAgX2ZvY3VzQWN0aXZlQ2VsbCgpIHtcbiAgICB0aGlzLl9tYXRDYWxlbmRhckJvZHkuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYW4gTWF0Q2FsZW5kYXJDZWxsIGZvciB0aGUgZ2l2ZW4geWVhci4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQ2VsbEZvclllYXIoeWVhcjogbnVtYmVyKSB7XG4gICAgbGV0IHllYXJOYW1lID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5fZGF0ZUFkYXB0ZXIuY3JlYXRlRGF0ZSh5ZWFyLCAwLCAxKSk7XG4gICAgcmV0dXJuIG5ldyBNYXRDYWxlbmRhckNlbGwoeWVhciwgeWVhck5hbWUsIHllYXJOYW1lLCB0aGlzLl9zaG91bGRFbmFibGVZZWFyKHllYXIpKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiB5ZWFyIGlzIGVuYWJsZWQuICovXG4gIHByaXZhdGUgX3Nob3VsZEVuYWJsZVllYXIoeWVhcjogbnVtYmVyKSB7XG4gICAgLy8gZGlzYWJsZSBpZiB0aGUgeWVhciBpcyBncmVhdGVyIHRoYW4gbWF4RGF0ZSBsb3dlciB0aGFuIG1pbkRhdGVcbiAgICBpZiAoeWVhciA9PT0gdW5kZWZpbmVkIHx8IHllYXIgPT09IG51bGwgfHxcbiAgICAgICAgKHRoaXMubWF4RGF0ZSAmJiB5ZWFyID4gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLm1heERhdGUpKSB8fFxuICAgICAgICAodGhpcy5taW5EYXRlICYmIHllYXIgPCB0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyKHRoaXMubWluRGF0ZSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZW5hYmxlIGlmIGl0IHJlYWNoZXMgaGVyZSBhbmQgdGhlcmUncyBubyBmaWx0ZXIgZGVmaW5lZFxuICAgIGlmICghdGhpcy5kYXRlRmlsdGVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE9mWWVhciA9IHRoaXMuX2RhdGVBZGFwdGVyLmNyZWF0ZURhdGUoeWVhciwgMCwgMSk7XG5cbiAgICAvLyBJZiBhbnkgZGF0ZSBpbiB0aGUgeWVhciBpcyBlbmFibGVkIGNvdW50IHRoZSB5ZWFyIGFzIGVuYWJsZWQuXG4gICAgZm9yIChsZXQgZGF0ZSA9IGZpcnN0T2ZZZWFyOyB0aGlzLl9kYXRlQWRhcHRlci5nZXRZZWFyKGRhdGUpID09IHllYXI7XG4gICAgICBkYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIDEpKSB7XG4gICAgICBpZiAodGhpcy5kYXRlRmlsdGVyKGRhdGUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIFRoZSBnaXZlbiBvYmplY3QgaWYgaXQgaXMgYm90aCBhIGRhdGUgaW5zdGFuY2UgYW5kIHZhbGlkLCBvdGhlcndpc2UgbnVsbC5cbiAgICovXG4gIHByaXZhdGUgX2dldFZhbGlkRGF0ZU9yTnVsbChvYmo6IGFueSk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gKHRoaXMuX2RhdGVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XG4gIH1cblxuICAvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1c2VyIGhhcyB0aGUgUlRMIGxheW91dCBkaXJlY3Rpb24uICovXG4gIHByaXZhdGUgX2lzUnRsKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXIgJiYgdGhpcy5fZGlyLnZhbHVlID09PSAncnRsJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTXVsdGlZZWFyVmlldzxEPihcbiAgZGF0ZUFkYXB0ZXI6IE5neE1hdERhdGVBZGFwdGVyPEQ+LCBkYXRlMTogRCwgZGF0ZTI6IEQsIG1pbkRhdGU6IEQgfCBudWxsLCBtYXhEYXRlOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xuICBjb25zdCB5ZWFyMSA9IGRhdGVBZGFwdGVyLmdldFllYXIoZGF0ZTEpO1xuICBjb25zdCB5ZWFyMiA9IGRhdGVBZGFwdGVyLmdldFllYXIoZGF0ZTIpO1xuICBjb25zdCBzdGFydGluZ1llYXIgPSBnZXRTdGFydGluZ1llYXIoZGF0ZUFkYXB0ZXIsIG1pbkRhdGUsIG1heERhdGUpO1xuICByZXR1cm4gTWF0aC5mbG9vcigoeWVhcjEgLSBzdGFydGluZ1llYXIpIC8geWVhcnNQZXJQYWdlKSA9PT1cbiAgICAgICAgICBNYXRoLmZsb29yKCh5ZWFyMiAtIHN0YXJ0aW5nWWVhcikgLyB5ZWFyc1BlclBhZ2UpO1xufVxuXG4vKipcbiAqIFdoZW4gdGhlIG11bHRpLXllYXIgdmlldyBpcyBmaXJzdCBvcGVuZWQsIHRoZSBhY3RpdmUgeWVhciB3aWxsIGJlIGluIHZpZXcuXG4gKiBTbyB3ZSBjb21wdXRlIGhvdyBtYW55IHllYXJzIGFyZSBiZXR3ZWVuIHRoZSBhY3RpdmUgeWVhciBhbmQgdGhlICpzbG90KiB3aGVyZSBvdXJcbiAqIFwic3RhcnRpbmdZZWFyXCIgd2lsbCByZW5kZXIgd2hlbiBwYWdlZCBpbnRvIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVPZmZzZXQ8RD4oXG4gIGRhdGVBZGFwdGVyOiBOZ3hNYXREYXRlQWRhcHRlcjxEPiwgYWN0aXZlRGF0ZTogRCwgbWluRGF0ZTogRCB8IG51bGwsIG1heERhdGU6IEQgfCBudWxsKTogbnVtYmVyIHtcbiAgY29uc3QgYWN0aXZlWWVhciA9IGRhdGVBZGFwdGVyLmdldFllYXIoYWN0aXZlRGF0ZSk7XG4gIHJldHVybiBldWNsaWRlYW5Nb2R1bG8oKGFjdGl2ZVllYXIgLSBnZXRTdGFydGluZ1llYXIoZGF0ZUFkYXB0ZXIsIG1pbkRhdGUsIG1heERhdGUpKSxcbiAgICB5ZWFyc1BlclBhZ2UpO1xufVxuXG4vKipcbiAqIFdlIHBpY2sgYSBcInN0YXJ0aW5nXCIgeWVhciBzdWNoIHRoYXQgZWl0aGVyIHRoZSBtYXhpbXVtIHllYXIgd291bGQgYmUgYXQgdGhlIGVuZFxuICogb3IgdGhlIG1pbmltdW0geWVhciB3b3VsZCBiZSBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgcGFnZS5cbiAqL1xuZnVuY3Rpb24gZ2V0U3RhcnRpbmdZZWFyPEQ+KFxuICBkYXRlQWRhcHRlcjogTmd4TWF0RGF0ZUFkYXB0ZXI8RD4sIG1pbkRhdGU6IEQgfCBudWxsLCBtYXhEYXRlOiBEIHwgbnVsbCk6IG51bWJlciB7XG4gIGxldCBzdGFydGluZ1llYXIgPSAwO1xuICBpZiAobWF4RGF0ZSkge1xuICAgIGNvbnN0IG1heFllYXIgPSBkYXRlQWRhcHRlci5nZXRZZWFyKG1heERhdGUpO1xuICAgIHN0YXJ0aW5nWWVhciA9IG1heFllYXIgLSB5ZWFyc1BlclBhZ2UgKyAxO1xuICB9IGVsc2UgaWYgKG1pbkRhdGUpIHtcbiAgICBzdGFydGluZ1llYXIgPSBkYXRlQWRhcHRlci5nZXRZZWFyKG1pbkRhdGUpO1xuICB9XG4gIHJldHVybiBzdGFydGluZ1llYXI7XG59XG5cbi8qKiBHZXRzIHJlbWFpbmRlciB0aGF0IGlzIG5vbi1uZWdhdGl2ZSwgZXZlbiBpZiBmaXJzdCBudW1iZXIgaXMgbmVnYXRpdmUgKi9cbmZ1bmN0aW9uIGV1Y2xpZGVhbk1vZHVsbyAoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gKGEgJSBiICsgYikgJSBiO1xufVxuIl19