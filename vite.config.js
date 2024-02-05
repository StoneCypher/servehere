/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({

  test : {

    globals  : true,
    include  : ["./src/js/**/*.spec.js"],

    coverage : {
      exclude : ["./node_modules/**/*"]
    }

  }

});
