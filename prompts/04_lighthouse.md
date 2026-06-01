# 04 - Performance con Lighthouse

## Herramienta
Claude (Anthropic) - claude.ai

## Prompt
¿Cómo mejoro el puntaje de Lighthouse en una app Angular 21?

## Por qué usamos Lighthouse
Lighthouse es una herramienta integrada en Chrome que analiza la app y da un puntaje del 0 al 100 en:
- Rendimiento
- Accesibilidad
- Prácticas recomendadas
- SEO

## Por qué buildar en producción
El `ng serve` no minifica el código — sirve para desarrollo pero da puntajes bajos en Lighthouse. El build de producción minifica JS y CSS, eliminando código innecesario y mejorando el puntaje.

## Pasos

Build de producción:
```bash
ng build --configuration production
```

Servir el build:
```bash
npm install -g serve
serve dist/CineVault/browser
```

Correr Lighthouse:
1. Abrí Chrome en `http://localhost:3000`
2. F12 → pestaña Lighthouse
3. Modo: Navegación · Dispositivo: Ordenador · todas las categorías
4. Click "Analizar carga de la página"

## Resultado
Puntaje en desarrollo: 78
Puntaje en producción: 97
