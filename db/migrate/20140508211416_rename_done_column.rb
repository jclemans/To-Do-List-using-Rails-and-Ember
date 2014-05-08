class RenameDoneColumn < ActiveRecord::Migration
  def change
    rename_column :tasks, :done, :is_completed
  end
end
