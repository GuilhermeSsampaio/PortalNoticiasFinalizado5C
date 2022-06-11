//Código responsável pelas regras de negócio e pelo controle da rota noticias


module.exports.noticias=(app,req,res)=>{
		const connection=app.config.dbConnection();//recebemos o app por parâmetro, 
		//então podemos recuperar o módulo dentro do app
		const noticiasModel=new app.app.models.NoticiasDAO(connection);
		//app.app significa: o primeiro é a aplicação, o segunda é a pasta app

		//Agora ficou assim: o select (regra) foi para o arquivo de model
			
		//connection.query('select * from noticias where id_noticias=2',(error,result)=>{
			noticiasModel.getNoticias((error,result)=>{
			res.render('noticias/noticias.ejs',{noticias:result}); //Renderização da tela noticia.ejs juntamente com o envio da variavel result
			});
}
	//Rota para a página noticia
module.exports.noticia=(app,req,res)=>{
		const connection=app.config.dbConnection();//recebemos o app por parâmetro, 
		//então podemos recuperar o módulo dentro do app
		const noticiasModel= new app.app.models.NoticiasDAO(connection);
		//connection.query('select * from noticias where id_noticias=2',(error,result)=>{
		if (req.query.id_noticia){
			var id_noticia=req.query//id_noticia recebe o parâmetro enviado pelas views,
			//que contém o id da notícia a ser exibida
		}else{
			res.redirect('/noticias');
			return;
		}
			noticiasModel.getNoticia(id_noticia, (error,result)=>{
			res.render('noticias/noticia.ejs',{noticia:result}); //Renderização da tela noticia.ejs juntamente com o envio da variavel result
			});
}

module.exports.busca=(app,req,res)=>{//faz a busca pela notícia
	const pesquisa=req.body.pesquisa;
	const connection=app.config.dbConnection();
	const noticiasModel=new app.app.models.NoticiasDAO(connection);

	noticiasModel.buscaNoticias(pesquisa, (error,result)=>{
		res.render('noticias/noticias.ejs', {noticias:result});
	});
}

module.exports.excluir=(app,req,res)=>{
	const pesquisa=req.body.pesquisa;
	const connection=app.config.dbConnection();
	const noticiasModel=new app.app.models.NoticiasDAO(connection);

	if (req.query.id_noticia) {
		var id_noticia=req.query;
	}
	else{
		res.redirect('/noticias');
		return;
	}
	noticiasModel.excluiNoticia(id_noticia, (error,result)=>{
		res.redirect('/noticias');
	});
}

module.exports.editar=(app,req,res)=>{
	const pesquisa=req.body.pesquisa;
	const connection=app.config.dbConnection();
	const noticiasModel=new app.app.models.NoticiasDAO(connection);

	if (req.query.id_noticia) {
		var id_noticia=req.query;
	}
	else{
		res.redirect('/noticias');
		return;
	}
	noticiasModel.getNoticia(id_noticia, (error,result)=>{
		res.render('admin/form_update_noticia.ejs', {validacao:{}, noticia : result});
	});
}