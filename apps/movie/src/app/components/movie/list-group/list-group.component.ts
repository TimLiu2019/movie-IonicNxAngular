import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  public selectedGenre = 'listGroupAllGenres';
  public selectedType: string;
  public previousSelectedType: string;
  @Output() public genreEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.genreEvent.emit(this.selectedGenre);
    document.getElementById('listGroupAllGenres').classList.add('active');
  }



  onClickAllGenres(){
    this.selectedGenre = 'listGroupAllGenres';
    console.log('selected: All genre')
    this.genreEvent.emit(this.selectedGenre);
    this.selectedType = this.selectedGenre;
    document.getElementById('listGroupAllGenres').classList.remove('active');
   document.getElementById('listGroupAllGenres').classList.add('active');
   if (this.previousSelectedType !== undefined) {
     if (localStorage.getItem('selectedGenre') !== 'listGroupAllGenres') {
       document.getElementById(localStorage.getItem('selectedGenre')).classList.remove('active');
     }
   }
   this.previousSelectedType = this.selectedGenre;
   localStorage.setItem('selectedGenre', 'listGroupAllGenres');
 }

 onClickAction(){
  this.selectedGenre = 'listGroupAction';
  console.log('selected: action')
  this.genreEvent.emit(this.selectedGenre);
  this.selectedType = this.selectedGenre;
  document.getElementById('listGroupAllGenres').classList.remove('active');
 document.getElementById('listGroupAction').classList.add('active');
 if (this.previousSelectedType !== undefined) {
   if (localStorage.getItem('selectedGenre') !== 'listGroupAction') {
     document.getElementById(localStorage.getItem('selectedGenre')).classList.remove('active');
   }
 }
 this.previousSelectedType = this.selectedGenre;
 localStorage.setItem('selectedGenre', 'listGroupAction');
}

onClickComedy(){
  this.selectedGenre = 'listGroupComedy';
  console.log('selected: comedy')
  this.genreEvent.emit(this.selectedGenre);
  this.selectedType = this.selectedGenre;
  document.getElementById('listGroupAllGenres').classList.remove('active');
 document.getElementById('listGroupComedy').classList.add('active');
 if (this.previousSelectedType !== undefined) {
   if (localStorage.getItem('selectedGenre') !== 'listGroupComedy') {
     document.getElementById(localStorage.getItem('selectedGenre')).classList.remove('active');
   }
 }
 this.previousSelectedType = this.selectedGenre;
 localStorage.setItem('selectedGenre', 'listGroupComedy');
}

onClickThriller(){
  this.selectedGenre = 'listGroupThriller';
  console.log('selected: thriller')
  this.genreEvent.emit(this.selectedGenre);
  this.selectedType = this.selectedGenre;
  document.getElementById('listGroupAllGenres').classList.remove('active');
 document.getElementById('listGroupThriller').classList.add('active');
 if (this.previousSelectedType !== undefined) {
   if (localStorage.getItem('selectedGenre') !== 'listGroupThriller') {
     document.getElementById(localStorage.getItem('selectedGenre')).classList.remove('active');
   }
 }
 this.previousSelectedType = this.selectedGenre;
 localStorage.setItem('selectedGenre', 'listGroupThriller');
}

}
