module.exports = ({ env }) => ({
  defaultConnection: 'monPostgres',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },

    monPostgres: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: "${process.env.DB_HOST}",
        port: 5432,
        username: "${process.env.USERNAME}",
        password: "${process.env.PASSWORD}",
        database: "${process.env.DB_NAME}",
        schema= "public"
      },
      options: {}
    }
  },
});
