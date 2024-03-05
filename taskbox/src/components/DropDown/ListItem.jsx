import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({
  listItem: { id, title, className}
}) => {
  return(
    <li id={id} aria-label={`${title} list item`} title={title} className={`list-item ${className}`}>
      {title}
    </li>
  )
}

ListItem.propTypes = {
  /** Composition of the ListItem */
  ListItem: PropTypes.shape({
    /** Id of the ListItem */
    id: PropTypes.string.isRequired,
    /** Title of the ListItem */
    title: PropTypes.string.isRequired,
    className: PropTypes.string
  }),
};

export default ListItem