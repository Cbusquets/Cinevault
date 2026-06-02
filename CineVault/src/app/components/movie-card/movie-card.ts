import { Component, Input, Output } from "@angular/core";
import { FavoritesService, Movie } from "../../services/favorites";
import { RouterLink } from "@angular/router";
import { DatePipe, DecimalPipe } from "@angular/common";

@Component({
    selector: 'app-movie-card',
    standalone: true,
    imports: [RouterLink, DecimalPipe, DatePipe],
    templateUrl: './movie-card.html',
    styleUrl: './movie-card.scss'
})
export class MovieCardComponent {
    @Input() movie!: Movie;
    @Input() favorite: boolean = false;

    constructor(
        private favoriteService: FavoritesService
    ) {}

    getPosterUrl(path: string): string {
        return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
    }
}