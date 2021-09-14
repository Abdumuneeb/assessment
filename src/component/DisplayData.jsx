import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const DisplayData = () => {
    
    const [inputData,setInputData] =useState({});

      const querry =useQuery();
    
      useEffect(() => { 
        
        fetch('https://thronesapi.com/api/v2/Characters/'+querry.get('id')) 
        .then((res)=>res.json())
        .then((result)=>setInputData(result));
 
     }, [])
     console.log(querry.get('id'));
    return (
        <div>
        <h1> Details </h1>
        <ul>
            <img src ={inputData.imageUrl}/>
           <li> first Name : {inputData.firstName} </li>  
           <li> Last Name: {inputData.lastName} </li>  
           <li> Full Name: {inputData.fullname} </li>  
           <li> Title: {inputData.title} </li>  
        </ul>
        </div>
    )
}

export default DisplayData
