module.exports.index = (application, req, res) => {
    res.render('index', {validacao: {} });
}

module.exports.autenticar = (application, req, res) => {
    var dadosForm = req.body;

    req.assert('usuario', 'O Usuário deve ser informado').notEmpty();
    req.assert('senha', 'A Senha deve ser informado').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.render('index', {validacao: errors});
        return;
    }
    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm, req, res);
}