const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/js/app.js', 'public/js').react()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
       resolve: {
           extensions: ['.js', '.json', '.vue'],
       },
        plugins: [],
   });


// mix.webpackConfig({
//   externals: {
//     jquery: 'jQuery',
//   }
// });
