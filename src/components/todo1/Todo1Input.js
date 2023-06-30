import { useState } from "react";

const Todo1Input = ({changeView, addTodo}) => {


    const [todo,setTodo] = useState({title:''})

    return ( 
        <div className="w-full bg-green-300">
            <div>Todo1 Input</div>
                <div>
                <input type="text" name="title" value={todo.title} 
                className="m-3 p-3 bg-blue-200" 
                onChange={(e) => {
                todo.title = e.target.value
                setTodo({...todo})
                }}>
                </input>

                <button
                    className="bg-blue-200 m-3 p-3 border-2"
                    onClick={() => {
                        addTodo(todo)
                        setTodo({title:''})
                    }}
                >    
                </button>
            </div>
        </div>
     );
}
 
export default Todo1Input;