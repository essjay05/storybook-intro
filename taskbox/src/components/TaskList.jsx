import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types';

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask
  }

  if (loading) {
    return <div className="list-items">Loading...</div>
  }
  
  if (tasks.length === 0) {
    return <div className="list-items">TaskList is empty.</div>
  }

  return (
    <div className="list-items">
      { tasks.map( task => (
          <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

TaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
};
TaskList.defaultProps = {
  loading: false,
};

export default TaskList;