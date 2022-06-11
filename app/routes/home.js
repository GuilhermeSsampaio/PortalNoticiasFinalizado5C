module.exports=(app)=>{
//Rota para a página principal do app
	app.get('/',(req,res)=>{
		app.app.controllers.home.index(app,req,res);
	});
}