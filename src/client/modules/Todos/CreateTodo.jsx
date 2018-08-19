import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createTodo } from '../../redux/modules/todos'

const CreateTodo = ({ children, className, ...rest }) => (
  <form {...rest} className={className}>
    <input name="todo" />
    {children}
  </form>
)

CreateTodo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CreateTodo.defaultProps = {
  children: undefined,
  className: undefined,
}

export default connect(
  null,
  dispatch => ({
    createTodo: todo => dispatch(createTodo(todo)),
  }),
)(CreateTodo)
