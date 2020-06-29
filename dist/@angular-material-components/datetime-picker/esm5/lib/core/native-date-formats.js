/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/native-date-formats.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
var DEFAULT_DATE_INPUT = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
};
/** @type {?} */
export var NGX_MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: DEFAULT_DATE_INPUT,
    },
    display: {
        dateInput: DEFAULT_DATE_INPUT,
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtZm9ybWF0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvZGF0ZXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmF0aXZlLWRhdGUtZm9ybWF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBVU0sa0JBQWtCLEdBQUc7SUFDekIsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTO0lBQ2pELE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTO0NBQ3JFOztBQUVELE1BQU0sS0FBTywyQkFBMkIsR0FBc0I7SUFDNUQsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLGtCQUFrQjtLQUM5QjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxrQkFBa0I7UUFDN0IsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ25ELGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO1FBQ2pFLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0tBQ3ZEO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hNYXREYXRlRm9ybWF0cyB9IGZyb20gJy4vZGF0ZS1mb3JtYXRzJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmNvbnN0IERFRkFVTFRfREFURV9JTlBVVCA9IHtcbiAgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyxcbiAgaG91cjEyOiBmYWxzZSwgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIsIHNlY29uZDogXCIyLWRpZ2l0XCJcbn1cblxuZXhwb3J0IGNvbnN0IE5HWF9NQVRfTkFUSVZFX0RBVEVfRk9STUFUUzogTmd4TWF0RGF0ZUZvcm1hdHMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiBERUZBVUxUX0RBVEVfSU5QVVQsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6IERFRkFVTFRfREFURV9JTlBVVCxcbiAgICBtb250aFllYXJMYWJlbDogeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnIH0sXG4gICAgZGF0ZUExMXlMYWJlbDogeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0sXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyB9LFxuICB9XG59O1xuIl19