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
      redirect_to '/'
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
  end

  def edit
    @task = Task.find(params[:id])
    render('tasks/edit.html.erb')
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(:name => params[:task])
      redirect_to '/'
    else
      render('tasks/edit.html.erb')
    end
  end
end

