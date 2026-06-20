import { useState } from "react";

const Form = () => {

    
  const [value, setValue] = useState("");//madhav
  const [todoList, setTodoList] = useState([])  //[ram,shayam,madhav]

  function hello(e) {
    e.preventDefault();

    if (!todoList.includes(value)) {

      const finalList = [...todoList, value]//ram+shayam+madhav
      setTodoList(finalList)

      setValue("")

      // console.log(todoList)
    } else {
      alert("ToDo Name Already Exists....")
    }
  }

  const list = todoList.map((value, index) => {
    return (
      <ToDoListItems value={value} key={index} indexNo={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    )
  })


  return (
    <div>
        <form onSubmit={hello}>
              <input
                type="text"
                placeholder="Enter your Task...."
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)//ram,shayam,madhav
                }} />
              <button className="AddTask">Add Tasks</button>
            </form>
    
            <div className="outerDiv">
              <ul>
                {list}
              </ul>
            </div>
    </div>

            
  )
}

export default Form




  function ToDoListItems({ value, indexNo, todoList, setTodoList }) {
        const [status, setStatus] = useState(false); //ager status true hoto to className="complete-task" this one else empty class!!!
       
        //ITEM DELETE LOGIC
        const deleteRow = () => {
    // alert(indexNo)
    const finalData = todoList.filter((u, i) => i != indexNo)
    setTodoList(finalData)
  }

  //DATA COMPLETE LOGIC
  const completeTask = () => {
    setStatus(!status)
    // console.log("ram")
  }

  return (
    <li onClick={completeTask} className={status ? "complete-task" : ""} >       {indexNo + 1}.{value}<span onClick={deleteRow}>&times;</span></li>
  )
}
