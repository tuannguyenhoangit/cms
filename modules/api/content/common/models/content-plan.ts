'use strict'

const faker = require('faker/locale/en')

module.exports = function(ContentPlan) {
  ContentPlan._templates = () => ({
    basic: domainId => ({
      domainId,
      userCreated: faker.random.arrayElement([1, 2, 3, 4, 5]),
      name: faker.lorem.sentence(),
      detail: faker.lorem.paragraphs(5),
    }),
  })
}
