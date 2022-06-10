module.exports = {
    isLogged: function(req, res, next) {
        if(req.session.isLogged === true) next();
        else return res.status(400).json({
            msg:"You'll need sign in to continue!",
        });
    },
    
    isNotLogged: function(req, res, next) {
        if(req.session.isLogged === true) return res.status(400).json({
            msg:"You is already logged in!",
        });
        else next();
    }
}