// David Alexis Lozano Clavijo
// 20221578010

const express = require('express')
const app = express()
require('dotenv').config();
const fs = require('fs')
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173'
}
const data = require('./data/data.json');
const urlData = './data/data.json';

app.use(cors(corsOptions));
app.use(express.json());

/**
 * Envia un codigo de estatus HTTP exitoso y envia los datos del archivo JSON
 *
 * @param {Object} req - El objeto request que contiene parametros e información requerida.
 * @param {Object} res - El objeto request que es usado para enviar devuelta la respuesta HTTP.
 * @returns {void} Esta función no retorna ningún valor, pero envia un codigo de estatus HTTP.
 */

app.get('/api', function (req, res) {
    res.status(200).json(data);
});

/**
 * Obtiene un item especifico basado en el ID proporcionado.
 * Si encontro el ID requerido envia un codigo de estatus HTTP exitoso y el dato buscado.
 * Si no, envia un codigo de estatus HTTP de error
 *
 * @param {Object} req - El objeto request que contiene parametros e información requerida.
 * @param {Object} res - El objeto request que es usado para enviar devuelta la respuesta HTTP.
 * @returns {void} Esta función no retorna ningún valor, pero envia un codigo de estatus HTTP.
 */

app.get('/api/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

/**
 * Añade un nuevo item al array data y lo almacena en el archivo JSON.
 * Responde con el nuevo item creado y un codigo de estatus indicando exito.
 *
 * @param {Object} req - El objeto request que contiene parametros e información requerida.
 * @param {Object} res - El objeto request que es usado para enviar devuelta la respuesta HTTP.
 * @returns {void} Esta función no retorna ningún valor, pero envia un codigo de estatus HTTP.
 */

app.post('/api', function (req, res) {
    let itemIds = data.map(item => item.id);
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    console.log(req.body);

    let newItem = {
        id: newId,
        nombre: req.body.nombre,
        valor: req.body.valor,
        enStock: false,
        createdOn: new Date()
    }

    data.push(newItem);
    storageData(urlData, data);
    res.status(201).json(newItem);
});


/**
 * Actualiza un item existente en el array data basado en el ID proporcionado.
 * Si el item es encontrado, el valor es actualizado con los nuevos datos del body request.
 * La información actualizada es luego almacenada en el archivo JSON.
 * Responde con el codigo de estatus HTTP apropiado indicando el resultado de la operación.
 *
 * @param {Object} req - El objeto request que contiene parametros e información requerida.
 * @param {Object} res - El objeto request que es usado para enviar devuelta la respuesta HTTP.
 * @returns {void} Esta función no retorna ningún valor, pero envia un codigo de estatus HTTP.
 */
app.put('/api/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let updated = {
            id: found.id,
            nombre: req.body.nombre || found.nombre,
            valor: req.body.valor || found.valor,
            enStock: req.body.enStock || found.enStock
        };

        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1, updated);

        storageData(urlData, data);

        console.log("Updated")
        res.status(204).json(updated);
    } else {
        res.sendStatus(500);
    }
});


/**
 * Elimina un item de mi data array basado en el id proporcionado en el parametro request.
 * Si el item es encontrado, este es removido del array y los datos actualizados son almacenados.
 * Responde con el codigo de status correspondiente indicando el resultado de la operación.
 *
 * @param {Object} req - El objeto request que contiene parametros e información requerida.
 * @param {Object} res - El objeto request que es usado para enviar devuelta la respuesta HTTP.
 * @returns {void} Esta función no retorna ningún valor, pero envia un codigo de estatus HTTP.
 */

app.delete('/api/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1);
    }

    storageData(urlData, data);

    res.status(204).json(found);
});


/**
 * Escribe el dato proporcionado en un archivo JSON especifico
 *
 * @param {string} url - La dirección donde el archivo JSON debe ser almacenado
 * @param {Object} newData - Los datos que serán escritos en el archivo, que será formateado a JSON
 * @returns {void} Esta funcion no retorna ningún valor
 */

async function storageData(url, newData) {
    fs.writeFileSync(url, JSON.stringify(newData, null, 2), (err) => {
        if (err) throw err;
        console.log('Archivo modificado');
    })
}


/**
 * Runea el servidor de Express y escucha al port especifico
 * Registra el estatus del servidor activo y la URL en la consola
 *
 * @param {number} process.env.PORT - El número del puerto que será escuchado por el servidor
 * @returns {void} No retorna ningún valor
 */

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
});
