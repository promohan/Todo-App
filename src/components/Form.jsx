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
      <ToDoListItems   //parameters or props 
        value={value}
        key={index}
        indexNo={index}
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


  // new added for editing
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(value);



  //ITEM DELETE LOGIC
  const deleteRow = (e) => {
    // alert(indexNo)
    e.stopPropagation(); // Prevents completing the task when clicking delete
    const finalData = todoList.filter((u, i) => i != indexNo)
    setTodoList(finalData)
  }

  //DATA COMPLETE LOGIC
  const completeTask = () => {
    setStatus(!status)
    // console.log("ram")
  }



  // EDIT LOGIC  ***new added for editing***
  const handleEdit = (e) => {
    e.stopPropagation(); // Prevents completing the task when clicking edit
    setIsEditing(true);
  };
  // SAVE LOGIC  
  const handleSave = (e) => {
    e.stopPropagation();
    if (!editText.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    // Check if the edited text matches another existing task (excluding itself)
    const exists = todoList.some((item, index) => item === editText && index !== indexNo);
    if (exists) {
      alert("ToDo Name Already Exists....");
      return;
    }

    const updatedList = [...todoList];
    updatedList[indexNo] = editText;
    setTodoList(updatedList);
    setIsEditing(false);
  };




  //   return (
  //     <li onClick={completeTask} className={status ? "complete-task" : ""} >
  //       {indexNo + 1}.{value}

  //       <span className="edit-btn">Edit</span>
  //       <span className="delete-btn" onClick={deleteRow}>&times;</span>
  //     </li>
  //   )
  // }


  return (
    <li onClick={completeTask} className={status ? "complete-task" : ""}>
      {indexNo + 1}.{" "}

      {/* add ternary op OR conditional rendering  */}
      {isEditing ? 
      (<input type="text" className="edit-input" value={editText} onClick={(e) => e.stopPropagation()} // Prevents toggling completion status while typing
        onChange={(e) => setEditText(e.target.value)}
      />) 
      : (value)}    



      {isEditing ? (<span className="edit-btn" onClick={handleSave}>Save</span>) : (<span className="edit-btn" onClick={handleEdit}>Edit</span>)}


      <span className="delete-btn" onClick={deleteRow}>&times;</span>
    </li>
  );
}
