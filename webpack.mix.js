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

mix.styles([
                'resources/views/css/form.css',     //---css origem
                'resources/views/css/table.css',    //---css origem
            ], 'public/css/style.css')              //---css destino para atender as páginas html

    .scripts([
                'resources/views/js/form.js'        //---js origem
            ], 'public/js/script.js')                //---js destino para atender as páginas html

    .version();                                     //---Para não ter problemas com cash de css... essa função cria o arquivo mix-manifest.json

            //---Para não ter problemas com cash de css... essa função cria o arquivo mix-manifest.json
