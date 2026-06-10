import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private baseUrl = environment.tmdbBaseUrl;
    private apiKey = environment.tmdbApiKey;

    constructor(private http: HttpClient) {}

    searchMovies(query: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/search/movie`, {
            params: { api_key: this.apiKey, query, language: 'es-ES' }
        });
    }

    getPopularMovies(): Observable<any> {
        return this.http.get(`${this.baseUrl}/movie/popular`, {
            params: { api_key: this.apiKey, language: 'es-ES' }
        });
    }

    getMovieDetail(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/movie/${id}`, {
            params: { api_key: this.apiKey, language: 'es-ES' }
        });
    }

    getMovieVideos(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/movie/${id}/videos`, {
            params: { api_key: this.apiKey, language: 'es-ES' }
        });
    }

    getGenres(): Observable<any> {
        return this.http.get(`${this.baseUrl}/genre/movie/list`, {
            params: { api_key: this.apiKey, language: 'es-ES' }
        });
    }

    getMoviesByGenre(genreId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/discover/movie`, {
            params: { api_key: this.apiKey, language: 'es-ES', with_genres: genreId.toString() }
        });
    }
}