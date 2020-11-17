'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByCategoryName(ctx) {
    // const categoryName = ctx.params.categoryName;
    const { categoryName } = ctx.params;

    // Maintenat que l'on a le nom de la cat, il faut faire une requête active record pour rechercher les articles ciblés
    const results = await strapi.query('article').find({
      "categories.name_contains": categoryName
    });
    return results;
    }
};
