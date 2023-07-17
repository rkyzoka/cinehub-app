import { Injectable } from '@angular/core';
import { Database, ref, set } from 'firebase/database';
import { IMovie } from 'src/app/models/IMovie';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private db: Database) {}

  addBookmark(userId: string, movie: IMovie) {
    set(ref(this.db, 'users/' + userId), {
      bookmarks: [movie],
    });
  }

  getBookmarks() {}

  deleteBookmark() {}
}
