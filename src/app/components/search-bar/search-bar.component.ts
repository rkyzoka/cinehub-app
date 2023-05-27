import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private service: MovieService) {}
  ngOnInit() {}

  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  searchResult: any;

  searchMovie() {
    this.service
      .searchMovie(this.searchForm.value)
      .subscribe((result) => (this.searchResult = result.results));
  }
}
