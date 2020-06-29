/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/date-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DateAdapter } from '@angular/material/core';
/**
 * @abstract
 * @template D
 */
var /**
 * @abstract
 * @template D
 */
NgxMatDateAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(NgxMatDateAdapter, _super);
    function NgxMatDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if two date have same time
     * @param a Date 1
     * @param b Date 2
     */
    /**
     * Check if two date have same time
     * @param {?} a Date 1
     * @param {?} b Date 2
     * @return {?}
     */
    NgxMatDateAdapter.prototype.isSameTime = /**
     * Check if two date have same time
     * @param {?} a Date 1
     * @param {?} b Date 2
     * @return {?}
     */
    function (a, b) {
        if (a == null || b == null)
            return true;
        return this.getHour(a) === this.getHour(b)
            && this.getMinute(a) === this.getMinute(b)
            && this.getSecond(a) === this.getSecond(b);
    };
    /**
     * Copy time from a date to a another date
     * @param toDate
     * @param fromDate
     */
    /**
     * Copy time from a date to a another date
     * @param {?} toDate
     * @param {?} fromDate
     * @return {?}
     */
    NgxMatDateAdapter.prototype.copyTime = /**
     * Copy time from a date to a another date
     * @param {?} toDate
     * @param {?} fromDate
     * @return {?}
     */
    function (toDate, fromDate) {
        this.setHour(toDate, this.getHour(fromDate));
        this.setMinute(toDate, this.getMinute(fromDate));
        this.setSecond(toDate, this.getSecond(fromDate));
    };
    /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @param {?=} showSeconds
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    NgxMatDateAdapter.prototype.compareDateWithTime = /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @param {?=} showSeconds
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    function (first, second, showSeconds) {
        /** @type {?} */
        var res = _super.prototype.compareDate.call(this, first, second) ||
            this.getHour(first) - this.getHour(second) ||
            this.getMinute(first) - this.getMinute(second);
        if (showSeconds) {
            res = res || this.getSecond(first) - this.getSecond(second);
        }
        return res;
    };
    /**
     * Set time by using default values
     * @param defaultTime List default values [hour, minute, second]
     */
    /**
     * Set time by using default values
     * @param {?} date
     * @param {?} defaultTime List default values [hour, minute, second]
     * @return {?}
     */
    NgxMatDateAdapter.prototype.setTimeByDefaultValues = /**
     * Set time by using default values
     * @param {?} date
     * @param {?} defaultTime List default values [hour, minute, second]
     * @return {?}
     */
    function (date, defaultTime) {
        if (!Array.isArray(defaultTime)) {
            throw Error('@Input DefaultTime should be an array');
        }
        this.setHour(date, defaultTime[0] || 0);
        this.setMinute(date, defaultTime[1] || 0);
        this.setSecond(date, defaultTime[2] || 0);
    };
    return NgxMatDateAdapter;
}(DateAdapter));
/**
 * @abstract
 * @template D
 */
export { NgxMatDateAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtY29tcG9uZW50cy9kYXRldGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9kYXRlLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUVyRDs7Ozs7SUFBbUQsNkNBQWM7SUFBakU7O0lBZ0dBLENBQUM7SUFyREM7Ozs7T0FJRzs7Ozs7OztJQUNILHNDQUFVOzs7Ozs7SUFBVixVQUFXLENBQUksRUFBRSxDQUFJO1FBQ25CLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztlQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2VBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILG9DQUFROzs7Ozs7SUFBUixVQUFTLE1BQVMsRUFBRSxRQUFXO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7Ozs7O0tBTUM7Ozs7Ozs7OztJQUNELCtDQUFtQjs7Ozs7Ozs7SUFBbkIsVUFBb0IsS0FBUSxFQUFFLE1BQVMsRUFBRSxXQUFxQjs7WUFDeEQsR0FBRyxHQUFHLGlCQUFNLFdBQVcsWUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLFdBQVcsRUFBRTtZQUNmLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsa0RBQXNCOzs7Ozs7SUFBdEIsVUFBdUIsSUFBTyxFQUFFLFdBQXFCO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBaEdELENBQW1ELFdBQVcsR0FnRzdEOzs7Ozs7Ozs7Ozs7O0lBMUZDLDBEQUFrQzs7Ozs7OztJQU9sQyw0REFBb0M7Ozs7Ozs7SUFPcEMsNERBQW9DOzs7Ozs7OztJQU9wQyxpRUFBK0M7Ozs7Ozs7O0lBTy9DLG1FQUFpRDs7Ozs7Ozs7SUFPakQsbUVBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neE1hdERhdGVBZGFwdGVyPEQ+IGV4dGVuZHMgRGF0ZUFkYXB0ZXI8RD4ge1xuICAvKipcbiAqIEdldHMgdGhlIGhvdXIgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cbiAqIEByZXR1cm5zIFRoZSBob3VyIGNvbXBvbmVudC5cbiAqL1xuICBhYnN0cmFjdCBnZXRIb3VyKGRhdGU6IEQpOiBudW1iZXI7XG5cbiAgLyoqXG4qIEdldHMgdGhlIG1pbnV0ZSBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXG4qIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIG1vbnRoIGZyb20uXG4qIEByZXR1cm5zIFRoZSBtaW51dGUgY29tcG9uZW50LlxuKi9cbiAgYWJzdHJhY3QgZ2V0TWludXRlKGRhdGU6IEQpOiBudW1iZXI7XG5cbiAgLyoqXG4gICogR2V0cyB0aGUgc2Vjb25kIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBleHRyYWN0IHRoZSBtb250aCBmcm9tLlxuICAqIEByZXR1cm5zIFRoZSBzZWNvbmQgY29tcG9uZW50LlxuICAqL1xuICBhYnN0cmFjdCBnZXRTZWNvbmQoZGF0ZTogRCk6IG51bWJlcjtcblxuICAvKipcbiAgKiBTZXQgdGhlIGhvdXIgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxuICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIG1vbnRoIGZyb20uXG4gICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gICovXG4gIGFic3RyYWN0IHNldEhvdXIoZGF0ZTogRCwgdmFsdWU6IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICogU2V0IHRoZSBzZWNvbmQgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxuICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIG1vbnRoIGZyb20uXG4gICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gICovXG4gIGFic3RyYWN0IHNldE1pbnV0ZShkYXRlOiBELCB2YWx1ZTogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBzZWNvbmQgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxuICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBleHRyYWN0IHRoZSBtb250aCBmcm9tLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICovXG4gIGFic3RyYWN0IHNldFNlY29uZChkYXRlOiBELCB2YWx1ZTogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIGRhdGUgaGF2ZSBzYW1lIHRpbWVcbiAgICogQHBhcmFtIGEgRGF0ZSAxXG4gICAqIEBwYXJhbSBiIERhdGUgMlxuICAgKi9cbiAgaXNTYW1lVGltZShhOiBELCBiOiBEKTogYm9vbGVhbiB7XG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmdldEhvdXIoYSkgPT09IHRoaXMuZ2V0SG91cihiKVxuICAgICAgJiYgdGhpcy5nZXRNaW51dGUoYSkgPT09IHRoaXMuZ2V0TWludXRlKGIpXG4gICAgICAmJiB0aGlzLmdldFNlY29uZChhKSA9PT0gdGhpcy5nZXRTZWNvbmQoYik7XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aW1lIGZyb20gYSBkYXRlIHRvIGEgYW5vdGhlciBkYXRlXG4gICAqIEBwYXJhbSB0b0RhdGUgXG4gICAqIEBwYXJhbSBmcm9tRGF0ZSBcbiAgICovXG4gIGNvcHlUaW1lKHRvRGF0ZTogRCwgZnJvbURhdGU6IEQpIHtcbiAgICB0aGlzLnNldEhvdXIodG9EYXRlLCB0aGlzLmdldEhvdXIoZnJvbURhdGUpKTtcbiAgICB0aGlzLnNldE1pbnV0ZSh0b0RhdGUsIHRoaXMuZ2V0TWludXRlKGZyb21EYXRlKSk7XG4gICAgdGhpcy5zZXRTZWNvbmQodG9EYXRlLCB0aGlzLmdldFNlY29uZChmcm9tRGF0ZSkpO1xuICB9XG5cbiAgLyoqXG4gKiBDb21wYXJlcyB0d28gZGF0ZXMuXG4gKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSBzZWNvbmQgVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyAwIGlmIHRoZSBkYXRlcyBhcmUgZXF1YWwsIGEgbnVtYmVyIGxlc3MgdGhhbiAwIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGVhcmxpZXIsXG4gKiAgICAgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDAgaWYgdGhlIGZpcnN0IGRhdGUgaXMgbGF0ZXIuXG4gKi9cbiAgY29tcGFyZURhdGVXaXRoVGltZShmaXJzdDogRCwgc2Vjb25kOiBELCBzaG93U2Vjb25kcz86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCByZXMgPSBzdXBlci5jb21wYXJlRGF0ZShmaXJzdCwgc2Vjb25kKSB8fFxuICAgICAgdGhpcy5nZXRIb3VyKGZpcnN0KSAtIHRoaXMuZ2V0SG91cihzZWNvbmQpIHx8XG4gICAgICB0aGlzLmdldE1pbnV0ZShmaXJzdCkgLSB0aGlzLmdldE1pbnV0ZShzZWNvbmQpO1xuICAgIGlmIChzaG93U2Vjb25kcykge1xuICAgICAgcmVzID0gcmVzIHx8IHRoaXMuZ2V0U2Vjb25kKGZpcnN0KSAtIHRoaXMuZ2V0U2Vjb25kKHNlY29uZCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRpbWUgYnkgdXNpbmcgZGVmYXVsdCB2YWx1ZXNcbiAgICogQHBhcmFtIGRlZmF1bHRUaW1lIExpc3QgZGVmYXVsdCB2YWx1ZXMgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXVxuICAgKi9cbiAgc2V0VGltZUJ5RGVmYXVsdFZhbHVlcyhkYXRlOiBELCBkZWZhdWx0VGltZTogbnVtYmVyW10pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGVmYXVsdFRpbWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignQElucHV0IERlZmF1bHRUaW1lIHNob3VsZCBiZSBhbiBhcnJheScpO1xuICAgIH1cbiAgICB0aGlzLnNldEhvdXIoZGF0ZSwgZGVmYXVsdFRpbWVbMF0gfHwgMCk7XG4gICAgdGhpcy5zZXRNaW51dGUoZGF0ZSwgZGVmYXVsdFRpbWVbMV0gfHwgMCk7XG4gICAgdGhpcy5zZXRTZWNvbmQoZGF0ZSwgZGVmYXVsdFRpbWVbMl0gfHwgMCk7XG4gIH1cblxufVxuIl19