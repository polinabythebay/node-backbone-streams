var MessageView = Backbone.View.extend({

  template: _.template('<div class="username"><%- username %></div> \
                       <div class="text"><%- text %></div> \
                       </div>'),

  attributes: {
    class:  "chat"
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});