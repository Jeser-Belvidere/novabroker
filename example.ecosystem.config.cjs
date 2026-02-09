module.exports = {
    apps: [
        {
            name: 'novabroker',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
                HOST: '0.0.0.0',
                MAIL_USER: '',
                MAIL_PASSWORD: '',
                TKS_KEY: ''
            }
        }
    ]
}
