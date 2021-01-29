import { Component, OnInit } from '@angular/core';
import { MovieListTestDataService } from '../../../services/testData/movie-list-test-data.service';
import { Movie } from '../../../model/movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movieList = new Array<Movie>();
  constructor(private movieService: MovieListTestDataService) { }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovies();
  }
  onChangeLike(movie:Movie){
    if(movie.like == true){
      movie.like = false;
    } else {
      movie.like = true;
    }


  }

}
