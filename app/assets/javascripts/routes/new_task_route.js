ToDoManager.NewTaskRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('task');
  }
});
