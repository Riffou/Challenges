module.exports = {
    run: function (req, res) {
        res.render('challenge.ejs');
    },
    runCheckJS: function (req, res) {
        var article = req.body.article;
        var bool;
        if (article != "") {
            var regex = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
            bool = regex.test(article);
            if (bool) {
                res.render('challengeSuccess.ejs');
            }
            else {
                res.render('challenge.ejs', {article: article});
            }
        }
        else {
            res.render('challenge.ejs', {
                erreur: "Veuillez remplir tous les champs !"
            });
        }
    },
    runTestFaille: function(req, res) {
        res.render('testFaille.ejs');
    },
    checkTestFaille: function(req, res) {
        var article = req.body.article;
        if (article != "") {
            res.render('testFaille.ejs', {article: article});
        }
        else {
            res.render('challenge.ejs', {
                erreur: "Veuillez remplir tous les champs !"
            });
        }
    }
}