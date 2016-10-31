var config = {
    local: {
        mode: 'local',
        port: 8002,
        mongoUrl: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mybnb_local'
    },
    staging: {
        mode: 'staging',
        port: '8002',
        mongoUrl: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mybnb_staging'
    },
    prd: {
        mode: 'prd',
        port: process.env.PORT || 8002,
        mongoUrl: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mybnb_prd'
    }
};

module.exports = function (mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
};