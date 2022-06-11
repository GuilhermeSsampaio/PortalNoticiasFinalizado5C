const mysql=require('mysql');//Importação do módulo mysql
const connMySQL = ()=>{
	console.log('Conexão com o DB foi estabelecida');
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'portal_noticias'
	});//Cria conexão com o banco de dados poetal_noticias
}
module.exports=()=>{
	console.log('O autoload carregou o módulo de conexão com o DB');
	return connMySQL;
}