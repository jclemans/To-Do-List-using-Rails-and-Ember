class RenameDoneColumn < ActiveRecord::Migration
  def change
    rename_column :tasks, :done, :isCompleted
  end
end
