import React from "react";
function Todolist(){
   const [activity ,setActivity]=useState("");
 const [listData,setlistData]=usestate([]);
 function  add Activity(){
       \\setlistData([....listData,activity])
      \\console.log (listData)
  setlistData((listData)=>{
    const updatedList=[...listData,activity]
    console.log(updatedList)
    setActivity('');
   return updatedList
  })
  
}
function removeActivity(i){
  const updatedListData=listData.filter((elem,id)=>{
    return i!=id;
   )}
 setListData(updatedlistData);
}
function removeAll(){
  setListData([])

}
 return(
  <>
  <div className="container">
      <div className="header">Todo List</div>
      <input type="text" placeholder="Add Activity"  value={activity}  on change={(e)
      =>setActivity(e.target.value)
       <button onclick={addActivity}>App</button>
       <p className='List_heading'>Here is your list:{")"} </p>
       {listData!=[]&& listData.map((data,i)=>{
        return(
         <>
         <p key={i}>
         <div className="listData">{data}</div>
         <div className"btn_position"><button onclick={()=>removeActivity
           (i)}>remove(-)
            ()</button></div>
         </p>
         </>
        )
        })}

      {listData.length>=1&&  <button onClick={removeAll>RemoveAll</button>}
     
  <div>
  </>
 )
}
export default TodoList
