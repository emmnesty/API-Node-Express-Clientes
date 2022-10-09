var eventos = [
    {id: 1, nome: "Jhonatan", cpf: "123456789"},
    {id: 2, nome: "Cachorro Cururu", cpf: "987654321"},
    {id: 3, nome: "Flauter Chess", cpf: "123459876"}
]

function selectAll(res) {
    console.log("Estou no sellectAll")
    res.json(eventos);
}

function selectWhereId(param, res){
    
    if (param > 0 && eventos.length >= param){
        res.json(eventos[param - 1])
        return true
    } else {
        res.status(400)
        res.json({message: "evento não encontrado"})
        console.error("Bad Request")
        return false
    }
}

function deleteWhereId(param, res){
    if (param > 0 && eventos.length >= param){
        eventos.pop(param - 1)
        res.status(204);
        res.json()
        return true
    } else {
        res.status(400);
        res.json({message: "evento não encontrado"})
        console.error("Bad Request")
        return false
    }
}

function insert(evento, res){
    evento.id = eventos.length + 1
    eventos.push(evento)
    res.status(201)
    res.json({id_gerado: evento.id})
}

function updateWhereId(res, evento, id){
    if (validaID(id)) {
        evento.id = id
        eventos[id - 1] = evento
        res.status(200)
        res.json({message: "atualizado com sucesso"})
        return true
    }
    else {
        res.status(400)
        res.json({message: "evento não encontrado"})
        return false
    }
}

function validaID(id) {
   return eventos[id - 1];
}

module.exports = { selectAll, selectWhereId, deleteWhereId, insert, updateWhereId};