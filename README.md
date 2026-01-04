# Personal Website (Astro)

This is a personal website project, migrated from Next.js to Astro. It showcases projects, experience, and life moments.

## 🚀 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Installs dependencies                         |
| `npm run dev`     | Starts local dev server at `localhost:4321`   |
| `npm run build`   | Build your production site to `./dist/`       |
| `npm run preview` | Preview your build locally, before deploying  |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## ✍️ Updating Content

To update the content of your website, you can modify the React components located in `src/components/` and the Astro pages in `src/pages/`.

-   **`src/components/HomePage.tsx`**: Contains the main logic for displaying different sections (About, Projects, Life).
-   **`src/components/about-section.tsx`**: Edit your personal introduction and details here.
-   **`src/components/projects-section.tsx`**: Update your project listings.
-   **`src/components/life-section.tsx`**: Modify content related to your life moments.
-   **`src/components/navigation.tsx`**: Adjust navigation links if needed.
-   **`src/layouts/Layout.astro`**: Modify the main HTML structure and head content.
-   **`src/pages/index.astro`**: This is your main landing page, importing `HomePage`.

After making changes, run `npm run dev` to see your updates locally.
