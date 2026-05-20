# airbnb - Contexto de Producto

## Vision de la plataforma
airbnb es un frontend mobile-first inspirado en la experiencia de Airbnb para descubrir alojamientos y reservar habitaciones. El objetivo principal es validar una arquitectura de componentes modular, escalable y mantenible antes de evolucionar hacia un sistema de diseno propio.

La experiencia se centra en tres flujos clave:
1. Descubrimiento rapido de propiedades desde Home.
2. Exploracion y filtrado en Catalogo.
3. Decision de reserva en el detalle de habitacion.

## Usuario objetivo
- Viajeros digitales de 20 a 45 anos que reservan desde movil.
- Usuarios que comparan opciones por precio, valoracion, ubicacion y servicios.
- Personas que esperan una navegacion rapida, visual y clara en pantallas pequenas.

## Principios de UX
- Mobile-first como base (viewport 375px), escalando a tablet y desktop.
- Informacion critica visible sin friccion: precio por noche, rating y ubicacion.
- Flujo de reserva directo con controles claros de huespedes y fechas.

## Rutas principales
- /: Home con busqueda, categorias y grid de propiedades destacadas.
- /catalog: resultados de busqueda con ordenacion, conteo y mapa placeholder.
- /rooms/[id]: detalle completo de habitacion con galeria, amenities y reserva.

## Mapa de componentes principales
- Layout
  - AppShell (estructura general por pagina)
  - Navbar (logo, busqueda, accesos)
- Discover
  - SearchBar (entrada de texto y callback de filtro)
  - CategoryChips (selector de categorias activas)
  - PropertyGrid (contenedor responsive de tarjetas)
  - PropertyCard (preview reusable para Home y Catalog)
- Catalog
  - ResultsHeader (contador + orden de precio)
  - MapPlaceholder (bloque visual para futura integracion de mapa real)
- Room Detail
  - RoomGallery (imagenes + navegacion anterior/siguiente)
  - RoomHeader (titulo, rating, ubicacion)
  - HostSummary (datos del anfitrion)
  - AmenitiesGrid (servicios disponibles)
  - BookingCard (precio, contador de huespedes y CTA)

## Datos y modelo de dominio
El dominio separa claramente:
- Property: entidad resumida para listados (Home/Catalog).
- Room: entidad detallada para la vista /rooms/[id].
- Host, Amenity y LocationInfo: subestructuras reutilizables.

## Criterios de arquitectura
- Componentes de responsabilidad unica y altamente reutilizables.
- Tipado fuerte con TypeScript para proteger contratos de datos simulados.
- Navegacion interna exclusiva con Link de Next.js.
- Sin estilos inline: Tailwind CSS como unica capa de estilos.