module.exports = function(app) {


///////////////////////////////--- Bus ---////////////////////////////////////////
var Bus = require('../controllers/bus.controller.js');

    app.post('/Bus', Bus.create);

    app.get('/allBus', Bus.findAll);

    app.get('/Bus/:busId', Bus.findOne);

    app.put('/Bus/:busId', Bus.update);

    app.delete('/Bus/:busId', Bus.delete);

    

///////////////////////////////--- Station ---////////////////////////////////////////

    var Station = require('../controllers/station.controller.js');
    
        app.post('/Station', Station.create);
    
        app.get('/Stations', Station.findAll);
    
        app.get('/Station/:StationId', Station.findOne);
    
        app.put('/Station/:StationId', Station.update);
    
        app.delete('/Station/:StationId', Station.delete);


}