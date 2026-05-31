import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get popular movies', () => {
    const mockResponse = { results: [{ id: 1, title: 'Dune' }] };

    service.getPopularMovies().subscribe(res => {
      expect(res.results.length).toBe(1);
      expect(res.results[0].title).toBe('Dune');
    });

    const req = httpMock.expectOne(req =>
      req.url.includes('/movie/popular')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should search movies by query', () => {
    const mockResponse = { results: [{ id: 2, title: 'Inception' }] };

    service.searchMovies('Inception').subscribe(res => {
      expect(res.results[0].title).toBe('Inception');
    });

    const req = httpMock.expectOne(req =>
      req.url.includes('/search/movie')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get movie detail by id', () => {
    const mockMovie = { id: 1, title: 'Dune', overview: 'Una historia épica.' };

    service.getMovieDetail(1).subscribe(res => {
      expect(res.id).toBe(1);
      expect(res.title).toBe('Dune');
    });

    const req = httpMock.expectOne(req =>
      req.url.includes('/movie/1')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMovie);
  });

  it('should get movie videos by id', () => {
    const mockVideos = { results: [{ key: 'abc123', type: 'Trailer', site: 'YouTube' }] };

    service.getMovieVideos(1).subscribe(res => {
      expect(res.results[0].type).toBe('Trailer');
    });

    const req = httpMock.expectOne(req =>
      req.url.includes('/videos')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockVideos);
  });
});