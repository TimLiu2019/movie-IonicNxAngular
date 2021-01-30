import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { AddMovieDialogComponent } from './movie/add-movie-dialog/add-movie-dialog.component';

@NgModule({
    imports: [
CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [ MovieListComponent, AddMovieDialogComponent],
    exports: [MovieListComponent,AddMovieDialogComponent],
})
export class ComponentsModule {
}