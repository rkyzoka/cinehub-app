import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private service: MovieService) {}
  img = this.service.apiImg;
  @Input() movie: IMovie = {
    id: 0,
    title: '',
    poster_path: '',
    vote_average: 0,
  };

  cardDetails: string =
    'https://www.google.com/search?q=avatar+the+way+of+water';
}
