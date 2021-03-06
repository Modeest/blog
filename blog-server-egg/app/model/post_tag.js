'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const PostTag = app.model.define('post_tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    post_id: INTEGER,
    tag_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return PostTag;
};
