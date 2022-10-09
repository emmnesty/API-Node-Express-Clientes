const dao = require('./conexao_mocados');
const logger = require('./logger/logger');


function getEventos(req, res) {
    logger.info('INICIANDO BUSCA POR TODOS OS EVENTOS')
    try {
        dao.selectAll(res);
        logger.info('CHAMADA DOS EVENTOS EXECUTADA NORMALMENTE')
    } catch (error) {
        logger.error("Erro")
    }
}


function getEventoPorId(req, res) {
    logger.info('INICIANDO BUSCA POR EVENTOS ID')
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