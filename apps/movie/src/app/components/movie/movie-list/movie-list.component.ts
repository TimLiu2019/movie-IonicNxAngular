import { Component, OnInit, Input } from '@angular/core';
import { MovieListTestDataService } from '../../../services/testData/movie-list-test-data.service';
import { Movie } from '../../../model/movie';
import { AlertController, PopoverController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { cloneDeep } from 'lodash';
import { AddMovieDialogComponent } from '../add-movie-dialog/add-movie-dialog.component';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public movieList = new Array<Movie>();
  public movies = new Array<Movie>();
  public temp = new Array<Movie>();
  public searchInput: string;
  public onSearch = false;

  @Input('genreSelected') genreSelected: any;
  constructor(
    private movieService: MovieListTestDataService,
    private popoverController: PopoverController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.movieList = this.movies;
  }
  ngDoCheck(): void {
    this.movieList = !this.onSearch ? this.moviesFilter() : this.movieList;
  }
  //change like
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
        newMovie.stock = Number(data.data.stock);
        newMovie.rate = Number(data.data.rate);
        this.movies.push(newMovie);
        this.movieList = this.movies;
      }
    });
  }

  onAddMoviesClick() {
    this.presentAddMovieModal();
  }

  // popup: delete a movie
  onDeleteMovie(movie: Movie) {
    this.alertCtrl
      .create({
        header: 'Delete a movie',
        message: 'Do you want to delete the movie: ' + movie.title + '?',
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              console.log('Delete the movie');
              const indexInAll = this.movies.indexOf(movie);
              const myClonedArray = cloneDeep(this.movies);
              //      console.log('index in all:' + indexInAll);
              try {
                myClonedArray.splice(indexInAll, 1);
              } catch (e) {
                console.error(e);
              }
              this.movies = myClonedArray;
              this.movieList = this.movies;
            },
          },
        ],
      })
      .then((prompt) => {
        prompt.present();
      });
  }

  moviesFilter() {
    if (this.genreSelected == 'listGroupAllGenres') {
      this.temp = this.movies;

      console.log('genreSelected in list: ', this.genreSelected);
    } else if (this.genreSelected == 'listGroupAction') {
      this.temp = this.movies.filter((item) => item.genre === 'Action');
      console.log('genreSelected in list: ', this.genreSelected);
    } else if (this.genreSelected == 'listGroupComedy') {
      this.temp = this.movies.filter((item) => item.genre === 'Comedy');
      console.log('genreSelected in list: ', this.genreSelected);
    } else if (this.genreSelected == 'listGroupThriller') {
      this.temp = this.movies.filter((item) => item.genre === 'Thriller');
      console.log('genreSelected in list: ', this.genreSelected);
    }
  //  this.movieList = this.temp;
    return this.temp;
  }

  movieSearch(event: any) {
    const queryTitle = event.target.value.toLowerCase();
    if (queryTitle !== '') {
      this.onSearch = true;
      console.log(queryTitle);
      console.log(this.onSearch);
      this.movieList = (queryTitle !== null) ? this.movieList.filter(m =>
        m.title.toLowerCase().includes(queryTitle.toLowerCase() ||  m.genre.toLowerCase().includes(queryTitle.toLowerCase()))
      ) : this.movies;
      
    } else{
      this.movieList = this.movies;
      this.onSearch = false;
      console.log(this.onSearch);
    }
    console.log(this.movieList);
  }

  clearInput() {
    this.searchInput = '';
    this.movieList = this.movies;
  }

  loadMoviesData(event: any) {
    console.log('Loading movies started...');
    setTimeout(() => {
        event.target.complete();
    }, 500);
}
}
