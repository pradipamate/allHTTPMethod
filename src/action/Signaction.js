import axios from 'axios';

// export const onload=()=>(dispatch)=>{
//     //    axios.get('https://jsonplaceholder.typicode.com/todos/')
//     //   //const data = await res.json();
//     //  .then(data=>data.json())
//     //  .then((data) => {
//     //     dispatch({type:"add",payload:data})
//     //   })

//       axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(data =>data.json())
//       .then((data)=> {
//         //const persons = data;
//         console.log("persons",persons);
//         //this.setState({ persons });
//         //dispatch({type:"add",payload:data})
//       })
//     //console.log("data",data);
// }


export const onload=()=>{
    return (dispatch) => {
      dispatch({type:"FETCH_BEEGIN"});
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((data) => {
          dispatch({ type: "add", payload: data });
        });
    }; 
  }


  export const Delete=(id)=>{
     axios.delete("http://localhost:3004/comments/"+ id)
    .then(res => {
      console.log(res);
      console.log(res);
    })
  }

  export const submitt=(data)=>{
    axios.post("http://localhost:3004/comments/",{
     body:data,
     headers:{'Content-Type': 'x-www-form-urlencoded'},
    })
   .then(res => {
     console.log(res);
     console.log(res);
   })
 }
 
 export const put=(id,data)=>{
    console.log(id);
    axios.put("http://localhost:3004/comments/"+ id,{
        body:data, headers:{'Content-Type': 'x-www-form-urlencoded'}
    })
   .then(res => {
     console.log(res);
     //console.log(res);
   })
 }

