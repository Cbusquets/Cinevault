import { Component } from '@angular/core';
import { FavoritesService, Movie } from '../../services/favorites';
import { MovieService } from '../../services/movie';
import { DatePipe, DecimalPipe } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../../components/navbar/movie-card/movie-card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [DatePipe, DecimalPipe, RouterLink, FormsModule, MovieCardComponent],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  allFavorites: Movie[] = [];
  favorites: Movie[] = [];
  searchedFavorites: Movie[] = [];
  searchQuery: string = '';
  loading: boolean = false;
  genres: {id: number; name: string}[] = [];
  isSearching: boolean = false;
  selectedGenreId: number | null = null;

  constructor(
    private favoritesService: FavoritesService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
    this.loadGenres();
  }

  loadGenres(): void {
    this.movieService.getGenres().subscribe({
      next: (res) => this.genres = res.genres
    });
  }

  filterByGenre(genreId: number): void {
    if (this.selectedGenreId === genreId) { 
      this.selectedGenreId = null
      this.loadFavorites(); 
      return; 
    }
    this.loading = true;
    this.isSearching = false;
    this.selectedGenreId = genreId;
    const  allFavorites = this.favoritesService.getFavorites();
    this.favorites = allFavorites.filter(m => m.genres?.some(g => g.id === genreId));
    this.loading=false;
  }

  search(): void {
    if (!this.searchQuery.trim()) {
      this.isSearching = false;
      this.loadFavorites();
      return;
    }
    this.isSearching = true;
    this.searchedFavorites = this.favorites.filter(m =>
      m.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
}

  loadFavorites(){
    this.loading = false;
    this.favorites = this.favoritesService.getFavorites();
  }

  isFavorite(id: number) : boolean{
    return this.favoritesService.isFavorite(id);
  }

  getPosterUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
  }

}
