var mongoose = require('mongoose');

var AgentSchema = mongoose.Schema({
    nom: String
});

module.exports = mongoose.model('Agent', AgentSchema);