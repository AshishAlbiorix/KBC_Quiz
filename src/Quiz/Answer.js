import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
function Answer (props){
    console.log(props)
return (
    <div className="row text-left">
        {
            props.ans.map((item,index)=>{
                return (
                    <div className="col-sm-6" key={index}>
                    <div  className="ans-box">
                    <input type="radio" id={item+"-"+index} name={props.ans} onChange={()=>props.alert(item)} />
                        <label htmlFor={item+"-"+index}>{item}</label>
                    </div>
                    </div>
                )
            })
        }
    </div>
)
}
export default Answer;