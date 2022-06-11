//const express=require('express');//Importação do express
//const app=express();//Execução do express
//app.set('view-engine', 'ejs');//configuração do ejs como motor de telas
//app.set('views', './app/views');//alteração do diretório da pasta views


const app=require('./config/server.js');//Importação do modulo
//const rotaHome=require('./app/routes/home.js')(app);
//const rotaAdmin=require('./app/routes/admin.js')(app);
//const rotaNoticias=require('./app/routes/noticias.js')(app);


//Cria um servidor rodando na porta 3000
app.listen('3000', ()=>{
	console.log('Servidor rodando na porta 3000');
});


//rota para a página principal do app
//app.get('/', function(req,res){
	//res.render('home/index.ejs');
//});

//rota para a página de notícia
//app.get('/noticia', function(req,res){
	//const mysql=require('mysql'); //Importação módulo mysql
	//const connection = mysql.createConnection({
		//host: 'localhost',
		//user: 'root',
		//password: 'ifms',
		//database: 'portal_noticias'
	//}); //Conexão com o banco de dados portal_noticias

	//connection.query('select * from noticias', function (error,result){
		//if(error){
			//console.log(error);
		//}
		//res.render('noticias/noticia.ejs',{noticias:result}); //Renderização da tela noticia.ejs juntamente com o envio da variavel result
	//});
//});

//rota para a página do formulário de inclusão de noticia
//app.get('/formularioinclusaonoticia', (req,res)=>{
	//res.render('admin/form_add_noticia.ejs');
//});
