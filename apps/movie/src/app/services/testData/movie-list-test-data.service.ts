import { Injectable } from '@angular/core';
import { ObjectUtils } from '../../../util/object.utils';
import { Movie } from '../../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieListTestDataService {
  constructor() {}
  movieListData = [
    {
      guid: '579cec46-7682-4025-a2f4-9e158c756fdf',
      title: 'Air Plane',
      genre: 'Comedy',
      stock: 10,
      rate: '3.5',
      like: true,
    },
    {
      guid: '579cec46-7682-4025-a2f4-9e158c756fdt',
      title: 'Die Hard',
      genre: 'Action',
      stock: 8,
      rate: '4',
      like: false,
    },
    {
      guid: '579cec46-7682-4025-a2f4-9e158c756fdm',
      title: 'Top Gun',
      genre: 'Action',
      stock: 7,
      rate: '4.5',
      like: true,
    },
  ];
  getMovies() {
   
    const movies: Movie[] = [];
    
    for (const m of this.movieListData) {
      const movie = new Movie();
      movie.guid = m.guid;
      movie.title = m.title;
      movie.genre = m.genre;
      movie.stock = m.stock;
      movie.rate = m.rate;
      movie.like = m.like;
      console.log('movie ', movie);
      movies.push(movie);
    }
    console.log(movies)
    for (const mm of movies){
      console.log('movie in stack: ', mm);
    }
    return movies;
  }
}
