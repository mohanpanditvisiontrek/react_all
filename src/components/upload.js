import React, { useState} from 'react'
import Axios from "axios";

import { mycontext } from "./show"

function Upload(){



const url="http://127.0.0.1:8000/"
const [data,setData]=useState({
    photo:"",
    description:"",

})

function submit(e){
    e.preventDefault();
    Axios.post(url,{
        photo:data.photo,
        description:data.description
    })
}


    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }

  
return(
    <>
    <div className="container">
    <div className="row">
        <div className="col">
            <p>upload from here</p>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)}  value={data.photo} id="photo" type="file" placeholder="select image" /> <br /> <br />
                <input onChange={(e)=>handle(e)} value={data.description} id="description" type="text" placeholder="Write your description" /> <br /> <br />
            <button className="btn btn-primary">Post</button>
            </form>
        </div>
        <div className="row">
            <div className="col">
                <mycontext.Consumer>
                    {d => <h3>{d}</h3>}
                </mycontext.Consumer>
            </div>
        </div>
    </div>
    </div>
    </>

)
}



export default Upload;