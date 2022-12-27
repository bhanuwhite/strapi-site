module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/email',
            handler: 'send-email.exampleAction',
            config:{
                auth:false
            }
        }
    ]
}