import { Fragment, useState } from "react"

type FormElem = React.FormEvent<HTMLFormElement>
interface ITodo {
  text: string
  complete: boolean
}

export default function TypescriptForm() {
  const [value, setValue] = useState<string>("")
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }

  const addTodo = (text: string) => {
    const newToDos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newToDos)
  }

  const completeTodo = (index: number) => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const eliminateTodo = (index: number) => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index}>
            <div
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
              }}
            >
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? "Incomplete" : "Complete"}
            </button>
            <button type="button" onClick={() => eliminateTodo(index)}>
              x
            </button>
          </div>
        ))}
      </section>
    </Fragment>
  )
}
