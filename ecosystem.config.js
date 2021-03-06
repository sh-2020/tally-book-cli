module.exports = {
  apps: [
    {
      name: 'tally-book',
      script: 'tally-book-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '124.71.87.117',
      ref: 'origin/main',
      repo: 'git@github.com:sh-2020/tally-book-cli.git',
      path: '~/workspace/tally-book',
      'post-deploy': 'git reset --hard && git checkout main && git pull && npm i --production=false && npm run build && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}