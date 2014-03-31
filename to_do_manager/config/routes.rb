ToDoManager::Application.routes.draw do
  match('/', {:via => :get, :to => 'tasks#index'})
  match('tasks', {:via => :get, :to => 'tasks#index'})
  match('tasks', {:via => :post, :to => 'tasks#create'})
  match('tasks/:id', {:via => :get, :to => 'tasks#show'})
  match('tasks/:id', {:via => :delete, :to => 'tasks#destroy'})
end
