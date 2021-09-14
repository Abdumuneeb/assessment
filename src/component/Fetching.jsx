import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import DisplayData from './DisplayData';

const Fetching = () => {
    const [input, setInput] =useState([]);
  
    // Searching
    // const onChangeHandler = (event) => {
    //     event.preventDefault();
    //     let value = event.target.value.toLowerCase();
    //     let result = [];
    //     result = data.filter((datas) => {  
    //       return datas.firstName.search(value) != -1;
    //     });
    //     setData(result);
    //   };

    useEffect(() => {
        
       fetch('https://thronesapi.com/api/v2/Characters')
       .then((res)=>res.json())
       .then((result)=>setInput(result));

    }, [])
    console.log(input);
    return (
        <div>
            <input placeholder="Search here" onChange={onChangeHandler}/> 
        {
            input.map((value,index)=>{
                return <ul key={index}>
                         <li key={index}> {value.firstName} </li>
                         <li key={index}> {value.lastName} </li>   
                         <Link style={{textDecoration:"none",backgroundColor:"orange",borderRadius:"5px",color:"white",minHeight:"50px",marginTop:"40px" }} to={`/display?id=${value.id}`}> Show More... </Link> 
                        </ul>            
                
            })
        }
            
        </div>
    )
}

export default Fetching
