import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from './../redux/todos/todoActions'

const index = () => {
  const todos = useSelector(state => state.todo)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const { addTodo } = bindActionCreators(todoActions, dispatch)

  return (
    <div>
      <Link href="/about">ve a about</Link>
      <button onClick={() => addTodo("hola...")}>add new todo...</button>
    </div>
  )
}

export default index

