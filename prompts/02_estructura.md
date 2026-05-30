# 02 - Estructura del proyecto

## Herramienta
Claude (Anthropic) - claude.ai

## Prompt
¿Cuál es la mejor estructura de carpetas para un proyecto Angular 21 que tiene vistas, componentes reutilizables y servicios?

## Respuesta

```
CineVault/
├── src/
│   └── app/
│       ├── components/       # Componentes reutilizables
│       │   ├── navbar/
│       │   ├── movie-card/
│       │   └── search-bar/
│       ├── views/            # Páginas principales
│       │   ├── home/
│       │   ├── detail/
│       │   └── favorites/
│       └── services/         # Llamadas a API y LocalStorage
│           ├── movie.ts
│           └── favorites.ts
├── docker/                   # Dockerfile y nginx
├── prompts/                  # Registro de uso de IA
├── tests/                    # Pruebas unitarias e integración
└── README.md
```

Comandos para generar componentes y servicios:
```bash
ng generate component components/navbar
ng generate component components/movie-card
ng generate component components/search-bar
ng generate component views/home
ng generate component views/detail
ng generate component views/favorites
ng generate service services/movie
ng generate service services/favorites
```
