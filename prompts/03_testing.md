# 03 - Testing unitario e integración

## Herramienta
Claude (Anthropic) - claude.ai

## Prompt
¿Cómo hago tests unitarios en Angular 21 para servicios y componentes que usan HTTP y LocalStorage?

## Lo que se implementó

### Archivos creados
- `src/app/services/favorites.spec.ts` — 7 tests del servicio de favoritos
- `src/app/services/movie.spec.ts` — 5 tests del servicio de películas
- `src/app/views/home/home.spec.ts` — 7 tests del componente home

### Correr los tests
```bash
ng test
```

### Notas clave
- Angular 21 usa **Vitest** en lugar de Jasmine
- Usar `toBe(true)` y `toBe(false)` en lugar de `toBeTrue()` y `toBeFalse()`
- Para mockear HTTP usar `HttpClientTestingModule` y `HttpTestingController`
- Para mockear servicios usar `vi.fn()` de Vitest
- Limpiar `localStorage` en `beforeEach` para tests aislados

## Resultado
20 tests pasando — servicios y componente home cubiertos
