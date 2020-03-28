/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Busca/listar uma informação do Back-end;
 * POST: Cria uma infomação no Back-end;
 * PUT: Alterar uma informação no Back-end;
 * DELETE: Deletar uma informação no Back-end.
 */

 /**
  * Tipos de paramentros:
  * 
  * Query Params: Paramentros nomeados enviados na rota após o "?" e servem para (filtros, paginação);
  * Route params: Parametros utilizados para indenticar recursos especificos dentro do banco;
  * Request Body: Corpo da requisição, utilizado para criar e alterar recursos
  */

  /**
   * SQL: mySQL, SQLite (usado no curso), PostgreSQL, Oracle, Microsoft SQL server:
   * NoSQL: MongoDB, CouchDB, etc.
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

    const express = require('express');
    const cors = require('cors');
    const routes = require('./routes');
    
    
    const app = express();
    
    app.use(express.json());
    app.use(routes);
    app.use(cors());

    app.listen(3333);

