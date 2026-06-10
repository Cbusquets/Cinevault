# CineVault

Aplicación RIA desarrollada con Angular 21 que consume la API de TMDB para buscar, explorar y guardar películas favoritas.

## Integrantes
- Christian Busquets
- Nicolas Hernandez

## Tecnologías
- Angular 21
- Bootstrap
- Tabler Icons
- TMDB API
- LocalStorage

## Funcionalidades
- Búsqueda de películas por título
- Exploración de películas populares
- Vista de detalle con sinopsis y tráiler
- Guardado de favoritos en LocalStorage

## Requisitos previos
- Node.js 24+
- Angular CLI 21+

## API References

Todos los endpoints utilizados pertenecen a la [TMDB API](https://developers.themoviedb.org/3).

| Endpoint | Método | Descripción |
|---|---|---|
| `/movie/popular` | GET | Películas populares en home |
| `/search/movie` | GET | Búsqueda por título |
| `/movie/:id` | GET | Detalle de película |
| `/movie/:id/videos` | GET | Tráiler en YouTube |
| `/genre/movie/list` | GET | Lista de géneros |
| `/discover/movie` | GET | Filtrar por género |

## Instalación

```bash
git clone https://github.com/Cbusquets/Cinevault.git
cd Cinevault/CineVault
npm install
```

## Cómo levantar el sistema

### Modo desarrollo
```bash
ng serve
```
Abrí el navegador en `http://localhost:4200`

### Modo producción
```bash
ng build --configuration production
npm install -g serve
serve dist/CineVault/browser
```
Abrí el navegador en `http://localhost:3000`

## Tests
```bash
ng test
```
20 tests — servicios y componente home cubiertos

## Performance
Analizado con Lighthouse en modo Desarrolo y Producción.

## Estructura del proyecto
```
CineVault/
├── src/
│   └── app/
│       ├── components/navbar, movie-card, search-bar
│       ├── views/home, detail, favorites
│       └── services/movie.ts, favorites.ts
├── diagrams/
├── tests/
├── prompts/
└── README.md
```

## Herramientas de IA utilizadas
- Claude (Anthropic) — claude.ai

## Herramientas de diagramación
- Draw.io
