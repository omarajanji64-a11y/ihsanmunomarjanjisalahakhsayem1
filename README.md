
# Ihsan MUN 2026

Marketing site for Ihsan Schools Model United Nations 2026, built with Next.js and Tailwind CSS.

## Development

- `npm run dev` starts the local development server on port `9002`
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run typecheck` runs the TypeScript checker

## Structure

- `src/app` contains route-level pages and layout files
- `src/components` contains shared UI and page components
- `src/lib` contains shared utilities and image override persistence
- `data/site-image-overrides.json` stores local image override data when remote persistence is not configured

## Image Editing

The site includes an authenticated editor mode for replacing page imagery. Image overrides can be stored locally or through the configured remote document store, depending on the deployment environment.
