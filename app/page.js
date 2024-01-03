"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(title)
    console.log(desc)
    setmainTask([...mainTask,{title,desc}])
    settitle('')
    setdesc('')    
    console.log(mainTask)
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2 className='text-center'>No Task Available</h2>
    if (mainTask.length>0) {
      
  renderTask = mainTask.map((t,i) => {
    return(
     <li key={i} className='flex items-center justify-between mb-7'>
       <div className='flex justify-between items-center w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
     </li>
    )
  })
    }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
      My To Do List
    </h1>

    <form onSubmit={submitHandler} className=''>

      <div className='ml-[21.6%]'>

      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-5 py-2 ' placeholder='Enter title here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}/>


      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-5 py-2' placeholder='Enter Description here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}/>


      </div>

      {/* <button className='border-4 border-black px-5 py-2 ml-56 bg-black text-white text-2xl rounded'>Add Task</button> */}

      <div className='flex justify-center mb-8'>
    <button className='border-4 border-black px-5 py-2  bg-black text-white text-2xl rounded'>Add Task</button>
    </div>
    </form>
      <hr/>

      <div className='p-5 bg-gray-400'>
        <ul >
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
