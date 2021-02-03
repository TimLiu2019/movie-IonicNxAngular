import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { CustomFormsModule } from 'ngx-custom-validators';

@Component({
  selector: 'ionicnx-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.scss'],
})
export class AddMovieDialogComponent implements OnInit {
  title: string;
  stock: number;
  genre: string;
  rate: string;
  index: any;
  public addMovieForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private popoverController: PopoverController
  ) {
    this.addMovieForm = this.formBuilder.group({
      title: [''],
      genre: [''],
      rate: [''],
      stock: [null ,[Validators.required,Validators.min(0), Validators.max(100), Validators.pattern(/\-?\d*\.?\d{1,2}/)]],
    });
  }

  ngOnInit(): void {}

  // logAddMovieForm
  public logAddMovieForm() {
    console.log('adding movies');
    this.title = this.addMovieForm.get('title').value;
    this.stock = this.addMovieForm.get('stock').value;
    this.rate = this.addMovieForm.get('rate').value;
    this.genre = this.addMovieForm.get('genre').value;
    const dataToPage = {
      title: this.title,
      genre: this.genre,
      stock: this.stock,
      rate: this.rate,
    };
    console.log(dataToPage);
    this.popoverController.dismiss(dataToPage);
  }

  async closeModal() {
    console.log('closing');
    this.title = 'null';
    this.stock = this.addMovieForm.get('stock').value;
    this.rate = this.addMovieForm.get('rate').value;
    this.genre = this.addMovieForm.get('genre').value;
    const dataToPage = {
      title: this.title,
      genre: this.genre,
      stock: this.stock,
      rate: this.rate,
    };
    console.log(dataToPage);
    this.popoverController.dismiss(dataToPage);
  }
}
