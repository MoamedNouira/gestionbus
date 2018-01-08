var Agent = require('../models/agent.model.js');

exports.create = function(req, res) {
  
    var agent = new Agent({nom: req.body.nom });

    agent.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Une erreur s'est produite lors de la création du bus."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    Agent.find(function(err, allAgent){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des Bus."});
        } else {
            res.send(allAgent);
        }
    });
};

exports.findOne = function(req, res) {
    Agent.findById(req.params.agentId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de récupérer le bus avec l'ID " + req.params.agentId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    Agent.findById(req.params.agentId, function(err, agent) {
        if(err) {
            res.status(500).send({message: "Impossible de trouver un bus avec l'id " + req.params.agentId});
        }

        agent.nom = req.body.nom;

        agent.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Impossible de mettre à jour le bus avec id " + req.params.agentId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    Agent.remove({_id: req.params.Id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de supprimer le bus avec id " + req.params.id});
        } else {
            res.send({message: "bus supprimé avec succès!"})
        }
    });
};

