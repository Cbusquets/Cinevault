import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';
import { MovieService } from '../../services/movie';
import { FavoritesService } from '../../services/favorites';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';

const mockMovies = {
  results: [
    { id: 1, title: 'Dune', poster_path: '/dune.jpg', release_date: '2021-10-22', vote_average: 8.0, overview: 'Una historia épica.' },
    { id: 2, title: 'Inception', poster_path: '/inception.jpg', release_date: '2010-07-16', vote_average: 8.8, overview: 'Sueños dentro de sueños.' }
  ]
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieServiceMock: any;
  let favoritesServiceMock: any;

  beforeEach(async () => {
    movieServiceMock = {
      getPopularMovies: vi.fn().mockReturnValue(of(mockMovies)),
      searchMovies: vi.fn().mockReturnValue(of(mockMovies)),
      getGenres: vi.fn().mockReturnValue(of({ genres: [
        { id: 28, name: 'Acción' },
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedia' }
      ]}))
    };

    favoritesServiceMock = {
      isFavorite: vi.fn().mockReturnValue(false),
      addFavorite: vi.fn(),
      removeFavorite: vi.fn(),
      getFavorites: vi.fn().mockReturnValue([])
    };

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        { provide: MovieService, useValue: movieServiceMock },
        { provide: FavoritesService, useValue: favoritesServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load popular movies on init', () => {
    expect(movieServiceMock.getPopularMovies).toHaveBeenCalled();
    expect(component.movies.length).toBe(2);
  });

  it('should search movies when search is called', () => {
    component.searchQuery = 'Dune';
    component.search();
    expect(movieServiceMock.searchMovies).toHaveBeenCalledWith('Dune');
  });

  it('should set isSearching to true after search', () => {
    component.searchQuery = 'Inception';
    component.search();
    expect(component.isSearching).toBe(true);
  });

  it('should reset to popular when search query is empty', () => {
    component.searchQuery = '';
    component.search();
    expect(component.isSearching).toBe(false);
    expect(movieServiceMock.getPopularMovies).toHaveBeenCalled();
  });

  it('should return correct poster url', () => {
    const url = component.getPosterUrl('/test.jpg');
    expect(url).toContain('image.tmdb.org');
  });

  it('should return fallback url when no poster', () => {
    const url = component.getPosterUrl('');
    expect(url).toBe('assets/no-poster.png');
  });
});