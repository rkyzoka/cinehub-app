import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieList!: IMovie[];

  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service.getMovie().subscribe((res) => (this.movieList = res.results));
  }
}
