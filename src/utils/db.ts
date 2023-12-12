import {ConnectOptions, createConnection, Connection } from 'mongoose';


class DBClient {
    connection: Connection;
    DB_HOST = process.env.DB_HOST || 'localhost';
    DB_PORT = process.env.DB_PORT || 27017;
    DB_DATABASE = process.env.DB_DATABASE || 'prop_hub'

    constructor() {
        const url = `mongodb://${this.DB_HOST}:${this.DB_PORT}/${this.DB_DATABASE}`;
        const connectOptions: ConnectOptions = {
            autoIndex: true,
            autoCreate: false
        }
        this.connection = createConnection(url, connectOptions);
    }

    isAlive() {
        return this.connection.readyState === 1
    }
}

const dbClient =new DBClient();

export default dbClient;
