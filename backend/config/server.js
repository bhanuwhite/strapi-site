module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://3b9d-157-38-15-216.ngrok.io/',
  url: 'http://localhost:1337',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
