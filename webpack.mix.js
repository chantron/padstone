const { mix } = require('laravel-mix');

mix.sass('resources/scss/styles.scss', 'public/css')
    .js('resources/js/site.js', 'public/js');
