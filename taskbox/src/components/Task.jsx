import React from 'react';

const Task = ({ 
  task: { id, title, state},
  onArchiveTask,
  onPinTask
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox">
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}>
        </span>
      </label>

      <label htmlFor="title" aria-label={title} classname="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      { state !== "TASK_ARCHIVED" && (
        <button
          className="pin-bottom"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          key={`pinTask-${id}`}>
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  )
}

export default Task;