import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  constructor(private service: MovieService) {}

  ngOnInit() {}
  searchMovie(movie: string) {
    this.service.searchMovie(movie).subscribe((result) => console.log(result));
  }
}
