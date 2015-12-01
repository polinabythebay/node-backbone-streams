var Messages = Backbone.Collection.extend({
  model: Message,
  url: 'http://127.0.0.1:8080/streams/newStream/',

  loadMsgs: function(){
    //our server currently can't handle this option
    //this.fetch({data: { order: '-createdAt' }});
    this.fetch();
  },

  parse: function(response, options){
    var results = [];
    for( var i = response.results.length-1; i >= 0; i-- ){
      results.push(response.results[i]);
    }
    return results;
  }
});