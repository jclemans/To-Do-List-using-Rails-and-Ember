ToDoManager.NewTaskController = Ember.ObjectController.extend({
  actions: {
    createTask: function() {
      var model = this.get('model');
      var controller = this;

      model.save()
      .then(function() {
        controller.transitionToRoute('tasks', model);
      });
    }
  }
});
