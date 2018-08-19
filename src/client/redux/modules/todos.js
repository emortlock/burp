const NAME = 'todos'

// Types
const CREATE_TODO = `${NAME}/create_todo`
const UPDATE_TODO = `${NAME}/update_todo`
const DELETE_TODO = `${NAME}/delete_todo`
const COMPLETE_TODO = `${NAME}/complete_todo`
const COMPLETE_ALL_TODOS = `${NAME}/complete_all_todos`
const CLEAR_COMPLETED_TODOS = `${NAME}/clear_completed_todos`

// Actions
export const createTodo = payload => ({ type: CREATE_TODO, payload })
export const updateTodo = payload => ({ type: UPDATE_TODO, payload })
export const deleteTodo = payload => ({ type: DELETE_TODO, payload })
export const completeTodo = payload => ({ type: COMPLETE_TODO, payload })
export const completeAllTodos = payload => ({
  type: COMPLETE_ALL_TODOS,
  payload,
})
export const clearAllCompletedodos = payload => ({
  type: CLEAR_COMPLETED_TODOS,
  payload,
})

// Reducer
const initialState = [
  {
    id: 0,
    text: 'Complete app',
    completed: false,
  },
]

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${CREATE_TODO}`:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          ...payload,
        },
      ]
    case `${UPDATE_TODO}`:
      return state.map(
        todo => (todo.id === payload.id ? { ...todo, ...payload } : todo),
      )

    case `${DELETE_TODO}`:
      return state.filter(todo => todo.id !== payload.id)

    case `${COMPLETE_TODO}`:
      return state.map(
        todo =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      )

    case COMPLETE_ALL_TODOS: {
      const allCompleted = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !allCompleted,
      }))
    }

    case CLEAR_COMPLETED_TODOS:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}

// Constants
export const SHOW_INCOMPLETE = 'show-incomplete'

export const SHOW_COMPLETE = 'show-complete'

// Selectors
export const getTodos = (state, filter) => {
  const todos = state[NAME]

  switch (filter) {
    case SHOW_COMPLETE:
      return todos.filter(todo => todo.completed)
    case SHOW_INCOMPLETE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

export default reducer
