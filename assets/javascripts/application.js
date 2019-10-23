MyApp = new Backbone.Marionette.Application();
MyApp.addRegions({
  mainRegion: "#content"
});

Place = Backbone.Model.extend({});
Places = Backbone.Collection.extend({
  model: Place
});

DescriptionView = Backbone.Marionette.ItemView.extend({
  template: "#description-template",
});

PlaceView = Backbone.Marionette.CompositeView.extend({
  template: "#accordion-group-template",
  className: "accordion-group",
  events: {
    'click a': 'showPlace'
  },

  showPlace: function(){
    let pl = eval(this.model.get('id'));
    pl.openPopup();
  }
});

AccordionView = Backbone.Marionette.CollectionView.extend({
  id: "placeList",
  className: "accordion",
  itemView: PlaceView
});
