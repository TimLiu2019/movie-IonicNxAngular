import {CommonModule} from '@angular/common';
import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from '@angular/core';
import {DynamicContentOutletComponent} from "./dynamic-content-outlet.component";
import { DynamicContentOutletService } from '../../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-outlet.service';

@NgModule({
  imports: [
  
    CommonModule
  ],
  declarations: [
      DynamicContentOutletComponent
  ],
  exports: [
      DynamicContentOutletComponent
  ],
  providers: [
    {
        provide: NgModuleFactoryLoader,
        useClass: SystemJsNgModuleLoader
    },
    DynamicContentOutletService
  ],
  entryComponents: [
  ]
})
export class DynamicContentOutletModule {
}
