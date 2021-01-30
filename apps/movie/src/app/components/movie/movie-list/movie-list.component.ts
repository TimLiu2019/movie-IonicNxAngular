import { Component, OnInit } from '@angular/core';
import { MovieListTestDataService } from '../../../services/testData/movie-list-test-data.service';
import { Movie } from '../../../model/movie';
import { AlertController, PopoverController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { AddMovieDialogComponent } from '../add-movie-dialog/add-movie-dialog.component';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public movieList = new Array<Movie>();
  constructor(
    private movieService: MovieListTestDataService,
    private popoverController: PopoverController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.movieList = this.movieService.getMovies();
  }
  // change like
  onChangeLike(movie: Movie) {
    if (movie.like == true) {
      movie.like = false;
    } else {
      movie.like = true;
    }
  }

  // Add movie using modal popover
  async presentAddMovieModal() {
    console.log('add a movie');
    const modal = await this.popoverController.create({
      component: AddMovieDialogComponent,
      cssClass: 'page-popovers',
      componentProps: {
        title: '',
        genre: '',
        stock: '',
        rate: '',
      },
    });
    await modal.present();
    console.log('in the movie list: add a movie');
    await modal.onDidDismiss().then((data: any) => {
      if (data.data !== undefined && String(data.data.title) !== 'null') {
        const newMovie: Movie = new Movie();
        newMovie.guid = Guid.create().toString();
        newMovie.like = true;
        newMovie.title = String(data.data.title);
        newMovie.genre = String(data.data.genre);
        newMovie.stock = String(data.data.stock);
        newMovie.rate = String(data.data.rate);
        this.movieList.push(newMovie);
      }
    });
  }

  onAddMoviesClick() {
    this.presentAddMovieModal();
  }
}
