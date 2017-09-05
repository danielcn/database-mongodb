/* FORA do Mongo DB */

/* Iniciando o Mongo no docker*/
docker up 

/* Entrando no banco via docker*/
docker exec -it mongodb mongo admin

/* Criando o banco */
use atm

/* Saindo do Mongo*/
exit

/* Importando dados dentro do Mongo */
mongoimport -d atm -c Arrecadacao --type csv --file importCSVArquivos/Arrecadacao.csv --headerline
mongoimport -d atm -c Municipio --type csv --file importCSVArquivos/Municipio.csv --headerline
//mongoimport -d atm -c Pessoa --type csv --file importCSVArquivos/Pessoa.csv --headerline
mongoimport -d atm -c PessoaJuridica --type csv --file importCSVArquivos/PessoaJuridica.csv --headerline
mongoimport -d atm -c PessoaFisica --type csv --file importCSVArquivos/PessoaFisica.csv --headerline
mongoimport -d atm -c IPTU --type csv --file importCSVArquivos/IPTU.csv --headerline
mongoimport -d atm -c ContribMelhoria --type csv --file importCSVArquivos/ContribMelhoria.csv --headerline
//mongoimport -d atm -c TaxaLimp --type csv --file importCSVArquivos/TaxaLimp.csv --headerline
mongoimport -d atm -c TaxaLic --type csv --file importCSVArquivos/TaxaLic.csv --headerline
mongoimport -d atm -c ITBI --type csv --file importCSVArquivos/ITBI.csv --headerline
mongoimport -d atm -c ISS --type csv --file importCSVArquivos/ISS.csv --headerline
mongoimport -d atm -c Cobranca --type csv --file importCSVArquivos/Cobranca.csv --headerline	
mongoimport -d atm -c PessoaJud --type csv --file importCSVArquivos/PessoaJud.csv --headerline	

/* Entrando no Mongo novamente */
mongo admin

/* Mostra todas as tabelas no banco de dados*/
show collections
show tables
db.getCollectionNames()

/* Removendo base que não faz parte do trabalho*/
db.pessoaJud.drop();


db.Arrecadacao.insert('');
/* Caso fosse utilizar para inserir uma pessoa na hierarquia */
// db.Arrecadacao.Pessoa.insert();

/* Exemplo Arrecadacao */
arrecadacao = 
	{
 	
 	valor: 100.00,
 	statuscobranca: 'avista',
 	tipoTaxa: 'IPTU',	

 	Pessoa:	{
		nome: 'Vaninha Vieira',
		contato: '99999-9999',
		endereco: 'Av. Ademar de Barros n 15 - Ondina',
		tipoPessoa: 'Fisica'
		
		PessoaFisica: {
			CPF: '123.456.789-11',
		}
	},

	Municipio: {
		situacao: 'ATIVO',
		muninomex: 'Salvador' // O nome vem da base principal
	},

	TI_CONBRANCA: {
		quantidadeparcelaspagas: 10,
		quantidadeparcelas: 12,
		forma: 'aprazo'
	},

	ITBI: {
		inscricaoimobiliarea: 2127827894,
		areaTerreno: 65.60,
		areaConstruida: 39.60,
		valorvenal: 1.000.000,
		anoexercicio: '1995'
	},

	ISS: {
		valorretido: 98.55,
		dataEmissao: '10/01/2015'
	},

	ContribMelhoria: {
		inscricaoimobiliaria: '201.25-58',
		dividaAtiva: 35.60,
	}

	IPTU: {
		anoexercicio: '2010',
		juros: '10',
		matricula: '201.25-58',
		dividaAtiva: 10.25,
		TaxaLimp: {
			valor: 65.50,
		}
	},

	TaxaLic: {
		licenciamento: '102.258-88',
		expediente: 6,
		emissaoAlvara: 700.00,
	}

}

/* Inserindo um objeto de arrecadação previamente definido */
db.Arrecadacao.insert(arrecadacao);
arrecadacao = {
 	valor: 100.00,
 	statuscobranca: 'avista',
 	tipoTaxa: 'IPTU',	
}

/* Retornando todas as arrecadações */
db.Arrecadacao.find();

/* Removendo Arrecadação com um valor especificado */
db.Arrecadacao.remove({arrecadacao, {id = '1'});

/* Removendo Arrecadação com um valor especificado */
db.Arrecadacao.remove(
   { TaxaLic: {emissaoAlvara: 700.000} },
   { collation: { locale: "fr", strength: 1 } }
)

/* Somar todos os valores de Arrecadação */


/* Pegar a arrecadação de valor máximo */


/* Pegar a arrecadação de valor minimo */




/* 
	Colocar o healine nas tabelas que não existem 
	Fazer relacionamento através de IDs
	Realizar as consultas
	Raalizar 
*/