import React, { useEffect } from 'react';
import {onload,Delete,submitt,put} from '../action/Signaction'
import { useSelector, useDispatch } from 'react-redux';

const Dashboard=(props)=>{

    const todos = useSelector((state) => state.Sigining);
    console.log("todos",todos);

    const dispatch=useDispatch();

    useEffect(()=>{
            dispatch(onload()); 
    },[])
    
   const direct=(event)=>{
       dispatch(Delete(event.target.id))
       //console.log(event.target.id,"event.target.value")
    }

    const SubmitHandler=(event)=>{
        const data={"age":12,name:"pradip"}
        dispatch(submitt(data))
    }
    
    const puthandler=(event)=>{
        //console.log(event.target.id);
        //const putid=event.target.value;
        //console.log(putid);
        const data={"age":12,name:"ddumesh"}
        dispatch(put(event.target.value,data))
    }
   
    if(todos.all!==undefined && !todos.fetching){
        var list=todos.all.map((item)=>
        <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.website}</td>
        </tr>
        )
    }
    else{
       list="loadding"
    }

    return(
        <div>
            <input type="text"  onChange={direct}  id="1"/>  
            <button type="button" onClick={SubmitHandler}>add data</button>  
            <button type="text" value="3" onClick={puthandler}>put data</button>   
            <table>
                <thead>
                    <tr>
                      <th>name</th>
                      <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>  
        </div>
     )
}

export default Dashboard;