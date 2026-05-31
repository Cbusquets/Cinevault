import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie';
import { FavoritesService, Movie } from '../../services/favorites';
import { MovieCardComponent } from '../../components/navbar/movie-card/movie-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule, MovieCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  searchQuery: string = '';
  loading: boolean = false;

  constructor(
    private movieService: MovieService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.loadPopular();
  }

  loadPopular(): void {
    this.loading = true;
    this.movieService.getPopularMovies().subscribe({
      next: (res) => {
        this.movies = res.results;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  search(): void {
    if (!this.searchQuery.trim()) {
      this.loadPopular();
      return;
    }
    this.loading = true;
    this.movieService.searchMovies(this.searchQuery).subscribe({
      next: (res) => {
        this.movies = res.results;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  isFavorite(id: number): boolean {
    return this.favoritesService.isFavorite(id);
  }
  
  toggleFavorite(movie: Movie): void{
    this.toggleFavorite(movie);
  }

  getPosterUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
  }
}