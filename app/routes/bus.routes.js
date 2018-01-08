module.exports = function(app) {
    
    
    ///////////////////////////////--- Bus ---////////////////////////////////////////
    var Bus = require('../controllers/bus.controller.js');
    
        app.post('/Bus', Bus.create);
    
        app.get('/allBus', Bus.findAll);
    
        app.get('/Bus/:busId', Bus.findOne);
    
        app.put('/Bus/:busId', Bus.update);
    
        app.delete('/Bus/:busId', Bus.delete);
        
        app.put('/BusSetLigne/:busId', Bus.setLigne);
        
    
        
    
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

              

    ///////////////////////////////--- responsables ---////////////////////////////////////////

    var Responsable = require('../controllers/responsable.controller.js');
    
        app.post('/Responsable', Responsable.create);
    
        app.get('/Responsables', Responsable.findAll);
    
        app.get('/Responsable/:responsableId', Responsable.findOne);
    
        app.put('/Responsable/:responsableId', Responsable.update);
    
        app.delete('/Responsable/:responsableId', Responsable.delete);

        app.put('/ResponsableSetSecteur/:responsableId', Responsable.setSecteur);
        
         ///////////////////////////////--- agent ---////////////////////////////////////////

    var Agent = require('../controllers/agent.controller.js');
    
        app.post('/Agent', Agent.create);
    
        app.get('/Agents', Agent.findAll);
    
        app.get('/Agent/:agentId', Agent.findOne);
    
        app.put('/Agent/:agentId', Agent.update);
    
        app.delete('/Agent/:agentId', Agent.delete);

        ///////////////////////////////--- user ---////////////////////////////////////////
        
        var passport = require('passport');  
        
        var User = require('../controllers/user.controller.js');
        
            app.post('/User/register', User.register);
        
            app.post('/User/authenticate', User.authenticate);

            app.get('/User/getId', passport.authenticate('jwt', { session: false }), function(req, res) {  
                res.send('It worked! User id is: ' + req.user._id + '.');
              });
              


                  ///////////////////////////////--- Secteur ---////////////////////////////////////////
    
        var Secteur = require('../controllers/secteur.controller.js');
        
            app.post('/Secteur', Secteur.create);
        
            app.get('/Secteurs', Secteur.findAll);
        
            app.get('/Secteur/:SecteurId', Secteur.findOne);
        
            app.put('/Secteur/:SecteurId', Secteur.update);
        
            app.delete('/Secteur/:SecteurId', Secteur.delete);


            app.put('/SecteurSetLigne/:secteurId', Secteur.setLigne);



            

    


}