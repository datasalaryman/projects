# Todo list app

This is a simple todo list project for learning purposes. This will be the first time I built a React app completely from scratch in Vite.

## Installation and Setup

Clone this repo and in the root directory, run the following:

```
bun install
bun dev
```

## Some notes and learnings
- Encountered a Vite error. It reads `css.devSourcemap` as `undefined` during render, but [docs](https://vite.dev/config/shared-options.html#css-devsourcemap) say that it should be of type boolean and `false` by default. [Hardcoding it](https://github.com/datasalaryman/projects/commit/88ae9ae9b14dd58c81833561d03c187621cabf51) did the trick.
- [Setting up TailwindCSS in Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Rendering the complete Vite app in root div element](https://react.dev/reference/react-dom/client/createRoot#rendering-an-app-fully-built-with-react)


