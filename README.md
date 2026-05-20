# airbnb

Frontend mobile-first inspirado en Airbnb, construido con Next.js (App Router), TypeScript y Tailwind CSS.

## Objetivo

Validar una arquitectura modular de componentes para un clon de Airbnb con tres vistas principales:

- Home (`/`): busqueda, categorias, skeleton y grid de alojamientos.
- Catalogo (`/catalog`): resultados con orden por precio y bloque de mapa.
- Detalle (`/rooms/[id]`): galeria, datos del host, amenities y tarjeta de reserva.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Estructura principal

```
src/
	app/
		page.tsx
		catalog/page.tsx
		rooms/[id]/page.tsx
	components/
		PropertyCard.tsx
		RoomGallery.tsx
		BookingCard.tsx
		...
	data/
		properties.ts
		homeCategories.ts
	types/
		index.ts
public/
	images/properties/
```

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Por defecto se sirve en `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```

## Deploy (Vercel)

1. Importa el repositorio en Vercel.
2. Framework preset: Next.js.
3. Branch recomendado para preview: `lexsaso`.
4. Build command: `npm run build`.
5. Output: configuracion por defecto de Next.js (sin carpeta custom).

Para deploy por CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

## Convenciones de codigo

- Componentes funcionales con `const`.
- Sin `style={{}}`, solo clases de Tailwind.
- Navegacion interna siempre con `Link` de Next.js.
- Una responsabilidad por archivo/componente.
- Tipos de dominio centralizados en `src/types/index.ts`.
- Datos mock centralizados en `src/data/`.
- Preferir nombres claros en espanol para texto UI del proyecto.
- Mantener vistas mobile-first y escalar con breakpoints (`sm`, `md`, `lg`, `xl`).
- Ejecutar `npm run typecheck` y `npm run build` antes de merge.

## Notas

- La propiedad "Cabana minimalista" usa imagen local para evitar fallos por URLs externas:
	- `public/images/properties/cabana-1.jpg`
- Los datos mock estan en `src/data/properties.ts`.