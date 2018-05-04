'use strict';

/**
 * Instancio los node_modules
 */
const 
    Pokedex     = require('pokedex-promise-v2'), // 'pokedex-promise-v2'
    P           = new Pokedex(),
    interval    = { limit: 9 },
    express     = require('express'), // express
    app         = express(),
    path        = require('path')
;

/* Consultado API de pokemon 
   Verificaba los 10 primeros [bulbasaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, ivysaur] 
*/
// P
//     .getPokemonsList(interval)
//     .then((response)=> {
//         console.log(response);
//     });

/**
 * Lo que se mostrar en Servidor corriendo en el puerto
 *
 * @author   Glendy Covarrubias <glendycovarrubias@hotmail.com>
 * date 2018-04-27
 * @version [1.0]
 * @param   {[type]} '/'   [description]
 * @param   {[type]} (req, res           [description]
 * @return  {[type]}       [description]
 * text/html
 * application/json
 */
app.get('/', (req, res) => {           
    //Google cloud llamando mi ruta html 
    res.sendFile('principal.html', { root: path.join(__dirname, './files')});
});

const server = app.listen(process.env.PORT || '8080', () => {
    const port = server.address().port;
    console.log(`Servidor corriendo en el puerto: ${port}`);
});