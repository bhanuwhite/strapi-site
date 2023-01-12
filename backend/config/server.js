module.exports = ({ env }) => ({
  host: env('HOST', '206.189.140.51'),
  port: env.int('PORT', 3300),
  // url: 'https://3b9d-157-38-15-216.ngrok.io/',
  url: 'http://206.189.140.51:3300',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
