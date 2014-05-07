ToDoManager::Application.routes.draw do
  root :to => 'application#index'
  resources :tasks, :except => [:new, :edit]
end
