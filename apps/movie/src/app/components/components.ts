import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { AddMovieDialogComponent } from './movie/add-movie-dialog/add-movie-dialog.component';
import { ListGroupComponent } from './movie/list-group/list-group.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

@NgModule({
    imports: [
CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [ MovieListComponent, AddMovieDialogComponent, ListGroupComponent, CustomerListComponent],
    exports: [MovieListComponent,AddMovieDialogComponent, ListGroupComponent, CustomerListComponent],
})
export class ComponentsModule {
}