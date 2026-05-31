import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DecimalPipe, DatePipe } from '@angular/common';
import { MovieService } from '../../services/movie';
import { FavoritesService, Movie } from '../../services/favorites';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DecimalPipe, DatePipe],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class DetailComponent implements OnInit{
  movie: any = null;
  trailerKey: string | null = null;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private favoriteService: FavoritesService,
    private location: Location
  ){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadDetail(id);
    this.loadTrailer(id);
  }

  loadDetail(id: number): void{
    this.movieService.getMovieDetail(id).subscribe({
      next: (res) => {
        this.movie = res;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  loadTrailer (id: number): void{
    this.movieService.getMovieVideos(id).subscribe({
      next: (res) => {
        const trailer = res.results.find(
          (v: any) => v.type === "Trailer" && v.site === "YouTube"
        );
        this.trailerKey = trailer ? trailer.key : null;
      }
    });
  }

  openTrailer(): void {
    if (this.trailerKey) {
      window.open(`https://www.youtube.com/watch?v=${this.trailerKey}`, '_blank');
    }
  }

  isFavorite(): boolean{
    return this.movie ? this.favoriteService.isFavorite(this.movie.id) : false;
  }

  toggleFavorite(): void{
    if (!this.movie) return;
    const movieData: Movie = {
      id: this.movie.id,
      title: this.movie.title,
      poster_path: this.movie.poster_path,
      release_date: this.movie.release_date,
      vote_average: this.movie.vote_average,
      overview: this.movie.overview     
    }
    this.favoriteService.toggleFavorite(movieData);
  }

  getBackdropUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/original${path}` : '';
  }

  getPosterUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
  }

  goBack(): void {
    this.location.back();
  }  
}
