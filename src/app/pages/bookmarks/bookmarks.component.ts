import { Component } from '@angular/core';
import { BookmarkService } from './service/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent {
  constructor(private bookmark: BookmarkService) {}

  getBookmark() {}
}
