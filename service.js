const dao = require('./dados-mocados');


function getEventos(req, res) {
    try {
        dao.selectAll(res);
    } catch (error) {
        console.error('erro')
    }
}

function getEventoPorId(req, res) {
    id = parseInt(req.params.id);
    if (req.params.id) dao.selectWhereId(id, res);
}

function deletePorId(req, res) {
    id = parseInt(req.params.id);
    if (req.params.id) dao.deleteWhereId(id, res);
}

function postEvento(req, res) {
    const evento = req.body;
    dao.insert(evento, res);
}

function update(req, res) {
    id = parseInt(req.params.id);
    if (req.params.id) dao.updateWhereId(res, req.body, id);
}

module.exports = { getEventos, getEventoPorId, deletePorId, postEvento, update }