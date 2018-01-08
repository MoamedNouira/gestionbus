var mongoose = require('mongoose'),Schema = mongoose.Schema;

var BusSchema = mongoose.Schema({
    titre: String,
    numligne : Number,
    position: {
        longitude:Number,
        latitude:Number
    },
    ligne: [{ type: Schema.Types.ObjectId, ref: 'ligne' }]
    
});

module.exports = mongoose.model('Bus', BusSchema);