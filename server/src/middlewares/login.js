module.exports = {
    isLogged: function(req, res, next) {
        if(req.session.isLogged === true) next();
        else return res.status(400).json({
            errors: "You'll need sign in to continue!",
        });
    },
    
    isNotLogged: function(req, res, next) {
        if(req.session.isLogged === true) return res.status(400).json({
            errors: "You is already logged in!",
        });
        else next();
    }
}