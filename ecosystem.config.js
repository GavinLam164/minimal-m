module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.',
    env_prod: {
	NODE_ENV: 'production'
    }
  }]
};
