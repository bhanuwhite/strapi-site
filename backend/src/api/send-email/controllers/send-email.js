'use strict';

/**
 * send-email controller
 */

const nodemailer = require('nodemailer');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-email.send-email',
    ({ strapi }) => ({
        async exampleAction(ctx) {

            const unparsedBody = await ctx.request.body;

            const msg = {
                to: `${unparsedBody.to}`, // Change to your recipient
                from: 'manglamsurelia1234@gmail.com', // Change to your verified sender
                subject: 'Please Contact Me',
                text: `${unparsedBody.body}`,
            }
            let nodeM = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'manglamsurelia1234@gmail.com',
                    pass: ''
                },
                port: 465,
                host: 'smtp.gmail.com'
            })

            let main = await nodeM.sendMail(msg);
            console.log(main);
            ctx.body = 'Email Sucessfully Send'

        }
    })
);

