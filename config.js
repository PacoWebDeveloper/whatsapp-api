const configs = {
    api: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost',
        nodeEnv: process.env.NODE_ENV || 'development'
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'PacoRo0t',
            database: 'whatsapp',
            define: {
                timestamps: true,
                underscoreAll: true
            }
        },
        production: {

        },
        testing: {

        }
    }
}

module.exports = configs