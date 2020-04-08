const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());//serve para que possamos passar requisições atraves do body
app.use(routes);
app.use(errors());


module.exports = app;




/**
 * Rota: é todo o caminho da requisição, ex: http://localhost:3333/users
 * Recurso: è algum tipo de entidade do banco, algo que a gente quer buscar. ex: /users
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscas uma informação do back-end;
  * POST: Criar uma informação no back-end;
  * PUT: Alterar uma informação no back-end;
  * DELETE: Deletar uma informação no back-end.
  * 
  * Sempre que faço uma requisição no navegador, essa requisição é feita pelo metodo 'get', por
  * isso é usado o Insomnia para vizualizar e testar os outros metodos.
  */

/**
    * Tipos de paramentros:
    * 
    * Query Params: Paramentros nomeados enviados na rota após o "?" e servem para (filtros, paginação);
    * Route params: Parametros utilizados para indenticar recursos especificos dentro do banco;
    * Request Body: Corpo da requisição, utilizado para criar e alterar recursos
    */

    /**
     * Tipos de Banco:
     * 
    * SQL: mySQL, SQLite (usado no curso), PostgreSQL, Oracle, Microsoft SQL server
    * SQL(Bancos relacionais)
    * NoSQL: MongoDB, CouchDB, etc.(Bancos não relacionais)
    */

    /**
    * Driver: Select * from users;
    * Query Builder: table('users').select('*').where()
    */

    /**
    * Trabalhando com o terminal:
    * npm: Instala um pacote;
    * npx: Executa um pacote(programa/ferramenta).
*/

/**
 * Passos antes do desenvolvimento:
 * 
 * Instalar o nodemon via terminal com o comando: npm install nodemon -D
 * (O nodemon serve para rodar o servidor sem precisar ficar estartando-o sempre que salva
 * um trecho de codigo), para o nodemon funcionar precisa editar o arquivo package-json 
 * trocando onde tem 'teste' por "start": "nodemon index.js", após esses passos para iniciar 
 * o servidor é só rodar no terminal o comando: npm start.
 * 
 * ************* Configurando o Banco de Dados *****************
 * 
 * Para instalar o Query-builder usado pela aplicação rode o comando: npm install knex ;
 * Para instalar o drive do banco de dados rode o comando: npm install sqlite3 ;
 * Para criar o arquivo de configuração do banco use o comando: npx knex init ;
 * Edite o arquivo knexfile.js no modulo de desenvolvedor o 'filename', tire o que tem lá apos 
 * os dois pontos e coloque o caminho da pasta onde esta seu banco de dados ;
 * Ainda no arquivo 'knexfile.js' utilize o codigo:
 *  migrations: {
      directory: './src/database/migrations'
    }
    para colocar o endereço de onde sera criadas suas migrations (Os aquivo 'migrations' serao
    responsavéis por crias as tabelas no banco de dados);
    Para criar a primeira tabela no banco utilize o comando: npx knex migrate:make create_ongs ;
    Após criando os campo da tabela no arquivo migrations create_ongs, execute o comando a seguir
    para criar as tabelas: npx knex migrate:latest ;
 */

