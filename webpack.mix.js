const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app.scss', 'public/css/bootstrap.css')
    .styles([
        'resources/views/css/form.css',     //---css origem
        'resources/views/css/table.css',    //---css origem
    ], 'public/css/style.css')              //---css destino para atender as páginas html

    .scripts('node_modules/jquery/dist/jquery.js', 'public/js/jquery.js')

    .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/js/bootstrap.js')

    .scripts([
        'resources/views/js/form.js'        //---js origem
    ], 'public/js/script.js')               //---js destino para atender as páginas html

    .version();                             //---Para não ter problemas com cash de css... essa função cria o arquivo mix-manifest.json
