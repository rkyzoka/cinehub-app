import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    movieName: new FormControl(''),
  });

  searchResult: any;

  constructor(private service: MovieService) {}
  ngOnInit() {}

  searchMovie() {
    this.service
      .searchMovie(this.searchForm.value)
      .subscribe((result) => (this.searchResult = result.results));
  }

  showResults() {
    const results: any = document.querySelector('.results');
    results.style.display = '';
  }

  hideResults() {
    const results: any = document.querySelector('.results');
    results.style.display = 'none';
  }
}
