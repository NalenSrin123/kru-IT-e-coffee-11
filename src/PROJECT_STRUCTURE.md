# E-Coffee Frontend Structure

## Architecture
- `src/dashboard`: Admin panel for managing coffee menu, categories, prices, branches, promotions, images, users, and roles.
- `src/public-site`: Public read-only website: home, menu, coffee details, about, branches, promotions, contact.
- `src/services`: Shared data access and API clients used by both dashboard and public-site.
- `src/components`, `src/hooks`, `src/context`, `src/utils`, `src/types`: Shared frontend layers.

## Team Mapping (30 Interns)
- Dashboard Team (15)
- Public Website Team (15)

### Dashboard Team
- A1 (Core CRUD & Forms)
: `src/dashboard/features/a1-core-crud-forms`
  - login
  - coffee-category-crud
  - price-availability
  - image-upload

- A2 (Tables, Filters & UX)
: `src/dashboard/features/a2-tables-filters-ux`
  - coffee-list
  - pagination-search
  - filters-bulk-actions
  - confirmation-modals

- A3 (Layout & Visualization)
: `src/dashboard/features/a3-layout-visualization`
  - layout-sidebar
  - stats-cards-charts
  - role-based-ui

### Public Website Team
- B1 (Landing & Branding)
: `src/public-site/features/b1-landing-branding`
  - home
  - about
  - brand-story-promotions

- B2 (Menu & Coffee Pages)
: `src/public-site/features/b2-menu-coffee-pages`
  - menu-list
  - coffee-detail
  - category-filter-branch-locations

- B3 (Performance & Polish)
: `src/public-site/features/b3-performance-polish`
  - loading-seo
  - image-optimization
  - accessibility-mobile

## Outcome Alignment
- Real teamwork experience with clear ownership boundaries.
- Strong separation between admin dashboard and public website.
- Industry-style modular folder architecture.
- Portfolio-ready team project scaffold.
