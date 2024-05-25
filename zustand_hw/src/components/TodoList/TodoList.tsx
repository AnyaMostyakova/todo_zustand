import React from 'react';
import TodoItem from '../TodoItem/TodoItem.tsx';
import TodoInput from '../TodoInput/TodoInput.tsx';
import styles from './TodoList.module.css';
import useTodoStore from '../../stores/useTodoStore';

const TodoList: React.FC = () => {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            <TodoInput onAddTodo={addTodo} />
            <ul className={styles.todoList}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
