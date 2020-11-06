
exports.up = function(knex) {
  return knex.schema.createTable('', table => {
      table.increments()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('')
};
