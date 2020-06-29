/**
 * @fileoverview added by tsickle
 * Generated from: lib/datetime-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatCalendar, NgxMatCalendarHeader } from './calendar';
import { NgxMatDatetimeInput } from './datetime-input';
import { NgxMatDatetimeContent, NgxMatDatetimePicker } from './datetime-picker.component';
import { NgxMatMonthView } from './month-view';
import { NgxMatMultiYearView } from './multi-year-view';
import { NgxMatTimepickerModule } from './timepicker.module';
import { NgxMatYearView } from './year-view';
var NgxMatDatetimePickerModule = /** @class */ (function () {
    function NgxMatDatetimePickerModule() {
    }
    NgxMatDatetimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        PortalModule,
                        FormsModule,
                        MatIconModule,
                        MatButtonModule,
                        MatInputModule,
                        NgxMatTimepickerModule
                    ],
                    exports: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    declarations: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeContent,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    entryComponents: [
                        NgxMatDatetimeContent,
                        NgxMatCalendarHeader
                    ],
                    providers: [
                        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                    ]
                },] }
    ];
    return NgxMatDatetimePickerModule;
}());
export { NgxMatDatetimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvZGF0ZXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RhdGV0aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsK0NBQStDLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QztJQUFBO0lBdUMwQyxDQUFDOztnQkF2QzFDLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUU7d0JBQ04sWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLHNCQUFzQjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNOLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLG9CQUFvQjtxQkFDdEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNYLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3FCQUN0QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2QscUJBQXFCO3dCQUNyQixvQkFBb0I7cUJBQ3RCO29CQUNELFNBQVMsRUFBRTt3QkFDUiwrQ0FBK0M7cUJBQ2pEO2lCQUNIOztJQUN5QyxpQ0FBQztDQUFBLEFBdkMzQyxJQXVDMkM7U0FBOUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUsIE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZX1BST1ZJREVSIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBOZ3hNYXRDYWxlbmRhciwgTmd4TWF0Q2FsZW5kYXJIZWFkZXIgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IE5neE1hdERhdGV0aW1lSW5wdXQgfSBmcm9tICcuL2RhdGV0aW1lLWlucHV0JztcbmltcG9ydCB7IE5neE1hdERhdGV0aW1lQ29udGVudCwgTmd4TWF0RGF0ZXRpbWVQaWNrZXIgfSBmcm9tICcuL2RhdGV0aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWF0TW9udGhWaWV3IH0gZnJvbSAnLi9tb250aC12aWV3JztcbmltcG9ydCB7IE5neE1hdE11bHRpWWVhclZpZXcgfSBmcm9tICcuL211bHRpLXllYXItdmlldyc7XG5pbXBvcnQgeyBOZ3hNYXRUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnLi90aW1lcGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hNYXRZZWFyVmlldyB9IGZyb20gJy4veWVhci12aWV3JztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgICBQb3J0YWxNb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgIE5neE1hdFRpbWVwaWNrZXJNb2R1bGVcbiAgIF0sXG4gICBleHBvcnRzOiBbXG4gICAgICBOZ3hNYXREYXRldGltZVBpY2tlcixcbiAgICAgIE5neE1hdERhdGV0aW1lSW5wdXQsXG4gICAgICBOZ3hNYXRDYWxlbmRhcixcbiAgICAgIE5neE1hdE1vbnRoVmlldyxcbiAgICAgIE5neE1hdFllYXJWaWV3LFxuICAgICAgTmd4TWF0TXVsdGlZZWFyVmlldyxcbiAgICAgIE5neE1hdENhbGVuZGFySGVhZGVyXG4gICBdLFxuICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBOZ3hNYXREYXRldGltZVBpY2tlcixcbiAgICAgIE5neE1hdERhdGV0aW1lQ29udGVudCxcbiAgICAgIE5neE1hdERhdGV0aW1lSW5wdXQsXG4gICAgICBOZ3hNYXRDYWxlbmRhcixcbiAgICAgIE5neE1hdE1vbnRoVmlldyxcbiAgICAgIE5neE1hdFllYXJWaWV3LFxuICAgICAgTmd4TWF0TXVsdGlZZWFyVmlldyxcbiAgICAgIE5neE1hdENhbGVuZGFySGVhZGVyXG4gICBdLFxuICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICBOZ3hNYXREYXRldGltZUNvbnRlbnQsXG4gICAgICBOZ3hNYXRDYWxlbmRhckhlYWRlclxuICAgXSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVJcbiAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0RGF0ZXRpbWVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=