var db = require("../models/base").db;

module.exports = {
    userExists: function (identifiant, callback) {
        db.one('SELECT COUNT(identifiant) FROM Administrateurs WHERE identifiant = $1', [identifiant])
            .then(function (data) {
                if (data.count == 1) {
                    callback(true, null);
                }
                else {
                    callback(false, null);
                }
            })
            .catch(function (error) {
                callback(null, error)
            })
    },
    isPasswordCorrect: function (identifiant, password, callback) {
        var test = "SELECT COUNT(identifiant) FROM Administrateurs WHERE identifiant = '" + identifiant + "' AND mdp = '" + password + "'";
        console.log(test);
        db.one(test)
            .then(function (data) {
                if (data.count == 1) {
                    callback(true, null);
                }
                else {
                    callback(false, null);
                }
            })
            .catch(function (error) {
                callback(null, error);
            })
    }
}