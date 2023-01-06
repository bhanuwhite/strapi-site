'use strict';

/**
 * workshop controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::workshop.workshop',
    ({ strapi }) => ({
        async createAction(ctx) {
            const unparsedBody =await ctx.request.body;
            console.log(unparsedBody)
            // some logic here
            // const response = await super.create(ctx);
            // some more logic

            let entity = await strapi.service('api::workshop.workshop').create(unparsedBody)
            console.log('entity',entity)
            return ctx.body = 'ok'

            // response;

        }
    })
);
