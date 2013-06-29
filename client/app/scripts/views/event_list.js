window.Boom = window.Boom || {}

window.Boom.EventListView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    var self = this;
    this.$el.empty();
    this.collection.each(function(event) {
      var li = $('<li></li>').append(
        new Boom.EventShortView({model: event}).render().el
      );
      self.$el.append(li);
    });
    return this;
  }
});
