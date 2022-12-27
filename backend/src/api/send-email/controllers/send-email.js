'use strict';

/**
 * send-email controller
 */

const nodemailer = require('nodemailer');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-email.send-email',
    ({ strapi }) => ({
        async exampleAction(ctx) {

            const msg = {
                to: 'manglamsurelia1234@gmail.com', // Change to your recipient
                from: 'manglamsurelia1234@gmail.com', // Change to your verified sender
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
            }
            let nodeM = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'manglamsurelia1234@gmail.com',
                    pass: 'zkjfigapmokdxtae'
                },
                port: 465,
                host: 'smtp.gmail.com'
            })

            let main = await nodeM.sendMail(msg);
            console.log(main);
            ctx.body = 'ok'

        }
    })
);

