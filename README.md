# Profiles App (Lab 1)
This project is built using Vite + React and styled with React-Bootstrap.  
It displays a simple “Hello React” message inside a Bootstrap alert component.

Features:
- Initialized with Vite for fast development
- Uses React-Bootstrap for responsive UI components
- Minimal setup for experimenting with React and Bootstrap integration

## Getting Started
\ ```bash
npm install
npm run dev
# open the shown URL (e.g., http://localhost:5173)
\ ```

## Build

\ ```bash
npm run build
\ ```

## Deploy (GitHub Pages via Actions)
- Ensure `base: '/profiles-app/'` in `vite.config.js`
- Push to `main`; the CI workflow will build and deploy automatically.
- Settings → Pages → Source: **GitHub Actions**

commit link:
https://github.com/bismashaikh2912/profiles-apps/commit/b23689368c30c3f230f7856976f405496bb1724a

screenshort name: screenshot-react.png

Live demo:
https://bismashaikh2912.github.io/profiles-apps/

Screenshot of rendered cards (filename)- screenshot-render-cards.PNG

Link to commit diff that introduced components and .map() -  https://github.com/bismashaikh2912/profiles-apps/commit/6d28cf9b97248fcac23e13b66aa932ebc3711f73

### Stateful UI & Like Button
- Implemented React `useState` for profile data.
- Added a Like button that increments likes immutably.
- State updates are visible instantly without refresh.
