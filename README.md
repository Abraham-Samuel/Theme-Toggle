# Theme Toggle Project

A simple JavaScript + Tailwind CSS project that displays a documentation-style page and allows users to switch between light and dark themes.

## Features

- Responsive layout for mobile and desktop
- Theme toggle button available on both mobile and desktop views
- Theme preference saved in browser local storage
- Tailwind CSS utility-based styling

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS v4

## Project Structure

```text
.
├── package.json
└── src/
    ├── index.html
    ├── index.css
    ├── output.css
    └── script.js
```

## Installation

1. Install dependencies:

```bash
npm install
```

## Running Tailwind Build

Use this command to compile Tailwind from `src/index.css` into `src/output.css`:

```bash
npx @tailwindcss/cli -i ./src/index.css -o ./src/output.css --watch
```

## Run the Project

Open `src/index.html` in your browser.

## How Theme Toggle Works

- The script selects all elements with the `.theme-toggle` class.
- On click, it toggles the `dark` class on the `body`.
- The selected theme is stored in local storage under the key `theme`.
- On page load, the saved theme is restored.

## Notes

- If your theme button clicks but the colors do not change, make sure your dark-mode styles are defined and your stylesheet is linked correctly.
- If Tailwind build fails, verify the input path is `./src/index.css`.
