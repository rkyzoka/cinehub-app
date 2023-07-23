import { Injectable } from '@angular/core';
import { getDatabase, push, ref } from 'firebase/database';
import { IMovie } from 'src/app/models/IMovie';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor() {}

  addBookmark(movie: IMovie) {
    const db = getDatabase();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        alert('You need to be logged in to add a bookmark');
        return;
      }
      if (user) {
        const uid = user.uid;
        push(ref(db, `users/${uid}/bookmarks`), {
          movie,
        });
      }
    });
  }

  getBookmarks(userId: string) {}

  deleteBookmark() {}
}
