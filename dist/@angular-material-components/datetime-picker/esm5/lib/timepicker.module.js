/**
 * @fileoverview added by tsickle
 * Generated from: lib/timepicker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerComponent } from './timepicker.component';
var NgxMatTimepickerModule = /** @class */ (function () {
    function NgxMatTimepickerModule() {
    }
    NgxMatTimepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        FormsModule,
                        MatIconModule,
                        MatButtonModule,
                    ],
                    exports: [
                        NgxMatTimepickerComponent
                    ],
                    declarations: [
                        NgxMatTimepickerComponent
                    ]
                },] }
    ];
    return NgxMatTimepickerModule;
}());
export { NgxMatTimepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1jb21wb25lbnRzL2RhdGV0aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRTtJQUFBO0lBZ0JzQyxDQUFDOztnQkFoQnRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7cUJBQzFCO29CQUNELFlBQVksRUFBRTt3QkFDWix5QkFBeUI7cUJBQzFCO2lCQUNGOztJQUNxQyw2QkFBQztDQUFBLEFBaEJ2QyxJQWdCdUM7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE5neE1hdFRpbWVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4TWF0VGltZXBpY2tlckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hNYXRUaW1lcGlja2VyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0VGltZXBpY2tlck1vZHVsZSB7IH1cbiJdfQ==