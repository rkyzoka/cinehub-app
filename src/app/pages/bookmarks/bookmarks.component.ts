import { Component, OnInit } from '@angular/core';
import { BookmarkService } from './service/bookmark.service';
import { IMovie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  bookmarksList!: IMovie[];
  constructor(private bookmark: BookmarkService) {}

  ngOnInit() {
    this.bookmarksList = this.bookmark.getBookmarks();
  }
}
