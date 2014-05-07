ToDoManager::Application.routes.draw do
  resources :tasks, :except => [:new, :edit]
end
