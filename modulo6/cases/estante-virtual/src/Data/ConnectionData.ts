import knex from "knex";
import dotenv from "dotenv";
import { Knex} from "knex"

dotenv.config();

export class ConnectionData  {

  
  private static connection: Knex | null = null;
    protected getConnection(): Knex {
      if (!ConnectionData.connection) {
        ConnectionData.connection = knex({
          client: 'mysql',
          connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
          },
        });
      }
      return ConnectionData.connection;
}
}
