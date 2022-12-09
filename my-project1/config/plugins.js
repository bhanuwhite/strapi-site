module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'manglamsurelia1234@gmail.com',
        defaultReplyTo: 'manglamsurelia1234@gmail.com',
      },
    },
  },
  // ...
   // ...
   upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('SCALEWAY_ACCESS_KEY_ID'),
        secretAccessKey: env('SCALEWAY_ACCESS_SECRET'),
        endpoint: env('SCALEWAY_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
        params: {
          Bucket: env('SCALEWAY_BUCKET'),
        },
      },
    },
  },
});