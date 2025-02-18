import React, { useState } from 'react'

const TodoList = () => {
    const[activity, setactivity]= useState("")
    const[listData, setlistData]= useState([]);
    function addActivity()
    {
      setlistData((listData)=>
    {
        const updateList= [...listData, activity]
        console.log(updateList)
        setactivity("");
        return updateList
    });
    }

    function removeActivity(i)
    {
      const listUpdateData= listData.filter((elem, id)=>
    {
        return i!= id
    })
    setlistData(listUpdateData)
    }

    function removeAll()
    {
        setlistData([])
    }
  return (
    <>
      <div className="container1">
         <div className="header">TODO LIST </div>
         <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setactivity(e.target.value)}/>
         <button onClick={addActivity}>Add</button>
         <p className='list-heading'>Here is your List : {")"}</p>
         {
            listData!=[] && listData.map((data, i)=>
            {
                return(
                    <>
                     <p key={i}>
                       <div className="listData">{data}</div>
                       <div className="btn-position">
                        <button onClick={()=>removeActivity(i)}>remove (-)</button>
                       </div>
                     </p>
                    </>
                )
            })
         }
         {listData.length>=1 && <button onClick={removeAll}>remove all</button>}
      </div>
    </>
  )
}

export default TodoList
