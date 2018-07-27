var db = require("../models/base").db;

module.exports = {
    getCommentaires: function (callback) {
        db.any('SELECT titre, message FROM public.commentaires')
            .then(function (data) {
                if (data) {
                    callback(data, null);
                }
            })
            .catch(function (error) {
                callback(null, error);
            })
    },
    insertCommentaire: function(titre, message, callback) {
        db.none('INSERT INTO Commentaires (titre, message) VALUES ($1, $2)', [titre, message])
            .then(function () {
                    callback(null);
                }
            )
            .catch(function(error) {
                callback(error);
            })
    }
}