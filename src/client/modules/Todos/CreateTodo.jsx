import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, TextInput, Label, FillButton, Flex } from 'tailwind-react-ui'
import { createTodo } from '../../redux/modules/todos'

const CreateTodo = ({ children, className, onSubmit }) => {
  const input = React.createRef()

  function handleSubmit(e) {
    onSubmit({ text: input.current.value })
    e.preventDefault()

    input.current.value = ''
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Flex items="end" m={{ b: 4 }}>
        <Field id="todo" m={{ b: 0 }}>
          <Label>Add todo</Label>
          <TextInput name="todo" innerRef={input} m={{ b: 0 }} />
        </Field>
        <FillButton brand="primary" type="submit" m={{ l: 4 }}>
          Add
        </FillButton>
      </Flex>
      {children}
    </form>
  )
}

CreateTodo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
}

CreateTodo.defaultProps = {
  children: undefined,
  className: undefined,
  onSubmit: undefined,
}

export default connect(
  null,
  dispatch => ({
    createTodo: todo => dispatch(createTodo(todo)),
  }),
)(CreateTodo)
