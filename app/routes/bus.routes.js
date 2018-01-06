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

        

        ///////////////////////////////--- Lignes---////////////////////////////////////////


        var Ligne = require('../controllers/ligne.controller.js');
       
        
            app.post('/Ligne', Ligne.create);
            app.get('/Lignes', Ligne.findAll);
            app.get('/Ligne/:LigneId', Ligne.findOne);
           app.delete('/Ligne/:LigneId', Ligne.delete);
          // app.post('/LigneStation/:LigneId/:StationId', Ligne.affecter);



///////////////////////////////--- Users---////////////////////////////////////////


var User = require('../controllers/User.controller.js');

            app.post('/User', User.create);
            app.get('/Users', User.findAll);
            app.get('/User/:UserId', User.findOne);
            app.delete('/User/:UserId', User.delete);

          
       
       };
         
       
        
           


