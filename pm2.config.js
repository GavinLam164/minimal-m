module.exports = {
    apps: [
      {
        name: 'minimal-m',
        script: 'server/index.js',
        watch: false,
        env_dev: {
          RUNTIME_ENV: 'dev',
          NODE_ENV: 'development'
        },
        env_prod: {
          RUNTIME_ENV: 'prod',
          OPEN_CDN: 'false',
          NODE_ENV: 'production'
        }
      }
    ]
  }