var indexModel = require('../models/indexModel');
var crypto = require('crypto');

function sha256(password, salt){
    var hash = crypto.createHmac('sha256', salt); /** Hashing algorithm sha256 */
    hash.update(password);
    var value = hash.digest('hex');
    return value;
}

function saltHashPassword(userpassword) {
    var salt = 'saltest';
    var passwordHash = sha256(userpassword, salt);
    return passwordHash;
}


module.exports = {
    run: function (req, res) {
        res.render('challenge1.ejs');
    },
    runConnexion: function (req, res) {
        var identifiant = req.body.identifiantInput;
        var password = req.body.passwordInput;
        if (identifiant != "" && password != "") {
            indexModel.userExists(identifiant, function (existsBoolean, error) {
                if (error == null) {
                    if (existsBoolean) {
                        indexModel.isPasswordCorrect(identifiant, password, function (passwordBoolean, error) {
                            if (error == null) {
                                if (passwordBoolean) {
                                    res.render('challengeSuccess1.ejs');
                                }
                                else {
                                    res.render('challenge1.ejs', {
                                        erreur: "Le mot de passe est incorrect."
                                    });
                                }
                            }
                            else {
                                res.render('error.ejs', {message: error, error: error});
                            }
                        });
                    }
                    else {
                        res.render('challenge1.ejs', {
                            erreur: "L'identifiant est incorrect."
                        });
                    }
                }
                else {
                    res.render('error.ejs', {message: error, error: error});
                }
            });
        }
        else {
            res.render('challenge1.ejs', {
                erreur: "Veuillez remplir tous les champs !"
            });
        }
    }
}