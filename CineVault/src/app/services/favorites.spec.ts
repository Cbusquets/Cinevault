import { TestBed } from '@angular/core/testing';
import { FavoritesService, Movie } from './favorites';

const mockMovie: Movie = {
  id: 1,
  title: 'Inception',
  poster_path: '/poster.jpg',
  release_date: '2010-07-16',
  vote_average: 8.8,
  overview: 'Un ladrón que roba secretos corporativos.'
};

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty array when no favorites', () => {
    expect(service.getFavorites()).toEqual([]);
  });

  it('should add a favorite', () => {
    service.addFavorite(mockMovie);
    expect(service.getFavorites().length).toBe(1);
    expect(service.getFavorites()[0].id).toBe(1);
  });

  it('should not add duplicate favorites', () => {
    service.addFavorite(mockMovie);
    service.addFavorite(mockMovie);
    expect(service.getFavorites().length).toBe(1);
  });

  it('should remove a favorite', () => {
    service.addFavorite(mockMovie);
    service.removeFavorite(1);
    expect(service.getFavorites().length).toBe(0);
  });

  it('should return true if movie is favorite', () => {
    service.addFavorite(mockMovie);
    expect(service.isFavorite(1)).toBe(true);
  });

  it('should return false if movie is not favorite', () => {
    expect(service.isFavorite(999)).toBe(false)
  });
});