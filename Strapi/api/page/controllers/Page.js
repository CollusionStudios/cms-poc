'use strict';

/**
 * Page.js controller
 *
 * @description: A set of functions called "actions" for managing `Page`.
 */

module.exports = {

  /**
   * Retrieve page records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.page.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a page record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.page.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an page record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.page.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an page record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.page.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an page record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.page.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
