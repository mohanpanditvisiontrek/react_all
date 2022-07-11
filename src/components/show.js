import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import Upload from './upload'


export const mycontext=React.createContext();



function Show() {
  let [data,setData]= useState([])

  useEffect(()=>{
    async function getAllData(){
      try{
        let mydata=await axios.get("http://127.0.0.1:8000/")

        setData(mydata.data)
      }
      catch(error){
        console.log(error);
      }
    }
    getAllData()
  },[])


  var employee={
    name:"mohan",
    department:"python"
  }



  return (
       <>
        {
          data.map((value,i)=>{
            return (
              <div>
                  <p index={value.id}>{i+1} {value.description}</p>
                  {/* <img  src={process.env.PUBLIC_URL+"Protect_website_.png"} alt="w"/> */}
                  <img  src={value.photo} alt="w" width="500px" height="250px"/>
                                
              </div>
            )
          })
        }
         <mycontext.Provider value={employee.name}>
                    <Upload/>
          </mycontext.Provider> 
       </>

  );
}

export default Show;
