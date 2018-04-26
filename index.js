'use strict';

// Importamos nuestros node-modules
const 
	express 	= require('express'),
	bodyParser 	= require('body-parser'),
	request 	= require('request'),
	appToken	= ''
;

let app = express();
app.use(bodyParser.json());

/**
 * Levanta el servirdor localhost
 *
 * @author   Glendy Covarrubias <glendycovarrubias@hotmail.com>
 * date 2018-04-26
 * @version [1.0]
 * @param   {[type]} 3000        [port]
 * @param   {[type]} 'localhost' [host]
 * @param   {[type]} ()          [description]
 * @return  {[type]}             [description]
 */
app.listen(3000, 'localhost', () => console.log('Servidor corriendoo en http://localhost:3000'));

/**
 * Lo que se mostrar en localhost:3000
 *
 * @author   Glendy Covarrubias <glendycovarrubias@hotmail.com>
 * date 2018-04-26
 * @version [1.0]
 * @param   {[type]} '/'   [description]
 * @param   {[type]} (req, res           [description]
 * @return  {[type]}       [description]
 */
app.get('/', (req, res) => {
	res.send('Bienvenidos');
});


//Generar nuevas rutas

/**
 * Ruta que me ayudara a comunicarme con el chat de la plataforma soldai
 * Validar servidores
 *
 * @author   Glendy Covarrubias <glendycovarrubias@hotmail.com>
 * date 2018-04-26
 * @version [1.0]
 * @param   {[type]} "http:                 if(error [description]
 * @return  {[type]}        [description]
 */
request.get("http://beta.soldai.com//bill-cipher/askquestion?question=llegan%20a%2097000&session_id=1903135173030124&key=e4dcbcaa9dd4c5f63093bb3207050c883bb4d049&log=1", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    // console.dir(JSON.parse(body));
});

//Validar los eventos
request.post("http://beta.soldai.com//bill-cipher/askquestion?question=llegan%20a%2097000&session_id=1903135173030124&key=e4dcbcaa9dd4c5f63093bb3207050c883bb4d049&log=1", (req, res) => {
   // let data = res;
   // let data = req;
   console.log(res);
});

