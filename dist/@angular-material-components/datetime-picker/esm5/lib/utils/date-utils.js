/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LIMIT_TIMES = {
    minHour: 0,
    maxHour: 24,
    minMinute: 0,
    maxMinute: 60,
    minSecond: 0,
    maxSecond: 60,
    meridian: 12
};
/** @type {?} */
export var MERIDIANS = {
    AM: 'AM',
    PM: 'PM'
};
/** @type {?} */
export var DEFAULT_STEP = 1;
/** @type {?} */
export var NUMERIC_REGEX = /[^0-9]/g;
/** @type {?} */
export var PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
/** @type {?} */
export var PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
/** @type {?} */
export var PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;
/**
 * @param {?} val
 * @return {?}
 */
export function formatTwoDigitTimeValue(val) {
    /** @type {?} */
    var txt = val.toString();
    return txt.length > 1 ? txt : "0" + txt;
}
/**
 * @param {?} provider
 * @return {?}
 */
export function createMissingDateImplError(provider) {
    return Error("NgxMatDatepicker: No provider found for " + provider + ". You must import one of the following " +
        "modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a " +
        "custom implementation.");
}
/**
 * Formats a range of years.
 * @param {?} start
 * @param {?} end
 * @return {?}
 */
export function formatYearRange(start, end) {
    return start + " \u2013 " + end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvZGF0ZXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2RhdGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxLQUFPLFdBQVcsR0FBRztJQUN2QixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFLENBQUM7SUFDWixTQUFTLEVBQUUsRUFBRTtJQUNiLFNBQVMsRUFBRSxDQUFDO0lBQ1osU0FBUyxFQUFFLEVBQUU7SUFDYixRQUFRLEVBQUUsRUFBRTtDQUNmOztBQUVELE1BQU0sS0FBTyxTQUFTLEdBQUc7SUFDckIsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtDQUNYOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQUcsQ0FBQzs7QUFDN0IsTUFBTSxLQUFPLGFBQWEsR0FBRyxTQUFTOztBQUV0QyxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsNkJBQTZCOztBQUMvRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsc0JBQXNCOztBQUMxRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsc0JBQXNCOzs7OztBQUUxRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsR0FBVzs7UUFDekMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUU7SUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFJLEdBQUssQ0FBQztBQUM1QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUFnQjtJQUN2RCxPQUFPLEtBQUssQ0FDUiw2Q0FBMkMsUUFBUSw0Q0FBeUM7UUFDNUYsNkZBQTZGO1FBQzdGLHdCQUF3QixDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7OztBQUdELE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBYSxFQUFFLEdBQVc7SUFDdEQsT0FBVSxLQUFLLGdCQUFXLEdBQUssQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExJTUlUX1RJTUVTID0ge1xuICAgIG1pbkhvdXI6IDAsXG4gICAgbWF4SG91cjogMjQsXG4gICAgbWluTWludXRlOiAwLFxuICAgIG1heE1pbnV0ZTogNjAsXG4gICAgbWluU2Vjb25kOiAwLFxuICAgIG1heFNlY29uZDogNjAsXG4gICAgbWVyaWRpYW46IDEyXG59XG5cbmV4cG9ydCBjb25zdCBNRVJJRElBTlMgPSB7XG4gICAgQU06ICdBTScsXG4gICAgUE06ICdQTSdcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RFUCA9IDE7XG5leHBvcnQgY29uc3QgTlVNRVJJQ19SRUdFWCA9IC9bXjAtOV0vZztcblxuZXhwb3J0IGNvbnN0IFBBVFRFUk5fSU5QVVRfSE9VUiA9IC9eKDJbMC0zXXxbMC0xXVswLTldfFswLTldKSQvO1xuZXhwb3J0IGNvbnN0IFBBVFRFUk5fSU5QVVRfTUlOVVRFID0gL14oWzAtNV1bMC05XXxbMC05XSkkLztcbmV4cG9ydCBjb25zdCBQQVRURVJOX0lOUFVUX1NFQ09ORCA9IC9eKFswLTVdWzAtOV18WzAtOV0pJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUd29EaWdpdFRpbWVWYWx1ZSh2YWw6IG51bWJlcikge1xuICAgIGNvbnN0IHR4dCA9IHZhbC50b1N0cmluZygpO1xuICAgIHJldHVybiB0eHQubGVuZ3RoID4gMSA/IHR4dCA6IGAwJHt0eHR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKHByb3ZpZGVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gRXJyb3IoXG4gICAgICAgIGBOZ3hNYXREYXRlcGlja2VyOiBObyBwcm92aWRlciBmb3VuZCBmb3IgJHtwcm92aWRlcn0uIFlvdSBtdXN0IGltcG9ydCBvbmUgb2YgdGhlIGZvbGxvd2luZyBgICtcbiAgICAgICAgYG1vZHVsZXMgYXQgeW91ciBhcHBsaWNhdGlvbiByb290OiBOZ3hNYXROYXRpdmVEYXRlTW9kdWxlLCBOZ3hNYXRNb21lbnRNb2R1bGUsIG9yIHByb3ZpZGUgYSBgICtcbiAgICAgICAgYGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5gKTtcbn1cblxuLyoqIEZvcm1hdHMgYSByYW5nZSBvZiB5ZWFycy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyUmFuZ2Uoc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtzdGFydH0gXFx1MjAxMyAke2VuZH1gO1xufVxuXG4iXX0=