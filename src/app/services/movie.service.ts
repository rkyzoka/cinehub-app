import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string;
  private apiKey: string;
  public apiImg: string;
  private apiSearch: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.tmdbApi;
    this.apiKey = environment.tmdbKey;
    this.apiImg = environment.tmdbImg;
    this.apiSearch = environment.tmdbSearch;
  }

  getMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}?${this.apiKey}`);
  }

  searchMovie(movie: any): Observable<any> {
    return this.http.get(
      `${this.apiSearch}?${this.apiKey}&query=${movie.movieName}`
    );
  }
}
