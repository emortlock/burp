import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Title } from 'tailwind-react-ui'

import { getTodos, createTodo } from '../../redux/modules/todos'
import Layout from '../../components/Layout'

import CreateTodo from './CreateTodo'

const TodoList = ({ todos, onSubmit }) => (
  <Layout>
    <Title size={6}>To Do</Title>
    <CreateTodo onSubmit={onSubmit} />
    {todos.map(todo => (
      <div key={todo.id}>{todo.text}</div>
    ))}
  </Layout>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  onSubmit: PropTypes.func,
}

TodoList.defaultProps = {
  todos: [],
  onSubmit: undefined,
}

export default connect(
  state => ({
    todos: getTodos(state),
  }),
  {
    onSubmit: createTodo,
  },
)(TodoList)
