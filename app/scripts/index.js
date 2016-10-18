var $ = require('jquery');
var Backbone = require('backbone');

var MyModel = Backbone.Model.extend({
  alpha: function(){
    console.log('Lorem ipsum dolor sit amet.');
  }
});

var MyModelCollection= Backbone.Collection.extend({
  model: MyModel,
  url: 'https://undefined.url'
});

var coolModels = new MyModelCollection();

//coolModels.fetch().then(function(){});

$("#the-button")[0];
$("#the-button")[0].disabled = false;
//$("#the-button")[0].disabled = true;
