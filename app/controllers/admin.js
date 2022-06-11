//Esse código é responsável pelas regras de negócio da rota admin, ou seja, é o controle dessa rota

module.exports.formularioinclusaonoticia=(app,req,res)=>{
	res.render('admin/form_add_noticia.ejs', {validacao:{}, noticia:{}});
}
module.exports.noticias_salvar=(app,req,res)=>{
		const noticia=req.body;

		req.assert('titulo', 'Título é obrigatório').notEmpty();//o primeiro parametro é o name e o segundo é a mensagem que será retornada caso o titulo seja vazio
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();//not empty verifica se o campo está vazio
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);//verifica se o tamanho está adequado
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório').notEmpty();
		req.assert('noticia', 'Notícia é obrigatório').notEmpty();
		 //as funcoes passadas estão sendo executadas

		     //capturação de erros
		const erros=req.validationErrors();
		if (erros){
			console.log(erros);//Vai mostrar a lista de erros no console
			res.render('admin/form_add_noticia.ejs', {validacao: erros, noticia: noticia});//Faz voltar à página de Inclusão de notícia
			return;//O return faz com que não continue o processo seguinte
		}

		const connection=app.config.dbConnection();
		const noticiasModel=new app.app.models.NoticiasDAO(connection);
		noticiasModel.salvarNoticia(noticia, (error,result)=>{
			res.redirect('/noticias');
		});
}

module.exports.noticias_atualizar=(app,req,res)=>{
		const noticia=req.body;
		const id_noticia=req.body.id_noticia;

		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório').notEmpty();
		req.assert('noticia', 'Notícia é obrigatório').notEmpty();

		const erros=req.validationErrors();
		if (erros){
			console.log(erros);//Vai mostrar a lista de erros no console
			res.render('admin/form_update_noticia.ejs', {validacao: erros, noticia: noticia});//Faz voltar à página de Inclusão de notícia
			return;//O return faz com que não continue o processo seguinte
		}

		const connection=app.config.dbConnection();
		const noticiasModel=new app.app.models.NoticiasDAO(connection);
		noticiasModel.atualizarNoticia(noticia, noticiasModel.mostraNoticia(id_noticia, (error,result)=>{
			res.redirect('/noticia?id_noticia=' + id_noticia);
		}));
}