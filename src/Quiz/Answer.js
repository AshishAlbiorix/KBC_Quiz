import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
function Answer (props){
const answer_in = props.wrong;
const answer = answer_in.concat(props.right);
const [ans,setAns] = useState([]);
return (
    <div className="row text-left">
        {
        answer.map((data,index)=>
            <div className="col-sm-6" key={index}>
                <div  className="ans-box">
                <input type="radio" id={data+"-"+index} name={props.right} onChange={(e) => {
					  setAns(data)
				  }} />
                <label htmlFor={data+"-"+index}>{data}</label>
                </div>
            </div>
        )
        }
    </div>
)
}
export default Answer;