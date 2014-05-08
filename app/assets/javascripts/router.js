ToDoManager.Router.map(function() {
  this.resource('tasks', { path: '/' }, function() {
    this.resource('new_task');
    this.resource('task', { path: '/tasks/:task_id'}, function() {
      this.resource('edit_task');
    });
  });

});
