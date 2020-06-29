/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LIMIT_TIMES = {
    minHour: 0,
    maxHour: 24,
    minMinute: 0,
    maxMinute: 60,
    minSecond: 0,
    maxSecond: 60,
    meridian: 12
};
/** @type {?} */
export const MERIDIANS = {
    AM: 'AM',
    PM: 'PM'
};
/** @type {?} */
export const DEFAULT_STEP = 1;
/** @type {?} */
export const NUMERIC_REGEX = /[^0-9]/g;
/** @type {?} */
export const PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
/** @type {?} */
export const PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
/** @type {?} */
export const PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;
/**
 * @param {?} val
 * @return {?}
 */
export function formatTwoDigitTimeValue(val) {
    /** @type {?} */
    const txt = val.toString();
    return txt.length > 1 ? txt : `0${txt}`;
}
/**
 * @param {?} provider
 * @return {?}
 */
export function createMissingDateImplError(provider) {
    return Error(`NgxMatDatepicker: No provider found for ${provider}. You must import one of the following ` +
        `modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a ` +
        `custom implementation.`);
}
/**
 * Formats a range of years.
 * @param {?} start
 * @param {?} end
 * @return {?}
 */
export function formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvZGF0ZXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2RhdGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxPQUFPLFdBQVcsR0FBRztJQUN2QixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFLENBQUM7SUFDWixTQUFTLEVBQUUsRUFBRTtJQUNiLFNBQVMsRUFBRSxDQUFDO0lBQ1osU0FBUyxFQUFFLEVBQUU7SUFDYixRQUFRLEVBQUUsRUFBRTtDQUNmOztBQUVELE1BQU0sT0FBTyxTQUFTLEdBQUc7SUFDckIsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtDQUNYOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQUcsQ0FBQzs7QUFDN0IsTUFBTSxPQUFPLGFBQWEsR0FBRyxTQUFTOztBQUV0QyxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsNkJBQTZCOztBQUMvRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsc0JBQXNCOztBQUMxRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsc0JBQXNCOzs7OztBQUUxRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsR0FBVzs7VUFDekMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUU7SUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQzVDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFFBQWdCO0lBQ3ZELE9BQU8sS0FBSyxDQUNSLDJDQUEyQyxRQUFRLHlDQUF5QztRQUM1Riw2RkFBNkY7UUFDN0Ysd0JBQXdCLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFhLEVBQUUsR0FBVztJQUN0RCxPQUFPLEdBQUcsS0FBSyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTElNSVRfVElNRVMgPSB7XG4gICAgbWluSG91cjogMCxcbiAgICBtYXhIb3VyOiAyNCxcbiAgICBtaW5NaW51dGU6IDAsXG4gICAgbWF4TWludXRlOiA2MCxcbiAgICBtaW5TZWNvbmQ6IDAsXG4gICAgbWF4U2Vjb25kOiA2MCxcbiAgICBtZXJpZGlhbjogMTJcbn1cblxuZXhwb3J0IGNvbnN0IE1FUklESUFOUyA9IHtcbiAgICBBTTogJ0FNJyxcbiAgICBQTTogJ1BNJ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVEVQID0gMTtcbmV4cG9ydCBjb25zdCBOVU1FUklDX1JFR0VYID0gL1teMC05XS9nO1xuXG5leHBvcnQgY29uc3QgUEFUVEVSTl9JTlBVVF9IT1VSID0gL14oMlswLTNdfFswLTFdWzAtOV18WzAtOV0pJC87XG5leHBvcnQgY29uc3QgUEFUVEVSTl9JTlBVVF9NSU5VVEUgPSAvXihbMC01XVswLTldfFswLTldKSQvO1xuZXhwb3J0IGNvbnN0IFBBVFRFUk5fSU5QVVRfU0VDT05EID0gL14oWzAtNV1bMC05XXxbMC05XSkkLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFR3b0RpZ2l0VGltZVZhbHVlKHZhbDogbnVtYmVyKSB7XG4gICAgY29uc3QgdHh0ID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHR4dC5sZW5ndGggPiAxID8gdHh0IDogYDAke3R4dH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IocHJvdmlkZXI6IHN0cmluZykge1xuICAgIHJldHVybiBFcnJvcihcbiAgICAgICAgYE5neE1hdERhdGVwaWNrZXI6IE5vIHByb3ZpZGVyIGZvdW5kIGZvciAke3Byb3ZpZGVyfS4gWW91IG11c3QgaW1wb3J0IG9uZSBvZiB0aGUgZm9sbG93aW5nIGAgK1xuICAgICAgICBgbW9kdWxlcyBhdCB5b3VyIGFwcGxpY2F0aW9uIHJvb3Q6IE5neE1hdE5hdGl2ZURhdGVNb2R1bGUsIE5neE1hdE1vbWVudE1vZHVsZSwgb3IgcHJvdmlkZSBhIGAgK1xuICAgICAgICBgY3VzdG9tIGltcGxlbWVudGF0aW9uLmApO1xufVxuXG4vKiogRm9ybWF0cyBhIHJhbmdlIG9mIHllYXJzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFllYXJSYW5nZShzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3N0YXJ0fSBcXHUyMDEzICR7ZW5kfWA7XG59XG5cbiJdfQ==