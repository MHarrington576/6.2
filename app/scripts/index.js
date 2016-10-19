var $ = require('jquery');
var Backbone = require('backbone');

var MyPost = Backbone.Model.extend({});

var MyPostCollection = Backbone.Collection.extend({
  model: MyPost,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts/'
});

var publicPosts = new MyPostCollection();


$('#the-button').on('click', function(e){
  e.preventDefault();

  $(this).prop("disabled", true);
  $('#the-button').html('Loading...');

  publicPosts.fetch().then(function(){
    $('#the-button').html('Submit');

    publicPosts.each(function(post){
      $('ul.dump-data-here').append('<li>' + post.get('title') + '</li>');
    });

  $('#the-button').prop("disabled", false);
  });
});
