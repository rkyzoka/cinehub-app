import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetail } from 'src/app/models/IMovieDetail';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovieDetail = {
    img: '',
    title: '',
    year: '',
    rating: 0,
    minutes: 0,
    sinopse: '',
    cast: '',
    budget: 0,
    revenue: 0,
  };

  constructor(private service: MovieService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    let getId = this.router.snapshot.paramMap.get('movieId');
    this.getMovieDetails(getId);
  }

  getMovieDetails(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.movie = {
        img: `${this.service.apiImg}${result.poster_path}`,
        title: result.title,
        year: result.release_date.substring(0, 4),
        rating: result.vote_average,
        minutes: result.runtime,
        sinopse: result.overview,
        cast: result.credits,
        budget: result.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
        revenue: result.revenue
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
      };
    });
  }
}
