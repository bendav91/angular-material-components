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
var NgxNativeDateModule = /** @class */ (function () {
    function NgxNativeDateModule() {
    }
    NgxNativeDateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [PlatformModule],
                    providers: [
                        { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
                    ],
                },] }
    ];
    return NgxNativeDateModule;
}());
export { NgxNativeDateModule };
var ɵ0 = NGX_MAT_NATIVE_DATE_FORMATS;
var NgxMatNativeDateModule = /** @class */ (function () {
    function NgxMatNativeDateModule() {
    }
    NgxMatNativeDateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgxNativeDateModule],
                    providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: ɵ0 }],
                },] }
    ];
    return NgxMatNativeDateModule;
}());
export { NgxMatNativeDateModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtY29tcG9uZW50cy9kYXRldGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9uYXRpdmUtZGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQ7SUFBQTtJQU1tQyxDQUFDOztnQkFObkMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTtxQkFDcEU7aUJBQ0o7O0lBQ2tDLDBCQUFDO0NBQUEsQUFOcEMsSUFNb0M7U0FBdkIsbUJBQW1CO1NBSTJCLDJCQUEyQjtBQUZ0RjtJQUFBO0lBSXNDLENBQUM7O2dCQUp0QyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsSUFBNkIsRUFBRSxDQUFDO2lCQUN4Rjs7SUFDcUMsNkJBQUM7Q0FBQSxBQUp2QyxJQUl1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neE1hdERhdGVBZGFwdGVyIH0gZnJvbSAnLi9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgTmd4TWF0TmF0aXZlRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL25hdGl2ZS1kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgTkdYX01BVF9OQVRJVkVfREFURV9GT1JNQVRTIH0gZnJvbSAnLi9uYXRpdmUtZGF0ZS1mb3JtYXRzJztcbmltcG9ydCB7IE5HWF9NQVRfREFURV9GT1JNQVRTIH0gZnJvbSAnLi9kYXRlLWZvcm1hdHMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1BsYXRmb3JtTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOZ3hNYXREYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE5neE1hdE5hdGl2ZURhdGVBZGFwdGVyIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4TmF0aXZlRGF0ZU1vZHVsZSB7IH1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmd4TmF0aXZlRGF0ZU1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR1hfTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE5HWF9NQVRfTkFUSVZFX0RBVEVfRk9STUFUUyB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0TmF0aXZlRGF0ZU1vZHVsZSB7IH1cbiJdfQ==