ToDoManager.Router.map(function() {
  this.resource('tasks', { path: '/' });
  this.resource('task', { path: '/tasks/:id' });
});
