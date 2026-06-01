# Memory Bank - CineVault

## Integrantes
- Christian Busquets
- Nicolas Hernandez

## Stack
- Framework: Angular 21
- Estilos: SCSS + Bootstrap
- Íconos: Tabler Icons
- API: TMDB (The Movie Database)
- Persistencia: LocalStorage (favoritos)
- Testing: Vitest (integrado en Angular 21)

## API Key TMDB
`8be2d58ada9137a8c726e333d56b596a`
Configurada en `src/environments/environment.ts`

## Pantallas
- `/` — Home: buscador + grilla de películas populares
- `/detail/:id` — Detalle: info completa + tráiler + favoritos
- `/favorites` — Favoritos: películas guardadas en LocalStorage

## Estructura del repo
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

## Estado actual
- [x] Proyecto Angular creado
- [x] Bootstrap + Tabler Icons instalados
- [x] Rutas configuradas
- [x] Servicio TMDB implementado
- [x] Servicio favoritos con LocalStorage implementado
- [x] Navbar funcional
- [x] Home funcional con buscador y grilla
- [x] Detalle de película
- [x] Pantalla de favoritos con búsqueda local
- [x] Fix: título cambia solo al hacer click en Buscar
- [x] Fix: favoritos muestra "Mis favoritos" en lugar de "Populares ahora"
- [x] Fix: búsqueda en favoritos funcional
- [x] Tests unitarios — 20 tests pasando
- [x] Lighthouse — analizado en desarrollo (78) y producción (97)
- [x] Mockups desktop y mobile
- [x] Diagramas de componentes y flujo de navegación

## Notas Angular 21
- Archivos sin sufijo `.component` (ej: `home.ts`)
- Clases pueden no tener sufijo `Component` (ej: `export class Detail {}`)
- Usar `@if` y `@for` en lugar de `*ngIf` y `*ngFor`
- Pipes se importan individualmente: `DecimalPipe`, `DatePipe`
- `zone.js` se instala manualmente
- Testing usa Vitest — usar `toBe(true)` en lugar de `toBeTrue()`

## Herramientas IA utilizadas
- Claude (Anthropic) — claude.ai

## Herramientas de diagramación
- Draw.io

