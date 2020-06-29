/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/native-date-adapter.ts
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
import { Platform } from '@angular/cdk/platform';
import { Inject, Injectable, Optional } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMatDateAdapter } from './date-adapter';
// TODO(mmalerba): Remove when we no longer support safari 9.
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */
var SUPPORTS_INTL_API;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    SUPPORTS_INTL_API = typeof Intl != 'undefined';
}
catch (_a) {
    SUPPORTS_INTL_API = false;
}
/**
 * The default month names to use if Intl API is not available.
 * @type {?}
 */
var DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
var ɵ0 = /**
 * @param {?} i
 * @return {?}
 */
function (i) { return String(i + 1); };
/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */
var DEFAULT_DATE_NAMES = range(31, (ɵ0));
/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */
var DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 * @type {?}
 */
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
var NgxMatNativeDateAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(NgxMatNativeDateAdapter, _super);
    function NgxMatNativeDateAdapter(matDateLocale, platform) {
        var _this = _super.call(this) || this;
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */
        _this.useUtcForDisplay = true;
        _super.prototype.setLocale.call(_this, matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        _this.useUtcForDisplay = !platform.TRIDENT;
        _this._clampDate = platform.TRIDENT || platform.EDGE;
        return _this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getFullYear();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getDate();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getDayOfWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getDay();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getMonthNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf_1 = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                return _this._stripDirectionalityCharacters(_this._format(dtf_1, new Date(2017, i, 1)));
            }));
        }
        return DEFAULT_MONTH_NAMES[style];
    };
    /**
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getDateNames = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf_2 = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return _this._stripDirectionalityCharacters(_this._format(dtf_2, new Date(2017, 0, i + 1))); }));
        }
        return DEFAULT_DATE_NAMES;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getDayOfWeekNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf_3 = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return _this._stripDirectionalityCharacters(_this._format(dtf_3, new Date(2017, 0, i + 1))); }));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getYearName = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    };
    /**
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getNumDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.getTime());
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        /** @type {?} */
        var sanitaryDate = (isNaN(date)) ? date.value : date;
        /** @type {?} */
        var sanitaryMonth = (isNaN(month)) ? month.value : month;
        /** @type {?} */
        var sanitaryYear = (isNaN(year)) ? year.value : year;
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (sanitaryMonth < 0 || sanitaryMonth > 11) {
            throw Error("Invalid month index \"" + sanitaryMonth + "\". Month index has to be between 0 and 11.");
        }
        if (sanitaryDate < 1) {
            throw Error("Invalid date \"" + sanitaryDate + "\". Date has to be greater than 0.");
        }
        /** @type {?} */
        var result = this._createDateWithOverflow(sanitaryYear, sanitaryMonth, sanitaryDate);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() !== sanitaryMonth) {
            throw Error("Invalid date \"" + sanitaryDate + "\" for month with index \"" + sanitaryMonth + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.today = /**
     * @return {?}
     */
    function () {
        return new Date();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.parse = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.format = /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    function (date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = tslib_1.__assign({}, displayFormat, { timeZone: 'utc' });
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        /** @type {?} */
        var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    };
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.deserialize = /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                var date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return _super.prototype.deserialize.call(this, value);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.isDateInstance = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj instanceof Date;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return !isNaN(date.getTime());
    };
    /**
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.invalid = /**
     * @return {?}
     */
    function () {
        return new Date(NaN);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getHours();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getMinutes();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.getSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getSeconds();
    };
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.setHour = /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    function (date, value) {
        date.setHours(value);
    };
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.setMinute = /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    function (date, value) {
        date.setMinutes(value);
    };
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype.setSecond = /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    function (date, value) {
        date.setSeconds(value);
    };
    /** Creates a date but allows the month and date to overflow. */
    /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NgxMatNativeDateAdapter.prototype._createDateWithOverflow = /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        /** @type {?} */
        var result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    /**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    NgxMatNativeDateAdapter.prototype._2digit = /**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    function (n) {
        return ('00' + n).slice(-2);
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param str The string to strip direction characters from.
     * @returns The stripped string.
     */
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    NgxMatNativeDateAdapter.prototype._stripDirectionalityCharacters = /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    function (str) {
        return str.replace(/[\u200e\u200f]/g, '');
    };
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param date Date from which we want to get the string representation according to dtf
     * @returns A Date object with its UTC representation based on the passed in date info
     */
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    NgxMatNativeDateAdapter.prototype._format = /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    function (dtf, date) {
        /** @type {?} */
        var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    };
    NgxMatNativeDateAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxMatNativeDateAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
        { type: Platform }
    ]; };
    return NgxMatNativeDateAdapter;
}(NgxMatDateAdapter));
export { NgxMatNativeDateAdapter };
if (false) {
    /**
     * Whether to clamp the date between 1 and 9999 to avoid IE and Edge errors.
     * @type {?}
     * @private
     */
    NgxMatNativeDateAdapter.prototype._clampDate;
    /**
     * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
     * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
     * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
     * will produce `'8/13/1800'`.
     *
     * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
     * getting the string representation of a Date object from its utc representation. We're keeping
     * it here for sometime, just for precaution, in case we decide to revert some of these changes
     * though.
     * @type {?}
     */
    NgxMatNativeDateAdapter.prototype.useUtcForDisplay;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvZGF0ZXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmF0aXZlLWRhdGUtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQUkvQyxpQkFBMEI7Ozs7OztBQU85QixJQUFJO0lBQ0YsaUJBQWlCLEdBQUcsT0FBTyxJQUFJLElBQUksV0FBVyxDQUFDO0NBQ2hEO0FBQUMsV0FBTTtJQUNOLGlCQUFpQixHQUFHLEtBQUssQ0FBQztDQUMzQjs7Ozs7SUFHSyxtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVc7UUFDckYsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDN0YsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxF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QUFPOzs7Ozs7Ozs7Ozs7SUFBZixVQUFnQixHQUF3QixFQUFFLElBQVU7O1lBQzVDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ3BFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDaEUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQTlSRixVQUFVOzs7OzZDQW1CSSxRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Z0JBakZ4QyxRQUFROztJQTZWakIsOEJBQUM7Q0FBQSxBQS9SRCxDQUM2QyxpQkFBaUIsR0E4UjdEO1NBOVJZLHVCQUF1Qjs7Ozs7OztJQUdsQyw2Q0FBcUM7Ozs7Ozs7Ozs7Ozs7SUFhckMsbURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2RhdGUtYWRhcHRlcic7XG5cbi8vIFRPRE8obW1hbGVyYmEpOiBSZW1vdmUgd2hlbiB3ZSBubyBsb25nZXIgc3VwcG9ydCBzYWZhcmkgOS5cbi8qKiBXaGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBJbnRsIEFQSS4gKi9cbmxldCBTVVBQT1JUU19JTlRMX0FQSTogYm9vbGVhbjtcblxuLy8gV2UgbmVlZCBhIHRyeS9jYXRjaCBhcm91bmQgdGhlIHJlZmVyZW5jZSB0byBgSW50bGAsIGJlY2F1c2UgYWNjZXNzaW5nIGl0IGluIHNvbWUgY2FzZXMgY2FuXG4vLyBjYXVzZSBJRSB0byB0aHJvdy4gVGhlc2UgY2FzZXMgYXJlIHRpZWQgdG8gcGFydGljdWxhciB2ZXJzaW9ucyBvZiBXaW5kb3dzIGFuZCBjYW4gaGFwcGVuIGlmXG4vLyB0aGUgY29uc3VtZXIgaXMgcHJvdmlkaW5nIGEgcG9seWZpbGxlZCBgTWFwYC4gU2VlOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9DaGFrcmFDb3JlL2lzc3Vlcy8zMTg5XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy8xNTY4N1xudHJ5IHtcbiAgU1VQUE9SVFNfSU5UTF9BUEkgPSB0eXBlb2YgSW50bCAhPSAndW5kZWZpbmVkJztcbn0gY2F0Y2gge1xuICBTVVBQT1JUU19JTlRMX0FQSSA9IGZhbHNlO1xufVxuXG4vKiogVGhlIGRlZmF1bHQgbW9udGggbmFtZXMgdG8gdXNlIGlmIEludGwgQVBJIGlzIG5vdCBhdmFpbGFibGUuICovXG5jb25zdCBERUZBVUxUX01PTlRIX05BTUVTID0ge1xuICAnbG9uZyc6IFtcbiAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLFxuICAgICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICBdLFxuICAnc2hvcnQnOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gICduYXJyb3cnOiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ11cbn07XG5cblxuLyoqIFRoZSBkZWZhdWx0IGRhdGUgbmFtZXMgdG8gdXNlIGlmIEludGwgQVBJIGlzIG5vdCBhdmFpbGFibGUuICovXG5jb25zdCBERUZBVUxUX0RBVEVfTkFNRVMgPSByYW5nZSgzMSwgaSA9PiBTdHJpbmcoaSArIDEpKTtcblxuXG4vKiogVGhlIGRlZmF1bHQgZGF5IG9mIHRoZSB3ZWVrIG5hbWVzIHRvIHVzZSBpZiBJbnRsIEFQSSBpcyBub3QgYXZhaWxhYmxlLiAqL1xuY29uc3QgREVGQVVMVF9EQVlfT0ZfV0VFS19OQU1FUyA9IHtcbiAgJ2xvbmcnOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICdzaG9ydCc6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICduYXJyb3cnOiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXVxufTtcblxuXG4vKipcbiAqIE1hdGNoZXMgc3RyaW5ncyB0aGF0IGhhdmUgdGhlIGZvcm0gb2YgYSB2YWxpZCBSRkMgMzMzOSBzdHJpbmdcbiAqIChodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzMzOSkuIE5vdGUgdGhhdCB0aGUgc3RyaW5nIG1heSBub3QgYWN0dWFsbHkgYmUgYSB2YWxpZCBkYXRlXG4gKiBiZWNhdXNlIHRoZSByZWdleCB3aWxsIG1hdGNoIHN0cmluZ3MgYW4gd2l0aCBvdXQgb2YgYm91bmRzIG1vbnRoLCBkYXRlLCBldGMuXG4gKi9cbmNvbnN0IElTT184NjAxX1JFR0VYID1cbiAgL15cXGR7NH0tXFxkezJ9LVxcZHsyfSg/OlRcXGR7Mn06XFxkezJ9OlxcZHsyfSg/OlxcLlxcZCspPyg/Olp8KD86KD86XFwrfC0pXFxkezJ9OlxcZHsyfSkpPyk/JC87XG5cblxuLyoqIENyZWF0ZXMgYW4gYXJyYXkgYW5kIGZpbGxzIGl0IHdpdGggdmFsdWVzLiAqL1xuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xuICB9XG4gIHJldHVybiB2YWx1ZXNBcnJheTtcbn1cblxuLyoqIEFkYXB0cyB0aGUgbmF0aXZlIEpTIERhdGUgZm9yIHVzZSB3aXRoIGNkay1iYXNlZCBjb21wb25lbnRzIHRoYXQgd29yayB3aXRoIGRhdGVzLiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neE1hdE5hdGl2ZURhdGVBZGFwdGVyIGV4dGVuZHMgTmd4TWF0RGF0ZUFkYXB0ZXI8RGF0ZT4ge1xuXG4gIC8qKiBXaGV0aGVyIHRvIGNsYW1wIHRoZSBkYXRlIGJldHdlZW4gMSBhbmQgOTk5OSB0byBhdm9pZCBJRSBhbmQgRWRnZSBlcnJvcnMuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2NsYW1wRGF0ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byB1c2UgYHRpbWVab25lOiAndXRjJ2Agd2l0aCBgSW50bC5EYXRlVGltZUZvcm1hdGAgd2hlbiBmb3JtYXR0aW5nIGRhdGVzLlxuICAgKiBXaXRob3V0IHRoaXMgYEludGwuRGF0ZVRpbWVGb3JtYXRgIHNvbWV0aW1lcyBjaG9vc2VzIHRoZSB3cm9uZyB0aW1lWm9uZSwgd2hpY2ggY2FuIHRocm93IG9mZlxuICAgKiB0aGUgcmVzdWx0LiAoZS5nLiBpbiB0aGUgZW4tVVMgbG9jYWxlIGBuZXcgRGF0ZSgxODAwLCA3LCAxNCkudG9Mb2NhbGVEYXRlU3RyaW5nKClgXG4gICAqIHdpbGwgcHJvZHVjZSBgJzgvMTMvMTgwMCdgLlxuICAgKlxuICAgKiBUT0RPKG1tYWxlcmJhKTogZHJvcCB0aGlzIHZhcmlhYmxlLiBJdCdzIG5vdCBiZWluZyB1c2VkIGluIHRoZSBjb2RlIHJpZ2h0IG5vdy4gV2UncmUgbm93XG4gICAqIGdldHRpbmcgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIERhdGUgb2JqZWN0IGZyb20gaXRzIHV0YyByZXByZXNlbnRhdGlvbi4gV2UncmUga2VlcGluZ1xuICAgKiBpdCBoZXJlIGZvciBzb21ldGltZSwganVzdCBmb3IgcHJlY2F1dGlvbiwgaW4gY2FzZSB3ZSBkZWNpZGUgdG8gcmV2ZXJ0IHNvbWUgb2YgdGhlc2UgY2hhbmdlc1xuICAgKiB0aG91Z2guXG4gICAqL1xuICB1c2VVdGNGb3JEaXNwbGF5OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBzdXBlcigpO1xuICAgIHN1cGVyLnNldExvY2FsZShtYXREYXRlTG9jYWxlKTtcblxuICAgIC8vIElFIGRvZXMgaXRzIG93biB0aW1lIHpvbmUgY29ycmVjdGlvbiwgc28gd2UgZGlzYWJsZSB0aGlzIG9uIElFLlxuICAgIHRoaXMudXNlVXRjRm9yRGlzcGxheSA9ICFwbGF0Zm9ybS5UUklERU5UO1xuICAgIHRoaXMuX2NsYW1wRGF0ZSA9IHBsYXRmb3JtLlRSSURFTlQgfHwgcGxhdGZvcm0uRURHRTtcbiAgfVxuXG4gIGdldFllYXIoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGdldE1vbnRoKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCk7XG4gIH1cblxuICBnZXREYXRlKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldERheU9mV2VlayhkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXkoKTtcbiAgfVxuXG4gIGdldE1vbnRoTmFtZXMoc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93Jyk6IHN0cmluZ1tdIHtcbiAgICBpZiAoU1VQUE9SVFNfSU5UTF9BUEkpIHtcbiAgICAgIGNvbnN0IGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7IG1vbnRoOiBzdHlsZSwgdGltZVpvbmU6ICd1dGMnIH0pO1xuICAgICAgcmV0dXJuIHJhbmdlKDEyLCBpID0+XG4gICAgICAgIHRoaXMuX3N0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKHRoaXMuX2Zvcm1hdChkdGYsIG5ldyBEYXRlKDIwMTcsIGksIDEpKSkpO1xuICAgIH1cbiAgICByZXR1cm4gREVGQVVMVF9NT05USF9OQU1FU1tzdHlsZV07XG4gIH1cblxuICBnZXREYXRlTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGlmIChTVVBQT1JUU19JTlRMX0FQSSkge1xuICAgICAgY29uc3QgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sb2NhbGUsIHsgZGF5OiAnbnVtZXJpYycsIHRpbWVab25lOiAndXRjJyB9KTtcbiAgICAgIHJldHVybiByYW5nZSgzMSwgaSA9PiB0aGlzLl9zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyhcbiAgICAgICAgdGhpcy5fZm9ybWF0KGR0ZiwgbmV3IERhdGUoMjAxNywgMCwgaSArIDEpKSkpO1xuICAgIH1cbiAgICByZXR1cm4gREVGQVVMVF9EQVRFX05BTUVTO1xuICB9XG5cbiAgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93Jyk6IHN0cmluZ1tdIHtcbiAgICBpZiAoU1VQUE9SVFNfSU5UTF9BUEkpIHtcbiAgICAgIGNvbnN0IGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7IHdlZWtkYXk6IHN0eWxlLCB0aW1lWm9uZTogJ3V0YycgfSk7XG4gICAgICByZXR1cm4gcmFuZ2UoNywgaSA9PiB0aGlzLl9zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyhcbiAgICAgICAgdGhpcy5fZm9ybWF0KGR0ZiwgbmV3IERhdGUoMjAxNywgMCwgaSArIDEpKSkpO1xuICAgIH1cbiAgICByZXR1cm4gREVGQVVMVF9EQVlfT0ZfV0VFS19OQU1FU1tzdHlsZV07XG4gIH1cblxuICBnZXRZZWFyTmFtZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoU1VQUE9SVFNfSU5UTF9BUEkpIHtcbiAgICAgIGNvbnN0IGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7IHllYXI6ICdudW1lcmljJywgdGltZVpvbmU6ICd1dGMnIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX3N0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKHRoaXMuX2Zvcm1hdChkdGYsIGRhdGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLmdldFllYXIoZGF0ZSkpO1xuICB9XG5cbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcbiAgICAvLyBXZSBjYW4ndCB0ZWxsIHVzaW5nIG5hdGl2ZSBKUyBEYXRlIHdoYXQgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBpcywgd2UgZGVmYXVsdCB0byBTdW5kYXkuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlKHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXG4gICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSkgKyAxLCAwKSk7XG4gIH1cblxuICBjbG9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIGNyZWF0ZURhdGUoeWVhcjogYW55LCBtb250aDogYW55LCBkYXRlOiBhbnkpOiBEYXRlIHtcblxuICAgIGNvbnN0IHNhbml0YXJ5RGF0ZSA9IChpc05hTihkYXRlKSkgPyBkYXRlLnZhbHVlIDogZGF0ZTtcbiAgICBjb25zdCBzYW5pdGFyeU1vbnRoID0gKGlzTmFOKG1vbnRoKSkgPyBtb250aC52YWx1ZSA6IG1vbnRoO1xuICAgIGNvbnN0IHNhbml0YXJ5WWVhciA9IChpc05hTih5ZWFyKSkgPyB5ZWFyLnZhbHVlIDogeWVhcjtcblxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXG4gICAgLy8gY3JlYXRpbmcgdGhlIERhdGUpLlxuICAgIGlmIChzYW5pdGFyeU1vbnRoIDwgMCB8fCBzYW5pdGFyeU1vbnRoID4gMTEpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1vbnRoIGluZGV4IFwiJHtzYW5pdGFyeU1vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcbiAgICB9XG5cbiAgICBpZiAoIHNhbml0YXJ5RGF0ZSA8IDEpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke3Nhbml0YXJ5RGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhzYW5pdGFyeVllYXIsIHNhbml0YXJ5TW9udGgsIHNhbml0YXJ5RGF0ZSk7XG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgZGF0ZSB3YXNuJ3QgYWJvdmUgdGhlIHVwcGVyIGJvdW5kIGZvciB0aGUgbW9udGgsIGNhdXNpbmcgdGhlIG1vbnRoIHRvIG92ZXJmbG93XG4gICAgaWYgKHJlc3VsdC5nZXRNb250aCgpICE9PSBzYW5pdGFyeU1vbnRoKSB7XG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBkYXRlIFwiJHtzYW5pdGFyeURhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke3Nhbml0YXJ5TW9udGh9XCIuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvZGF5KCk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgcGFyc2UodmFsdWU6IGFueSk6IERhdGUgfCBudWxsIHtcbiAgICAvLyBXZSBoYXZlIG5vIHdheSB1c2luZyB0aGUgbmF0aXZlIEpTIERhdGUgdG8gc2V0IHRoZSBwYXJzZSBmb3JtYXQgb3IgbG9jYWxlLCBzbyB3ZSBpZ25vcmUgdGhlc2VcbiAgICAvLyBwYXJhbWV0ZXJzLlxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA/IG5ldyBEYXRlKERhdGUucGFyc2UodmFsdWUpKSA6IG51bGw7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZGlzcGxheUZvcm1hdDogT2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZChkYXRlKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ05hdGl2ZURhdGVBZGFwdGVyOiBDYW5ub3QgZm9ybWF0IGludmFsaWQgZGF0ZS4nKTtcbiAgICB9XG5cbiAgICBpZiAoU1VQUE9SVFNfSU5UTF9BUEkpIHtcbiAgICAgIC8vIE9uIElFIGFuZCBFZGdlIHRoZSBpMThuIEFQSSB3aWxsIHRocm93IGEgaGFyZCBlcnJvciB0aGF0IGNhbiBjcmFzaCB0aGUgZW50aXJlIGFwcFxuICAgICAgLy8gaWYgd2UgYXR0ZW1wdCB0byBmb3JtYXQgYSBkYXRlIHdob3NlIHllYXIgaXMgbGVzcyB0aGFuIDEgb3IgZ3JlYXRlciB0aGFuIDk5OTkuXG4gICAgICBpZiAodGhpcy5fY2xhbXBEYXRlICYmIChkYXRlLmdldEZ1bGxZZWFyKCkgPCAxIHx8IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDk5OTkpKSB7XG4gICAgICAgIGRhdGUgPSB0aGlzLmNsb25lKGRhdGUpO1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKE1hdGgubWF4KDEsIE1hdGgubWluKDk5OTksIGRhdGUuZ2V0RnVsbFllYXIoKSkpKTtcbiAgICAgIH1cblxuICAgICAgZGlzcGxheUZvcm1hdCA9IHsgLi4uZGlzcGxheUZvcm1hdCwgdGltZVpvbmU6ICd1dGMnIH07XG5cbiAgICAgIGNvbnN0IGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCBkaXNwbGF5Rm9ybWF0KTtcbiAgICAgIHJldHVybiB0aGlzLl9zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyh0aGlzLl9mb3JtYXQoZHRmLCBkYXRlKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyhkYXRlLnRvRGF0ZVN0cmluZygpKTtcbiAgfVxuXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRGF0ZSwgeWVhcnM6IG51bWJlcik6IERhdGUge1xuICAgIHJldHVybiB0aGlzLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIHllYXJzICogMTIpO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJNb250aHMoZGF0ZTogRGF0ZSwgbW9udGhzOiBudW1iZXIpOiBEYXRlIHtcbiAgICBsZXQgbmV3RGF0ZSA9IHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXG4gICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSkgKyBtb250aHMsIHRoaXMuZ2V0RGF0ZShkYXRlKSk7XG5cbiAgICAvLyBJdCdzIHBvc3NpYmxlIHRvIHdpbmQgdXAgaW4gdGhlIHdyb25nIG1vbnRoIGlmIHRoZSBvcmlnaW5hbCBtb250aCBoYXMgbW9yZSBkYXlzIHRoYW4gdGhlIG5ld1xuICAgIC8vIG1vbnRoLiBJbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBnbyB0byB0aGUgbGFzdCBkYXkgb2YgdGhlIGRlc2lyZWQgbW9udGguXG4gICAgLy8gTm90ZTogdGhlIGFkZGl0aW9uYWwgKyAxMiAlIDEyIGVuc3VyZXMgd2UgZW5kIHVwIHdpdGggYSBwb3NpdGl2ZSBudW1iZXIsIHNpbmNlIEpTICUgZG9lc24ndFxuICAgIC8vIGd1YXJhbnRlZSB0aGlzLlxuICAgIGlmICh0aGlzLmdldE1vbnRoKG5ld0RhdGUpICE9ICgodGhpcy5nZXRNb250aChkYXRlKSArIG1vbnRocykgJSAxMiArIDEyKSAlIDEyKSB7XG4gICAgICBuZXdEYXRlID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyh0aGlzLmdldFllYXIobmV3RGF0ZSksIHRoaXMuZ2V0TW9udGgobmV3RGF0ZSksIDApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdEYXRlO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJEYXlzKGRhdGU6IERhdGUsIGRheXM6IG51bWJlcik6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxuICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSkgKyBkYXlzKTtcbiAgfVxuXG4gIHRvSXNvODYwMShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gW1xuICAgICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgdGhpcy5fMmRpZ2l0KGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpLFxuICAgICAgdGhpcy5fMmRpZ2l0KGRhdGUuZ2V0VVRDRGF0ZSgpKVxuICAgIF0uam9pbignLScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGlmIGdpdmVuIGEgdmFsaWQgRGF0ZSBvciBudWxsLiBEZXNlcmlhbGl6ZXMgdmFsaWQgSVNPIDg2MDEgc3RyaW5nc1xuICAgKiAoaHR0cHM6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzMzMzkudHh0KSBpbnRvIHZhbGlkIERhdGVzIGFuZCBlbXB0eSBzdHJpbmcgaW50byBudWxsLiBSZXR1cm5zIGFuXG4gICAqIGludmFsaWQgZGF0ZSBmb3IgYWxsIG90aGVyIHZhbHVlcy5cbiAgICovXG4gIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBEYXRlIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvLyBUaGUgYERhdGVgIGNvbnN0cnVjdG9yIGFjY2VwdHMgZm9ybWF0cyBvdGhlciB0aGFuIElTTyA4NjAxLCBzbyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVcbiAgICAgIC8vIHN0cmluZyBpcyB0aGUgcmlnaHQgZm9ybWF0IGZpcnN0LlxuICAgICAgaWYgKElTT184NjAxX1JFR0VYLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgfVxuXG4gIGlzRGF0ZUluc3RhbmNlKG9iajogYW55KSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERhdGU7XG4gIH1cblxuICBpc1ZhbGlkKGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIGludmFsaWQoKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBnZXRIb3VyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG4gIH1cbiAgZ2V0TWludXRlKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgfVxuICBnZXRTZWNvbmQoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpXG4gIH1cblxuICBzZXRIb3VyKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBkYXRlLnNldEhvdXJzKHZhbHVlKTtcbiAgfVxuICBzZXRNaW51dGUoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGRhdGUuc2V0TWludXRlcyh2YWx1ZSk7XG4gIH1cbiAgc2V0U2Vjb25kKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBkYXRlLnNldFNlY29uZHModmFsdWUpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBkYXRlIGJ1dCBhbGxvd3MgdGhlIG1vbnRoIGFuZCBkYXRlIHRvIG92ZXJmbG93LiAqL1xuICBwcml2YXRlIF9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xuXG4gICAgLy8gV2UgbmVlZCB0byBjb3JyZWN0IGZvciB0aGUgZmFjdCB0aGF0IEpTIG5hdGl2ZSBEYXRlIHRyZWF0cyB5ZWFycyBpbiByYW5nZSBbMCwgOTldIGFzXG4gICAgLy8gYWJicmV2aWF0aW9ucyBmb3IgMTl4eC5cbiAgICBpZiAoeWVhciA+PSAwICYmIHllYXIgPCAxMDApIHtcbiAgICAgIHJlc3VsdC5zZXRGdWxsWWVhcih0aGlzLmdldFllYXIocmVzdWx0KSAtIDE5MDApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhZHMgYSBudW1iZXIgdG8gbWFrZSBpdCB0d28gZGlnaXRzLlxuICAgKiBAcGFyYW0gbiBUaGUgbnVtYmVyIHRvIHBhZC5cbiAgICogQHJldHVybnMgVGhlIHBhZGRlZCBudW1iZXIuXG4gICAqL1xuICBwcml2YXRlIF8yZGlnaXQobjogbnVtYmVyKSB7XG4gICAgcmV0dXJuICgnMDAnICsgbikuc2xpY2UoLTIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0cmlwIG91dCB1bmljb2RlIExUUiBhbmQgUlRMIGNoYXJhY3RlcnMuIEVkZ2UgYW5kIElFIGluc2VydCB0aGVzZSBpbnRvIGZvcm1hdHRlZCBkYXRlcyB3aGlsZVxuICAgKiBvdGhlciBicm93c2VycyBkbyBub3QuIFdlIHJlbW92ZSB0aGVtIHRvIG1ha2Ugb3V0cHV0IGNvbnNpc3RlbnQgYW5kIGJlY2F1c2UgdGhleSBpbnRlcmZlcmUgd2l0aFxuICAgKiBkYXRlIHBhcnNpbmcuXG4gICAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyB0byBzdHJpcCBkaXJlY3Rpb24gY2hhcmFjdGVycyBmcm9tLlxuICAgKiBAcmV0dXJucyBUaGUgc3RyaXBwZWQgc3RyaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBfc3RyaXBEaXJlY3Rpb25hbGl0eUNoYXJhY3RlcnMoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHUyMDBlXFx1MjAwZl0vZywgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gY29udmVydGluZyBEYXRlIG9iamVjdCB0byBzdHJpbmcsIGphdmFzY3JpcHQgYnVpbHQtaW4gZnVuY3Rpb25zIG1heSByZXR1cm4gd3JvbmdcbiAgICogcmVzdWx0cyBiZWNhdXNlIGl0IGFwcGxpZXMgaXRzIGludGVybmFsIERTVCBydWxlcy4gVGhlIERTVCBydWxlcyBhcm91bmQgdGhlIHdvcmxkIGNoYW5nZVxuICAgKiB2ZXJ5IGZyZXF1ZW50bHksIGFuZCB0aGUgY3VycmVudCB2YWxpZCBydWxlIGlzIG5vdCBhbHdheXMgdmFsaWQgaW4gcHJldmlvdXMgeWVhcnMgdGhvdWdoLlxuICAgKiBXZSB3b3JrIGFyb3VuZCB0aGlzIHByb2JsZW0gYnVpbGRpbmcgYSBuZXcgRGF0ZSBvYmplY3Qgd2hpY2ggaGFzIGl0cyBpbnRlcm5hbCBVVENcbiAgICogcmVwcmVzZW50YXRpb24gd2l0aCB0aGUgbG9jYWwgZGF0ZSBhbmQgdGltZS5cbiAgICogQHBhcmFtIGR0ZiBJbnRsLkRhdGVUaW1lRm9ybWF0IG9iamVjdCwgY29udGFpbmcgdGhlIGRlc2lyZWQgc3RyaW5nIGZvcm1hdC4gSXQgbXVzdCBoYXZlXG4gICAqICAgIHRpbWVab25lIHNldCB0byAndXRjJyB0byB3b3JrIGZpbmUuXG4gICAqIEBwYXJhbSBkYXRlIERhdGUgZnJvbSB3aGljaCB3ZSB3YW50IHRvIGdldCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGFjY29yZGluZyB0byBkdGZcbiAgICogQHJldHVybnMgQSBEYXRlIG9iamVjdCB3aXRoIGl0cyBVVEMgcmVwcmVzZW50YXRpb24gYmFzZWQgb24gdGhlIHBhc3NlZCBpbiBkYXRlIGluZm9cbiAgICovXG4gIHByaXZhdGUgX2Zvcm1hdChkdGY6IEludGwuRGF0ZVRpbWVGb3JtYXQsIGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoRGF0ZS5VVEMoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICAgIHJldHVybiBkdGYuZm9ybWF0KGQpO1xuICB9XG59XG4iXX0=