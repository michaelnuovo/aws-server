module.exports = {
  apps: [{
    name: 'aws-server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-35-166-124-211.us-west-2.compute.amazonaws.com',
      key: './.ssh/aws-test-server.pem',
      ref: 'origin/master',
      repo: 'https://github.com/michaelnuovo/aws-server.git',
      path: '/home/ec2-user/test',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}





