ToDoManager.TaskController = Ember.ObjectController.extend({
  actions: {
    removeTask: function() {
      var controller = this;
      var task = this.get('model');
      task.deleteRecord();
      task.save().then(function() {
        controller.transitionToRoute('tasks');
      });
    },

    isCompleted: function(key, value){
      var task = this.get('model');

      if (value === undefined) {
        return model.get('is_completed');
      } else {
        model.set('is_completed', value);
        model.save();
        return value;
      }
    }.property('model.is_completed')
  }
});
