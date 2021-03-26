import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { AddMovieDialogComponent } from './movie/add-movie-dialog/add-movie-dialog.component';
import { ListGroupComponent } from './movie/list-group/list-group.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerInfoComponent } from './customers/customer-info/customer-info.component';
import { CustomerListItemComponent } from './customers/customer-list-item/customer-list-item.component';
import { CustomerInfoBarComponent } from './customers/customer-info-bar/customer-info-bar.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzFormModule,
    NzInputModule,
  ],
  declarations: [
    MovieListComponent,
    AddMovieDialogComponent,
    ListGroupComponent,
    CustomerListComponent,
    CustomerInfoComponent,
    CustomerListItemComponent,
    CustomerInfoBarComponent,
  ],
  exports: [
    MovieListComponent,
    AddMovieDialogComponent,
    ListGroupComponent,
    CustomerListComponent,
    CustomerInfoComponent,
    CustomerListItemComponent,
    CustomerInfoBarComponent,
  ],
})
export class ComponentsModule {}
