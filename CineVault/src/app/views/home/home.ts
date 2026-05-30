import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, DatePipe } from '@angular/common';
import { MovieService } from '../../services/movie';
import { FavoritesService, Movie } from '../../services/favorites';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule, DecimalPipe, DatePipe],
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

  getPosterUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
  }
}