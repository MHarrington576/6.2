var $ = require('jquery');
var Backbone = require('backbone');

var MyPost = Backbone.Model.extend({
  alpha: function(){
    console.log('Lorem ipsum dolor sit amet.');
  }
});

var MyPostCollection = Backbone.Collection.extend({
  model: MyPost,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts/',
  parse: function(data){
    return data;
  }
});

var button = document.getElementById('the-button');
var publicPosts = new MyPostCollection();

$(button.on('click', function(e){
  e.preventDefault();

  button.disabled = true;

  publicPosts.fetch().then(function(){

    // publicPosts.forEach(
    // document.createElement('<li>')
    // );

    console.log(publicPosts);
    button.disabled = false;
  });
}));



//$("#the-button")[0].disabled = false;
//$("#the-button")[0].disabled = true;
