module.exports=(app)=>{
//Rota para a página noticias
	app.get('/noticias',(req,res)=>{
		app.app.controllers.noticias.noticias(app,req,res);
	});

	//Rota para a página noticia
	app.get('/noticia',(req,res)=>{
		app.app.controllers.noticias.noticia(app,req,res);
	});

	app.get('/excluir',(req,res)=>{
		app.app.controllers.noticias.excluir(app,req,res);
	});

	app.get('/editar',(req,res)=>{
		app.app.controllers.noticias.editar(app,req,res);
	});

	app.post('/busca', (req,res)=>{
		app.app.controllers.noticias.busca(app,req,res);
	});
}