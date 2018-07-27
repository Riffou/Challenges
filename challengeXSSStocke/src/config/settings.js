var configdb = {
    local: {
        host: 'localhost',
        port: 5432,
        database: 'ensimag',
        user: 'ensimag',
        password: 'ensimagdb'
    },
    localDocker: {
        host: process.env.NOM_CONTENEUR_BDD,
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres'
    },
    preprod: {
        host: process.env.NOM_CONTENEUR_BDD,
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres'
    }
};

module.exports = {
    configdb: function(mode) {
        return configdb[mode || process.argv[2] || 'local'] || configdb.local;
    }
}

