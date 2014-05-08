ToDoManager.TaskController = Ember.ObjectController.extend({
  actions: {
    removeTask: function() {
      var controller = this;
      var task = this.get('model');
      task.deleteRecord();
      task.save().then(function() {
        controller.transitionToRoute('tasks');
      });
    }
  }
});
