import {CommonModule} from '@angular/common';
import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from '@angular/core';
import {DynamicContentOutletComponent} from "./dynamic-content-outlet.component";
import { DynamicContentOutletService } from '../../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-outlet.service';
import { DynamicContentOutletErrorComponent } from '../../../../../../../libs/utils/mt-web-basement/src/utils/dynamicLazyLoad/dynamic-content-outlet-error.component';
@NgModule({
  imports: [
  

    CommonModule
  ],
  declarations: [
      DynamicContentOutletComponent,
    //  DynamicContentOutletErrorComponent
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
