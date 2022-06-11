//models --> banco de dados
//this --> criando uma classe com objetos, this se refere a objetos de uma classe, é uma função com várias outras funções
// chamadas métodos
//prototype insere métodos na classe
//CONVENÇÃO --> nome do arquivo tem o mesmo nome da classe
// DAO --> ARQUITETURA DE DESENVOLVIMENTO DE SISTEMAS WEB PARA MANIPULAÇÃO DE BANCO DE DADOS
//DAO DATA ACCES OBJECT
//DAO serve para -->Não sobrescrever variáveis e controlar nossos módulos através de uma instância
//instância --> objetos de uma classe


function NoticiasDAO(connection){
	this._connection=connection; //o _connection é como se fosse a criação de uma atributo que depois é atribuído aos métodos get
}
	NoticiasDAO.prototype.getNoticias = function(callback){
		this._connection.query('select * from noticias ORDER BY data_criacao DESC', callback);
	}

	NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
		this._connection.query('select * from noticias where id_noticia=' + id_noticia.id_noticia, callback);
	}
	
	//callback é a função que tem o error e o result, é uma função de callback

	NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
		this._connection.query('insert into noticias set ?', noticia, callback);
	}
		//salvando a noticia, o insert recebe dois parametros, o insert seria o primeiro, e a interrogação é o que permite que os campos da tabela do banco sejam preenchidos


	NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
		this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
	}

	NoticiasDAO.prototype.buscaNoticias = function(pesquisa, callback){
		this._connection.query('select * from noticias where titulo like ?', '%' + pesquisa + '%', callback);
	}

	NoticiasDAO.prototype.excluiNoticia = function(id_noticia, callback){
		this._connection.query('delete from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
	}

	NoticiasDAO.prototype.atualizarNoticia = function(noticia, callback){
		this._connection.query("update noticias set titulo ='" + noticia.titulo + "', resumo = '" + noticia.resumo + "', autor = '" + noticia.autor + "', noticia = '" + noticia.noticia + "' where id_noticia = " + noticia.id_noticia, callback);
	}

	NoticiasDAO.prototype.mostraNoticia = function(id_noticia, callback){
		this._connection.query('select * from noticias where id_noticia = ' + id_noticia, callback);
	}

module.exports=()=>{
	return NoticiasDAO;
}