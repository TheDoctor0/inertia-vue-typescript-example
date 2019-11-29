const mix = require('laravel-mix');
const config = require('./webpack.config');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix
  .ts('resources/js/app.ts', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
  ])
  .sourceMaps()
  .tailwind('./tailwind.config.js')
  .webpackConfig(config);

if (process.env.NODE_ENV === 'production') {
  mix.purgeCss();
}

if (process.env.npm_lifecycle_event !== 'hot') {
  mix.version();
}
