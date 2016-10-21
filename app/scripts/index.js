var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models.js');

var publicPosts = new models.MyPostCollection();

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
