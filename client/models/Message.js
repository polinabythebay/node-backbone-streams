var Message = Backbone.Model.extend({
  url: 'http://127.0.0.1:8080/streams/newStream/',
  defaults: {
    username: '',
    text: ''
  }
});