"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    setTask([...task,{title,desc}]);
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) =>{
    let copyTask = [...task]
    copyTask.splice(i,1)
    setTask(copyTask)
  }

  let renderTask = <h2 className='text-center font-bold'>No Task Available</h2>

  if(task.length > 0){
    renderTask = task.map((t,i) =>{
      return(
        <li key={i} className='flex items-center justify-between'>
          <div className='flex items-center justify-between mb-5 w-1/3'>
            <h5 className='text-xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}} 
          className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
    })
  }
  return (
    <>
      <h1 className=' text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Sandeep Todo List</h1>
      <form onSubmit={submitHandler}>
        <div className='mx-12 flex'>
          <input 
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded m-8 px-4 py-2'
            placeholder='Enter Task Name'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          <input 
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded m-8 px-4 py-2'
            placeholder='Enter Task Description'
            value={desc}
            onChange={(e)=>{
              setDesc(e.target.value)
            }}
          />
          <button className='bg-black border border-gray-300 text-xl rounded text-white m-8 px-4 py-2 font-bold'>Add Task</button>
        </div>
      </form>
      <hr />
    <div class="p-8 bg-slate-200">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}
export default page