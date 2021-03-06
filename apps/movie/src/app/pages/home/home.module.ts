import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

import {HomePage} from './home.page';
import {RouterModule} from "@angular/router";
import {DynamicContentOutletModule} from "./dynamic-content-outlet/dynamic-content-outlet.module";
import { MovieComponent } from './movie/movie.component';
import { ComponentsModule } from '../../components/components';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  imports: [
  IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    NzFormModule,
  
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    DynamicContentOutletModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
