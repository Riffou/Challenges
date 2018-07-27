var indexModel = require('../models/indexModel');


var self = module.exports = {
    run: function (req, res) {
        // Check database
        indexModel.getCommentaires(function(data, error) {
           if (error == null) {
               if (data != null) {
                   res.render('challenge.ejs', {commentaires: data});
               }
               else {
                   res.render('challenge.ejs');
               }
           }
           else {
               res.render('error.ejs', {message: error, error: error});
           }
        });
    },
    insertCommentaire: function (req, res) {
        var titre = req.body.titreInput;
        var message = req.body.messageInput;
        if (titre != "" && message != "") {
            indexModel.insertCommentaire(titre, message, function (error) {
                if (error == null) {
                    self.run(req, res);
                }
                else {
                    res.render('error.ejs', {message: error, error: error});
                }
            });
        }
        else {
            res.render('challenge.ejs', {
                erreur: "Veuillez remplir tous les champs !"
            });
        }
    }
}