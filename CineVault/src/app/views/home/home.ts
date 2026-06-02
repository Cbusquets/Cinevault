import { Component, OnInit, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie';
import { FavoritesService, Movie } from '../../services/favorites';
import { MovieCardComponent } from '../../components/movie-card/movie-card';
import { SearchBarComponent } from "../../components/search-bar/search-bar";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule, MovieCardComponent, SearchBarComponent],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
    movies: Movie[] = [];
    searchQuery: string = '';
    loading: boolean = false;
    isSearching: boolean = false;
    selectedGenreId: number | null = null;
    genres: { id: number; name: string }[] = [];
    searchbar = viewChild(SearchBarComponent);

    constructor(
        private movieService: MovieService,
        private favoritesService: FavoritesService
    ) {}

    ngOnInit(): void {
        this.loadPopular();
        this.loadGenres();
    }

    loadPopular(): void {
        this.loading = true;
        this.movieService.getPopularMovies().subscribe({
            next: (res) => {
                this.movies = res.results;
                this.loading = false;
            },
            error: () => (this.loading = false)
        });
    }

    loadGenres(): void {
        this.movieService.getGenres().subscribe({
            next: (res) => (this.genres = res.genres)
        });
    }

    filterByGenre(genreId: number): void {
        if (this.selectedGenreId === genreId) {
            this.selectedGenreId = null;
            this.searchbar()?.searchControl.setValue("");
            this.loadPopular();
            return;
        }
        this.loading = true;
        this.isSearching = false;
        this.selectedGenreId = genreId;
        this.movieService.getMoviesByGenre(genreId).subscribe({
            next: (res) => {
                this.movies = res.results;
                this.loading = false;
            },
            error: () => (this.loading = false)
        });
    }

    search(query: string): void {
        if (!query.trim()) {
            this.isSearching = false;
            this.loadPopular();
            return;
        }
        this.isSearching = true;
        this.loading = true;
        this.movieService.searchMovies(query).subscribe({
            next: (res) => {
                this.movies = res.results;
                this.loading = false;
            },
            error: () => (this.loading = false)
        });
    }

    isFavorite(id: number): boolean {
        return this.favoritesService.isFavorite(id);
    }

    getPosterUrl(path: string): string {
        return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
    }
}