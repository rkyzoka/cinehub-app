import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import { IMovie } from 'src/app/models/IMovie';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private router: Router) {}

  async addBookmark(movie: IMovie) {
    const db = getFirestore();
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return;
      }
      const colRef = collection(db, user.uid);
      const snapshot = await getDocs(colRef);
      const bookmarks = snapshot.docs.map((doc) => doc.data());
      if (bookmarks.some((bookmark) => bookmark['id'] === movie.id)) {
        return;
      }
      await addDoc(colRef, {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
      });
    });
  }

  getBookmarks(): any {
    const db = getFirestore();
    const auth = getAuth();
    let bookmarks: any = [];
    onAuthStateChanged(auth, (user) => {
      if (!user) return;

      const colRef = collection(db, user.uid);
      onSnapshot(colRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          bookmarks.push({ ...doc.data() });
        });
      });
    });
    return bookmarks;
  }

  async deleteBookmark(movie: IMovie) {
    const db = getFirestore();
    const auth = getAuth();
    let docMovie: any;
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return;
      }
      const colRef = collection(db, user.uid);
      onSnapshot(colRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data()['id'] === movie.id) {
            docMovie = doc.id;
          }
        });
        const docRef = doc(db, user.uid, docMovie);
        deleteDoc(docRef).then(() => {
          this.reloadComponent();
        });
      });
    });
  }

  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentRoute], { queryParamsHandling: 'merge' });
  }
}
