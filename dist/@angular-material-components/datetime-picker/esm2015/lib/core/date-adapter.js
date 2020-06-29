/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/date-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DateAdapter } from '@angular/material/core';
/**
 * @abstract
 * @template D
 */
export class NgxMatDateAdapter extends DateAdapter {
    /**
     * Check if two date have same time
     * @param {?} a Date 1
     * @param {?} b Date 2
     * @return {?}
     */
    isSameTime(a, b) {
        if (a == null || b == null)
            return true;
        return this.getHour(a) === this.getHour(b)
            && this.getMinute(a) === this.getMinute(b)
            && this.getSecond(a) === this.getSecond(b);
    }
    /**
     * Copy time from a date to a another date
     * @param {?} toDate
     * @param {?} fromDate
     * @return {?}
     */
    copyTime(toDate, fromDate) {
        this.setHour(toDate, this.getHour(fromDate));
        this.setMinute(toDate, this.getMinute(fromDate));
        this.setSecond(toDate, this.getSecond(fromDate));
    }
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @param {?=} showSeconds
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDateWithTime(first, second, showSeconds) {
        /** @type {?} */
        let res = super.compareDate(first, second) ||
            this.getHour(first) - this.getHour(second) ||
            this.getMinute(first) - this.getMinute(second);
        if (showSeconds) {
            res = res || this.getSecond(first) - this.getSecond(second);
        }
        return res;
    }
    /**
     * Set time by using default values
     * @param {?} date
     * @param {?} defaultTime List default values [hour, minute, second]
     * @return {?}
     */
    setTimeByDefaultValues(date, defaultTime) {
        if (!Array.isArray(defaultTime)) {
            throw Error('@Input DefaultTime should be an array');
        }
        this.setHour(date, defaultTime[0] || 0);
        this.setMinute(date, defaultTime[1] || 0);
        this.setSecond(date, defaultTime[2] || 0);
    }
}
if (false) {
    /**
     * Gets the hour component of the given date.
     * @abstract
     * @param {?} date The date to extract the month from.
     * @return {?} The hour component.
     */
    NgxMatDateAdapter.prototype.getHour = function (date) { };
    /**
     * Gets the minute component of the given date.
     * @abstract
     * @param {?} date The date to extract the month from.
     * @return {?} The minute component.
     */
    NgxMatDateAdapter.prototype.getMinute = function (date) { };
    /**
     * Gets the second component of the given date.
     * @abstract
     * @param {?} date The date to extract the month from.
     * @return {?} The second component.
     */
    NgxMatDateAdapter.prototype.getSecond = function (date) { };
    /**
     * Set the hour component of the given date.
     * @abstract
     * @param {?} date The date to extract the month from.
     * @param {?} value The value to set.
     * @return {?}
     */
    NgxMatDateAdapter.prototype.setHour = function (date, value) { };
    /**
     * Set the second component of the given date.
     * @abstract
     * @param {?} date The date to extract the month from.
     * @param {?} value The value to set.
     * @return {?}
     */
    NgxMatDateAdapter.prototype.setMinute = function (date, value) { };
    /**
     * Set the second component of the given date.
     * @abstract
     * @param {?} date The date to extract the month from.
     * @param {?} value The value to set.
     * @return {?}
     */
    NgxMatDateAdapter.prototype.setSecond = function (date, value) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtY29tcG9uZW50cy9kYXRldGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9kYXRlLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRXJELE1BQU0sT0FBZ0IsaUJBQXFCLFNBQVEsV0FBYzs7Ozs7OztJQWdEL0QsVUFBVSxDQUFDLENBQUksRUFBRSxDQUFJO1FBQ25CLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztlQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2VBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7O0lBT0QsUUFBUSxDQUFDLE1BQVMsRUFBRSxRQUFXO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7OztJQVNELG1CQUFtQixDQUFDLEtBQVEsRUFBRSxNQUFTLEVBQUUsV0FBcUI7O1lBQ3hELEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2hELElBQUksV0FBVyxFQUFFO1lBQ2YsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFNRCxzQkFBc0IsQ0FBQyxJQUFPLEVBQUUsV0FBcUI7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFRjs7Ozs7Ozs7SUExRkMsMERBQWtDOzs7Ozs7O0lBT2xDLDREQUFvQzs7Ozs7OztJQU9wQyw0REFBb0M7Ozs7Ozs7O0lBT3BDLGlFQUErQzs7Ozs7Ozs7SUFPL0MsbUVBQWlEOzs7Ozs7OztJQU9qRCxtRUFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4TWF0RGF0ZUFkYXB0ZXI8RD4gZXh0ZW5kcyBEYXRlQWRhcHRlcjxEPiB7XG4gIC8qKlxuICogR2V0cyB0aGUgaG91ciBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBleHRyYWN0IHRoZSBtb250aCBmcm9tLlxuICogQHJldHVybnMgVGhlIGhvdXIgY29tcG9uZW50LlxuICovXG4gIGFic3RyYWN0IGdldEhvdXIoZGF0ZTogRCk6IG51bWJlcjtcblxuICAvKipcbiogR2V0cyB0aGUgbWludXRlIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cbiogQHJldHVybnMgVGhlIG1pbnV0ZSBjb21wb25lbnQuXG4qL1xuICBhYnN0cmFjdCBnZXRNaW51dGUoZGF0ZTogRCk6IG51bWJlcjtcblxuICAvKipcbiAgKiBHZXRzIHRoZSBzZWNvbmQgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxuICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIG1vbnRoIGZyb20uXG4gICogQHJldHVybnMgVGhlIHNlY29uZCBjb21wb25lbnQuXG4gICovXG4gIGFic3RyYWN0IGdldFNlY29uZChkYXRlOiBEKTogbnVtYmVyO1xuXG4gIC8qKlxuICAqIFNldCB0aGUgaG91ciBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXG4gICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cbiAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgKi9cbiAgYWJzdHJhY3Qgc2V0SG91cihkYXRlOiBELCB2YWx1ZTogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgKiBTZXQgdGhlIHNlY29uZCBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXG4gICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cbiAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgKi9cbiAgYWJzdHJhY3Qgc2V0TWludXRlKGRhdGU6IEQsIHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNlY29uZCBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXG4gICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIG1vbnRoIGZyb20uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0U2Vjb25kKGRhdGU6IEQsIHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gZGF0ZSBoYXZlIHNhbWUgdGltZVxuICAgKiBAcGFyYW0gYSBEYXRlIDFcbiAgICogQHBhcmFtIGIgRGF0ZSAyXG4gICAqL1xuICBpc1NhbWVUaW1lKGE6IEQsIGI6IEQpOiBib29sZWFuIHtcbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SG91cihhKSA9PT0gdGhpcy5nZXRIb3VyKGIpXG4gICAgICAmJiB0aGlzLmdldE1pbnV0ZShhKSA9PT0gdGhpcy5nZXRNaW51dGUoYilcbiAgICAgICYmIHRoaXMuZ2V0U2Vjb25kKGEpID09PSB0aGlzLmdldFNlY29uZChiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRpbWUgZnJvbSBhIGRhdGUgdG8gYSBhbm90aGVyIGRhdGVcbiAgICogQHBhcmFtIHRvRGF0ZSBcbiAgICogQHBhcmFtIGZyb21EYXRlIFxuICAgKi9cbiAgY29weVRpbWUodG9EYXRlOiBELCBmcm9tRGF0ZTogRCkge1xuICAgIHRoaXMuc2V0SG91cih0b0RhdGUsIHRoaXMuZ2V0SG91cihmcm9tRGF0ZSkpO1xuICAgIHRoaXMuc2V0TWludXRlKHRvRGF0ZSwgdGhpcy5nZXRNaW51dGUoZnJvbURhdGUpKTtcbiAgICB0aGlzLnNldFNlY29uZCh0b0RhdGUsIHRoaXMuZ2V0U2Vjb25kKGZyb21EYXRlKSk7XG4gIH1cblxuICAvKipcbiAqIENvbXBhcmVzIHR3byBkYXRlcy5cbiAqIEBwYXJhbSBmaXJzdCBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHNlY29uZCBUaGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIDAgaWYgdGhlIGRhdGVzIGFyZSBlcXVhbCwgYSBudW1iZXIgbGVzcyB0aGFuIDAgaWYgdGhlIGZpcnN0IGRhdGUgaXMgZWFybGllcixcbiAqICAgICBhIG51bWJlciBncmVhdGVyIHRoYW4gMCBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBsYXRlci5cbiAqL1xuICBjb21wYXJlRGF0ZVdpdGhUaW1lKGZpcnN0OiBELCBzZWNvbmQ6IEQsIHNob3dTZWNvbmRzPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IHJlcyA9IHN1cGVyLmNvbXBhcmVEYXRlKGZpcnN0LCBzZWNvbmQpIHx8XG4gICAgICB0aGlzLmdldEhvdXIoZmlyc3QpIC0gdGhpcy5nZXRIb3VyKHNlY29uZCkgfHxcbiAgICAgIHRoaXMuZ2V0TWludXRlKGZpcnN0KSAtIHRoaXMuZ2V0TWludXRlKHNlY29uZCk7XG4gICAgaWYgKHNob3dTZWNvbmRzKSB7XG4gICAgICByZXMgPSByZXMgfHwgdGhpcy5nZXRTZWNvbmQoZmlyc3QpIC0gdGhpcy5nZXRTZWNvbmQoc2Vjb25kKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGltZSBieSB1c2luZyBkZWZhdWx0IHZhbHVlc1xuICAgKiBAcGFyYW0gZGVmYXVsdFRpbWUgTGlzdCBkZWZhdWx0IHZhbHVlcyBbaG91ciwgbWludXRlLCBzZWNvbmRdXG4gICAqL1xuICBzZXRUaW1lQnlEZWZhdWx0VmFsdWVzKGRhdGU6IEQsIGRlZmF1bHRUaW1lOiBudW1iZXJbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkZWZhdWx0VGltZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdASW5wdXQgRGVmYXVsdFRpbWUgc2hvdWxkIGJlIGFuIGFycmF5Jyk7XG4gICAgfVxuICAgIHRoaXMuc2V0SG91cihkYXRlLCBkZWZhdWx0VGltZVswXSB8fCAwKTtcbiAgICB0aGlzLnNldE1pbnV0ZShkYXRlLCBkZWZhdWx0VGltZVsxXSB8fCAwKTtcbiAgICB0aGlzLnNldFNlY29uZChkYXRlLCBkZWZhdWx0VGltZVsyXSB8fCAwKTtcbiAgfVxuXG59XG4iXX0=