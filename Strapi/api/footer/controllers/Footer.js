'use strict';

/**
 * Footer.js controller
 *
 * @description: A set of functions called "actions" for managing `Footer`.
 */

module.exports = {

  /**
   * Retrieve footer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.footer.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a footer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.footer.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an footer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.footer.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an footer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.footer.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an footer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.footer.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
