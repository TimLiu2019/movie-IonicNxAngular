import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../../components/components';

@Component({
  selector: 'ionicnx-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public genre : any;
  public genreSelected :any;
  constructor() { }

  ngOnInit(): void {
  }

  receiveSelectedGenreMessage(value: any) {
    this.genreSelected = value;
    console.log('genre message' + value);
  }

}
