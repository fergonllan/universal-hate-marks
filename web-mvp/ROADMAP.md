# Roadmap Tecnico - Web de Tesis

## Objetivo
Publicar una web estatica e interactiva para presentar la tesis sobre DAO y discurso de odio, sin IA, con foco en claridad academica y demo operativa.

## Estado actual
- Estructura base de rutas implementada.
- Navegacion global implementada.
- Mapa interactivo conceptual/geografico implementado.
- Simulador de flujo + votacion de reglas ficticias implementado.

## Backlog por prioridad

### P0 - Cierre de contenido
1. Reemplazar textos base por redaccion final de tesis.
2. Completar FAQ con 20-30 preguntas reales del jurado.
3. Completar glosario con terminos del marco teorico.
4. Cargar archivos reales en `public/docs` para descargas.

### P1 - Calidad de producto
1. Revisar accesibilidad (contraste, foco, navegacion teclado, labels).
2. Agregar metadatos SEO por pagina (title/description).
3. Incluir Open Graph y favicon social para compartir enlaces.
4. Ajustar responsive en mobile para mapa y simulador.

### P1 - Analitica y evidencia
1. Agregar metricas anonimas de navegacion (por ejemplo Plausible).
2. Medir interacciones: clicks en mapa, votos demo, tiempo en resumen.
3. Publicar metodologia breve de metricas (transparencia academica).

### P2 - Visualizacion avanzada
1. Mejorar mapa conceptual con conexiones entre nodos.
2. Agregar timeline visual por hitos y dependencias.
3. Exportar resultados de votacion demo como captura o JSON local.

### P2 - Contenido extendido
1. Version bilingue ES/EN.
2. Seccion de "casos de uso en otros escenarios" desde conclusiones.
3. Seccion de "limitaciones y riesgos" con enfoque etico.

## Checklist de publicacion
1. `npm run build` sin errores.
2. Archivos PDF cargados y links verificados.
3. Deploy ejecutado en GitHub Actions o Vercel.
4. Verificacion final en desktop y mobile.
5. Control de links rotos y textos pendientes.
