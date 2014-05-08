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
      var model = this.get('model');

      if (value === undefined) {
        // property being used as a getter
        return model.get('done');
      } else {
        // property being used as a setter
        model.set('done', value);
        model.save();
        return value;
      }
    }.property('model.done')
  }
});
