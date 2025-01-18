import { useState } from "react"

export default  function Todo(){

  const [Input,setInput] = useState('')
  const [currentIndex,setCurrentIndex] = useState(null)
  const [todos,setTodos] = useState([])
  function addTodo(){
    if(Input.trim()=='') return;
    if(currentIndex!=null){
      const update = todos.map((itm,indx)=>(currentIndex === indx? Input : itm))
      setTodos(update)
      setCurrentIndex(null)
    }
    else 
    {
      setTodos([...todos,Input])
    }
   
    setInput('')
  }
  function deleteTodo(index){
 const updatedTodos = todos.filter((itm,indx)=>(indx!=index))

// updatedTodos.splice(index,1)
 setTodos(updatedTodos)
  }
  function edit(index){
    setInput(todos[index])
    setCurrentIndex(index)
  }
  return(<>
    <div>

      <div>
        <input value={Input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder=" Enter todos Here" />
        <button onClick={addTodo} className="border-2 border-black p-2 rounded-md">{currentIndex != null? "Update Todo" : "Add Todo"}</button>
      </div>
      <ul>

        {todos.map((itm,index)=>(<li key={index}>{itm} <button onClick={()=>edit(index)} className="m-2 p-2 border-2 rounded-md">Edit</button> <button onClick={()=>deleteTodo(index)} className="p-2 border-2 rounded-md"> Delete</button></li>))}
      </ul>
      
    </div>
  </>)
}