# 01 - Instalación

## Herramienta
Claude (Anthropic) - claude.ai

## Prompt
¿Qué necesito instalar para crear un proyecto Angular 21 que consuma una API externa?

## Respuesta

Verificar que Angular CLI esté instalado:
```bash
ng version
```

Crear el proyecto:
```bash
ng new CineVault --routing --style=scss
```
- SSR: No
- AI tools: Claude

Instalar dependencias del proyecto:
```bash
npm install bootstrap
npm install @tabler/icons-webfont
npm install zone.js
```

Agregar en `src/styles.scss`:
```scss
@use 'bootstrap/scss/bootstrap';
@import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont/tabler-icons.min.css');
```
