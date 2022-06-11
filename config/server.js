const express=require('express');//Importação do express
const consign=require('consign');
const bodyParser=require('body-parser');
const expressValidator=require('express-validator');//Importação do módulo expressValidator
const app=express();//Execução do express
app.set('view-engine', 'ejs');//Configuração do ejs como motor de telas
app.set('views', './app/views');//Alteração do diretório da pasta views

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
//Aqui parametrizamos com o bodyParser vai tratar os formulários
//O parametro extend:true vai permitir que seja implementado através de JSON
//as url codificadas

app.use(expressValidator());
//Aqui colocamos em execução o expressValidator;

consign()
	.include('app/routes')
	.then('config/dbConnection.js')//incluindo a conexão com o banco no consign
	.then('app/models')//inclui o diretório models
	.then('app/controllers')//inclui o diretório de controllers
	.into(app);
//O consign reconhece todos os arquivos da pasta routes (faz um scan), 
//pega esses módulos e inclui dentro do servidor - app

module.exports=app;//o módulo vai retornar a variável app