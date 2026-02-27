'use strict';

/**
 * buy-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buy-service.buy-service');
