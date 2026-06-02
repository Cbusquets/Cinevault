import { Injectable } from '@angular/core';

export interface Movie {
    id: number;
    title: string;
    genres?: { id: number; name: string }[];
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

@Injectable({
    providedIn: 'root'
})
export class FavoritesService {
    private key = 'cinevault_favorites';

    getFavorites(): Movie[] {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }

    addFavorite(movie: Movie): void {
        const favs = this.getFavorites();
        if (!this.isFavorite(movie.id)) {
            favs.push(movie);
            localStorage.setItem(this.key, JSON.stringify(favs));
        }
    }

    removeFavorite(id: number): void {
        const favs = this.getFavorites().filter(m => m.id !== id);
        localStorage.setItem(this.key, JSON.stringify(favs));
    }

    toggleFavorite(movie: Movie): void {
        if (this.isFavorite(movie.id)) {
            this.removeFavorite(movie.id);
        } else {
            this.addFavorite(movie);
        }
    }

    isFavorite(id: number): boolean {
        return this.getFavorites().some(m => m.id === id);
    }
}