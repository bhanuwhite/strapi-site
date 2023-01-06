module.exports = {
  routes: [
    { // Path defined with an URL parameter
      method: 'POST',
      path: '/workshop-details',
      handler: 'workshop.createAction',
      config: {
        auth: false
      }
    },
    //   { // Path defined with a regular expression
    //     method: 'GET',
    //     path: '/restaurants/:category([a-z]+)', // Only match when the URL parameter is composed of lowercase letters
    //     handler: 'restaurant.findByCategory',
    //   }
  ]
}
