window.Boom = window.Boom || {}

window.Boom.EventModel = Backbone.Model.extend({});

window.Boom.EventCollection = Backbone.Collection.extend({
  comparator: function(event) {
    return event.get('date');
  }
});
