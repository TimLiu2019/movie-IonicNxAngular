import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components';
import { DynamicContentOutletModule } from './dynamic-content-outlet.module';
import { UiKitMtWebSharedComponentsModule } from '../../../../../../../libs/ui-kit/mt-web-shared-components/src/lib/ui-kit-mt-web-shared-components.module';
import { MtWebTier1ABasementModule } from '../../../../../../../libs/utils/mt-web-basement/src/lib/mt-web-tier1-a-basement.module';
import { MovieComponent } from '../movie/movie.component';
import { CustomersComponent } from '../../../components/customers/customers.component';
import { RentalsComponent } from '../../../components/rentals/rentals.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [
  CommonModule,
    IonicModule,
    DynamicContentOutletModule,
    ComponentsModule,
    MtWebTier1ABasementModule,
    UiKitMtWebSharedComponentsModule,
  ],
  entryComponents: [MovieComponent],
})

// DynamicComponentsMapModule
export class DynamicComponentsMapModule {
  static dynamicComponentsMap = {
    MovieComponent,
    CustomersComponent,
    RentalsComponent
  };
}
