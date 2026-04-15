# Frontend Interview Tasks

This repository contains two separate React projects built as individual tasks:

- `dashboard` - A Dashboard UI
- `user-table` - A user listing screen with search, filter, and sort

Both projects use React `19.2.0`, TypeScript, Vite, and Tailwind CSS.

## Project Setup

### Prerequisites

- Node.js installed locally
- npm available in the terminal

Note:
The projects build successfully, but Vite `7.3.2` prefers Node `20.19+` or `22.12+`. If you are on `22.10.0`, you may still see an engine warning during install/build.

### Install and run `dashboard`

```bash
cd dashboard
npm install
npm run dev
```

### Install and run `user-table`

```bash
cd user-table
npm install
npm run dev
```

## Features Implemented

### Dashboard

- Responsive dashboard layout based on the supplied design
- Desktop sidebar with a fixed-height shell and scrollable content area
- Sidebar hidden on smaller screens to keep the mobile layout cleaner
- Reusable dashboard components split into cards, top bar, sidebar, and chart sections
- Tailwind-based styling with React component structure in TypeScript
- Recharts used for the dashboard charts
- Shadcn-style UI primitives used for card, avatar, button, progress, and separator building blocks

### User Table

- Data fetched from `https://jsonplaceholder.typicode.com/users`
- TypeScript interface for the API response shape
- Custom `useFetch` hook using the native `fetch` API
- Table rendering:
  Name, email, company name, and city
- Search by name or email
- Filter by city
- Sort by name from the table header
- Sort order cycles as:
  descending -> ascending -> none
- Responsive layout with controls above the table
- Search, city filter, and sort state persisted in URL query params

## Assumptions And Decisions

- I kept the two apps separate instead of forcing them into one shared setup, since they read like two independent tasks.
- For the dashboard, I matched the reference layout closely while still making it usable on smaller screens. On mobile, hiding the sidebar felt cleaner than squeezing it into the viewport.
- For the user table, I used a custom `useFetch` hook instead of React’s `use()` API. That felt like the safer choice here because it keeps the setup simple and works cleanly in a standard client-side Vite app.
- The table sort behavior follows the usual click cycle on the `Name` header:
  first click descending, second click ascending, third click no sort.
- The search is case-insensitive and checks both `name` and `email`.
- The city filter options are generated from the fetched dataset rather than hardcoded.
- Search, filter, and sort are mirrored into URL params so the table state survives refresh and the current view can be shared with the same controls applied.
- I kept the code fairly direct and readable instead of abstracting too early, especially in the smaller `user-table` app.
