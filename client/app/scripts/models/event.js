window.Boom = window.Boom || {}

window.Boom.EventModel = Backbone.Model.extend({});

window.Boom.EventCollection = Backbone.Collection.extend({
  comparator: function(event) {
    return event.get('date');
  },
  sortAndFilter: function(when, category, neighborhood) {
    var filtered,
        self = this;
    this.data = this.data || this.toJSON();

    when = when && parseInt(when, 10);

    filtered = _.filter(this.data, function(event) {
      var result = true;
      if (typeof when === 'number') {
        result = self.isInTheNextXDays(when, event) && result;
      }
      if (result && category) {
        result = _.indexOf(event.tags, category) > -1 && result;
      }
      if (result && neighborhood) {
        result = event.neighborhood == neighborhood && result;
      }
      return result;
    });

    this.reset(filtered);
  },
  isInTheNextXDays: function(days, event) {
    var today = new Date(),
        limit = new Date();
    limit.setDate(today.getDate() + days);
    return event.date <= limit;
  }
});
