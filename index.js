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
    fs          = require('fs'),
    index       = fs.createReadStream('./principal.html')
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
 * Lo que se mostrar en localhost:8080
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
app
    .get('/', (req, res) => {           
        res.writeHead(200, {'Content-Type' : 'text/html'});
        index.pipe(res);
    })
    .listen(process.env.PORT || '8080', () => console.log('Servidor corriendoo en http://localhost:8080'));