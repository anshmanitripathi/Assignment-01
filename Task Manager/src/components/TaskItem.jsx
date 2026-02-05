import React, { useState } from 'react';

function TaskItem({ task, dispatch }) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ newText, setNewText ] = useState(task.text)

    const handleSave = () => {
        dispatch({
            type: 'EDIT_TASK',
            payload: { id: task.id, text: newText }
        });
        setIsEditing(false);
    };
    return (
        <div>

            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
            />

            <span>             {task.text}                  </span>

            {isEditing ? (
                <>
                    <input type="text" value={newText} onChange={(e) => { setNewText(e.target.value) }} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : <>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
            }

            <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
                Delete
            </button>

        </div>
    );
}

export default TaskItem;