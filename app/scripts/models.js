var Backbone = require('backbone');

var MyPost = Backbone.Model.extend({});

var MyPostCollection = Backbone.Collection.extend({
  model: MyPost,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/posts/'
});

module.exports = {
  MyPost: MyPost,
  MyPostCollection: MyPostCollection
}
