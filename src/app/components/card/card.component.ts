import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { BookmarkService } from 'src/app/pages/bookmarks/service/bookmark.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(
    private service: MovieService,
    private bookmark: BookmarkService
  ) {}

  img = this.service.apiImg;
  @Input() movie: IMovie = {
    id: 0,
    title: '',
    poster_path: '',
    vote_average: 0,
  };

  addBookmark() {
    this.bookmark.addBookmark({
      id: this.movie.id,
      title: this.movie.title,
      poster_path: this.movie.poster_path,
      vote_average: this.movie.vote_average,
    });
  }
}
