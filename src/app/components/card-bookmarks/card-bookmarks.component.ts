import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { BookmarkService } from 'src/app/pages/bookmarks/service/bookmark.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card-bookmarks',
  templateUrl: './card-bookmarks.component.html',
  styleUrls: ['./card-bookmarks.component.css'],
})
export class CardBookmarksComponent {
  constructor(
    private service: MovieService,
    private bookmark: BookmarkService
  ) {}

  img = this.service.apiImg;
  @Input() bookmarkCard: IMovie = {
    id: 0,
    title: '',
    poster_path: '',
    vote_average: 0,
  };

  deleteBookmark() {
    this.bookmark.deleteBookmark(this.bookmarkCard);
  }
}
