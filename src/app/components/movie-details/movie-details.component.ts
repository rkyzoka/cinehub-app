import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  poster: string = '';
  title: string = '';
  year: string = '';
  rating: string = '';
  minutes: string = '';
  sinopse: string = '';
  cast: string = '';
  budget: string = '';
  boxOffice: string = '';
}
