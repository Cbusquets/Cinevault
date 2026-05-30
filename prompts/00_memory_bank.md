# Memory Bank - CineVault

## Stack
- Framework: Angular 21
- Estilos: SCSS + Bootstrap
- Íconos: Tabler Icons
- API: TMDB (The Movie Database)
- Persistencia: LocalStorage (favoritos)

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
│       ├── components/navbar/
│       ├── views/home, detail, favorites/
│       └── services/movie.ts, favorites.ts
├── docker/
├── prompts/
├── tests/
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
- [ ] Detalle de película
- [ ] Pantalla de favoritos
- [ ] Tests unitarios e integración
- [ ] Docker + Nginx
- [ ] README completo
- [ ] PPT presentación
- [ ] Mockups mobile

## Notas Angular 21
- Archivos sin sufijo `.component` (ej: `home.ts`)
- Clases pueden no tener sufijo `Component` (ej: `export class Detail {}`)
- Usar `@if` y `@for` en lugar de `*ngIf` y `*ngFor`
- Pipes se importan individualmente: `DecimalPipe`, `DatePipe`
- `zone.js` se instala manualmente

## Herramientas IA utilizadas
- Claude (Anthropic) — claude.ai
