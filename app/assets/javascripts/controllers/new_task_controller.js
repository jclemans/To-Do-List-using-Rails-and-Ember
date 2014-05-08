ToDoManager.NewTaskController = Ember.ObjectController.extend({
  actions: {
    createTask: function() {
      // Get the task name set by the "New Todo" text field
      var name = this.get('newTask');
      if (!name.trim()) { return; }

      //create the new Task model
      var task = this.store.createRecord('task', {
        name: name,
        done: false
      });

      //clear the new task field
      this.set('newTask', '');

      //save the new model
      task.save();
    }
  }
});
