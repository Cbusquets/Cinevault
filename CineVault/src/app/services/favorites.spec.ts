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

  it('Deberia crear el componente FavoritesService', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia devolver un array vacio si no hay favoritos', () => {
    expect(service.getFavorites()).toEqual([]);
  });

  it('Deberia agregar un favorito', () => {
    service.addFavorite(mockMovie);
    expect(service.getFavorites().length).toBe(1);
    expect(service.getFavorites()[0].id).toBe(1);
  });

  it('No deberia de agregar dos favoritos repetidos', () => {
    service.addFavorite(mockMovie);
    service.addFavorite(mockMovie);
    expect(service.getFavorites().length).toBe(1);
  });

  it('Deberia remover un favorito', () => {
    service.addFavorite(mockMovie);
    service.removeFavorite(1);
    expect(service.getFavorites().length).toBe(0);
  });

  it('Retorna true si una pelicula es favorita', () => {
    service.addFavorite(mockMovie);
    expect(service.isFavorite(1)).toBe(true);
  });

  it('Retorna false si una pelicula no es favorita', () => {
    expect(service.isFavorite(999)).toBe(false)
  });
});