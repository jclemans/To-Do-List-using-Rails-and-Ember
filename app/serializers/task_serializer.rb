class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :is_completed
end
