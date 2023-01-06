module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/email',
            handler: 'send-email.exampleAction',
            config:{
                auth:false
            }
        }
    ]
}