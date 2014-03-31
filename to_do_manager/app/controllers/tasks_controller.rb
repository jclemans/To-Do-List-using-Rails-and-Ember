class TasksController < ApplicationController

  def index
    @tasks = Task.all
    @task = Task.new
    render('tasks/index.html.erb')
  end

  def create
    @task = Task.new(:name => params[:task],
                     :done => false)
    if @task.save
      redirect_to '/tasks'
    else
      render('tasks/index.html.erb')
    end
  end

  def show
    @task = Task.find(params[:id])
    render('tasks/show.html.erb')
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to '/tasks'
    # render('tasks/destroy.html.erb')
  end
end
