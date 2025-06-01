import { useMatomo } from "@datapunt/matomo-tracker-react";
import type { Todo } from "../../moudles/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// Todo Item Component
export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const { trackEvent } = useMatomo();

  const handleToggle = () => {
    onToggle(todo.id);
    trackEvent({
      category: "Todo",
      action: todo.completed ? "Uncomplete" : "Complete",
      name: todo.text,
    });
  };

  const handleDelete = () => {
    onDelete(todo.id);
    trackEvent({
      category: "Todo",
      action: "Delete",
      name: todo.text,
    });
  };

  return (
    <li className="flex items-center justify-between p-2 border rounded">
      <span
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>

      <button
        className="ml-10 px-2 py-1 text-sm bg-red-500 text-white rounded"
        onClick={handleToggle}
      >
        {todo.completed ? "completed" : "uncompleted"}
      </button>

      <button
        onClick={handleDelete}
        className="ml-4 px-2 py-1 text-sm bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
