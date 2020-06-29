/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/native-date.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { NgxMatDateAdapter } from './date-adapter';
import { NgxMatNativeDateAdapter } from './native-date-adapter';
import { NGX_MAT_NATIVE_DATE_FORMATS } from './native-date-formats';
import { NGX_MAT_DATE_FORMATS } from './date-formats';
export class NgxNativeDateModule {
}
NgxNativeDateModule.decorators = [
    { type: NgModule, args: [{
                imports: [PlatformModule],
                providers: [
                    { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
                ],
            },] }
];
const ɵ0 = NGX_MAT_NATIVE_DATE_FORMATS;
export class NgxMatNativeDateModule {
}
NgxMatNativeDateModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgxNativeDateModule],
                providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: ɵ0 }],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtY29tcG9uZW50cy9kYXRldGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9uYXRpdmUtZGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTdEQsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTi9CLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7aUJBQ3BFO2FBQ0o7O1dBSzBELDJCQUEyQjtBQUV0RixNQUFNLE9BQU8sc0JBQXNCOzs7WUFKbEMsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLElBQTZCLEVBQUUsQ0FBQzthQUN4RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2RhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ3hNYXROYXRpdmVEYXRlQWRhcHRlciB9IGZyb20gJy4vbmF0aXZlLWRhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBOR1hfTUFUX05BVElWRV9EQVRFX0ZPUk1BVFMgfSBmcm9tICcuL25hdGl2ZS1kYXRlLWZvcm1hdHMnO1xuaW1wb3J0IHsgTkdYX01BVF9EQVRFX0ZPUk1BVFMgfSBmcm9tICcuL2RhdGUtZm9ybWF0cyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUGxhdGZvcm1Nb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5neE1hdERhdGVBZGFwdGVyLCB1c2VDbGFzczogTmd4TWF0TmF0aXZlRGF0ZUFkYXB0ZXIgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hOYXRpdmVEYXRlTW9kdWxlIHsgfVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOZ3hOYXRpdmVEYXRlTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HWF9NQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTkdYX01BVF9OQVRJVkVfREFURV9GT1JNQVRTIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXROYXRpdmVEYXRlTW9kdWxlIHsgfVxuIl19