const db = require('./conexao_bd')

function selectAll(res) {
    const query = 'SELECT * FROM evento';
    db.connection(query, res);
}

function selectWhereId(param, res){
    const query = `SELECT * FROM evento WHERE ID=${param}`;
    db.connection(query, res);
}

function deleteWhereId(param, res){
    const query = `DELETE FROM evento WHERE ID=${param}`;
    db.connection(query, res);
}

function insert(evento, res){
    const query = `INSERT INTO evento(nome, descricao) VALUES('${evento.nome}','${evento.cpf}')`;
    db.connection(query, res);
}

function updateWhereId(evento, res){
    const query = `UPDATE evento SET nome='${evento.nome}', descricao='${evento.cpf}' WHERE ID=${evento.id}`
    db.connection(query, res);
}

module.exports = { selectAll, selectWhereId, deleteWhereId, insert, updateWhereId};
//comment