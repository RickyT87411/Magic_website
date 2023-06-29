const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        books: resolve(__dirname, "/modules.html"),
        bookmarks: resolve(__dirname, "/modules.html"),
        users: resolve(__dirname, "/modules.html"),
      },
    },
  },
});
